import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { catalog, byCatalog, finishes, projectWalls, projectBounds, siteBounds, defaultSite, snap, clamp, roomAt } from './model.js';

const V3=(x,y,z)=>new THREE.Vector3(x,y,z);
const radians=v=>v*Math.PI/180;
const standard=(color,roughness=.75,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
const brass=standard('#a0885f',.32,.65),wood=standard('#806047',.55),fabric=standard('#e5dece',.9),ink=standard('#30352e',.5);
const unitCube=new THREE.BoxGeometry(1,1,1);
function box(w,h,d,mat,x=0,y=h/2,z=0,round=0){const o=new THREE.Mesh(round?new RoundedBoxGeometry(w,h,d,3,Math.min(round,w/4,h/4,d/4)):unitCube,mat);if(!round)o.scale.set(w,h,d);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;return o;}
function cylinder(r,h,mat,x=0,y=h/2,z=0){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,32),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;return o;}
function sphere(r,mat,x,y,z){const o=new THREE.Mesh(new THREE.SphereGeometry(r,20,12),mat);o.position.set(x,y,z);o.castShadow=true;return o;}
function label(text,cls='scene-label'){const el=document.createElement('div');el.className=cls;el.textContent=text;const o=new CSS2DObject(el);return o;}
function disposeGroup(group){group.traverse(o=>{if(o.isCSS2DObject)o.element.remove();if(o.geometry&&o.geometry!==unitCube)o.geometry.dispose();if(o.material&&!o.userData.sharedMaterial){const ms=Array.isArray(o.material)?o.material:[o.material];ms.forEach(m=>{if(![brass,wood,fabric,ink].includes(m))m.dispose();});}});group.clear();}

export class HomeScene {
 constructor(host,callbacks){
  this.host=host;this.callbacks=callbacks;this.project=null;this.selection=null;this.tool='select';this.view='3d';this.instances=new Map();this.templates=new Map();this.pending=null;this.drawing=null;this.drag=null;this.cameraTween=null;this.pendingZoom=0;this.frame=0;this.assetCount=0;
  this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#e8e5de');
  this.renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,powerPreference:'high-performance'});
  this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.96;this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.autoUpdate=false;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.prepend(this.renderer.domElement);this.renderer.domElement.setAttribute('aria-label','Interactive apartment canvas');this.renderer.domElement.setAttribute('tabindex','0');
  this.labelRenderer=new CSS2DRenderer();Object.assign(this.labelRenderer.domElement.style,{position:'absolute',inset:'0',pointerEvents:'none'});host.append(this.labelRenderer.domElement);
  const pmrem=new THREE.PMREMGenerator(this.renderer);const environment=new RoomEnvironment();this.scene.environment=pmrem.fromScene(environment,.04).texture;environment.dispose();pmrem.dispose();this.scene.environmentIntensity=.42;
  this.perspective=new THREE.PerspectiveCamera(42,1,.1,2000);this.ortho=new THREE.OrthographicCamera(-16,16,12,-12,.1,400);this.camera=this.perspective;
  this.controls=this.createControls('3d');this.controls.target.set(9,0,-5);
  this.hemi=new THREE.HemisphereLight('#fff9ec','#b1b5aa',2.4);this.scene.add(this.hemi);
  this.sun=new THREE.DirectionalLight('#fff2d9',3.3);this.sun.position.set(-7,22,16);this.sun.castShadow=true;this.sun.shadow.mapSize.set(2048,2048);Object.assign(this.sun.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:.1,far:90});this.sun.shadow.normalBias=.025;this.sun.shadow.bias=-.0002;this.sun.shadow.radius=4;this.scene.add(this.sun);
  this.fill=new THREE.DirectionalLight('#e6edff',1);this.fill.position.set(20,12,-20);this.scene.add(this.fill);
  this.ground=box(2000,.12,2000,standard('#e6e3dc',1),0,-.49,0);this.ground.castShadow=false;this.scene.add(this.ground);
  this.landscape=new THREE.Group();this.arch=new THREE.Group();this.furniture=new THREE.Group();this.labels=new THREE.Group();this.selectionGroup=new THREE.Group();this.preview=new THREE.Group();this.guides=new THREE.Group();this.scene.add(this.landscape,this.arch,this.furniture,this.labels,this.selectionGroup,this.preview,this.guides);
  this.grid=new THREE.GridHelper(80,160,'#969c8b','#b5b9ae');this.grid.position.y=.035;this.grid.material.transparent=true;this.grid.material.opacity=.20;this.grid.visible=false;this.scene.add(this.grid);
  this.ray=new THREE.Raycaster();this.plane=new THREE.Plane(V3(0,1,0),0);this.pointer=new THREE.Vector2();
  this.loader=new GLTFLoader();this.loader.setMeshoptDecoder(MeshoptDecoder);this.textures=new THREE.TextureLoader();this.textureMaps={};
  for(const [name,file] of [['wood','wood.jpg'],['stone','stone.jpg'],['grass','grass-color.webp'],['grassNormal','grass-normal.webp'],['grassRough','grass-rough.webp']]){const t=this.textures.load(import.meta.env.BASE_URL+'textures/'+file,()=>{if(this.project){this.archSignature=null;this.landscapeSignature=null;this.sync(this.project);}});if(!['grassNormal','grassRough'].includes(name))t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.textureMaps[name]=t;}
  this.bindEvents();this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(host);this.resize();
  this.perspective.position.set(29,24,24);this.controls.update();this.animate();this.loadAssets();
 }
 createControls(view){const controls=new OrbitControls(this.camera,this.renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.08;controls.enableRotate=view!=='plan';controls.maxPolarAngle=Math.PI/2.05;controls.minDistance=3;controls.maxDistance=75;controls.minZoom=.4;controls.maxZoom=5;controls.addEventListener('start',()=>{this.cameraTween=null;this.pendingZoom=0;});controls.addEventListener('change',()=>{this.dirty=true;});return controls;}
 resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;this.renderer.setSize(w,h);this.labelRenderer.setSize(w,h);this.perspective.aspect=w/h;this.perspective.updateProjectionMatrix();const span=this.planSpan??21;this.ortho.left=-span*w/h/2;this.ortho.right=span*w/h/2;this.ortho.top=span/2;this.ortho.bottom=-span/2;this.ortho.updateProjectionMatrix();this.dirty=true;}
 async loadAssets(){
  const models=[...new Set(catalog.filter(c=>c.model).map(c=>c.model))];
  await Promise.all(models.map(async name=>{
   try{const gltf=await this.loader.loadAsync(import.meta.env.BASE_URL+'models/'+name+'.glb');const group=new THREE.Group();group.add(gltf.scene);gltf.scene.updateMatrixWorld(true);const b=new THREE.Box3().setFromObject(group),size=b.getSize(V3()),center=b.getCenter(V3());gltf.scene.position.sub(V3(center.x,b.min.y,center.z));group.userData.size=size;group.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;const mats=Array.isArray(o.material)?o.material:[o.material];for(const m of mats){m.envMapIntensity=.6;if(name==='plant')m.side=THREE.DoubleSide;}}});this.templates.set(name,group);this.callbacks.onAsset?.(name,++this.assetCount,models.length);if(this.project)this.syncFurniture(true,name);}
   catch(error){console.warn('Model fallback:',name,error.message);this.callbacks.onAsset?.(name,++this.assetCount,models.length);}
  }));
  this.callbacks.onReady?.();
 }
 makeFallback(c){
  const g=new THREE.Group();const m=standard(c.color,.85);const add=o=>g.add(o);
  switch(c.id){
   case 'garden-tree':{
    const bark=standard('#6f6047',.96);bark.name='Olive bark';const leaves=standard(c.color,.88);leaves.name='Olive foliage';leaves.side=THREE.DoubleSide;
    add(cylinder(.09,2.8,bark,0,1.4,0));
    for(let i=0;i<7;i++){const branch=cylinder(.033,1.6,bark,0,2.2,0);branch.rotation.z=(i%2?1:-1)*(.35+i*.08);branch.rotation.y=i*2.4;add(branch);}
    const leafGeometry=new THREE.SphereGeometry(.085,5,3),leafMesh=new THREE.InstancedMesh(leafGeometry,leaves,1900),matrix=new THREE.Matrix4(),q=new THREE.Quaternion(),scale=V3();let seed=7919;
    const random=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
    for(let i=0;i<1900;i++){const a=random()*Math.PI*2,u=random()*2-1,r=Math.cbrt(random()),v=Math.sqrt(1-u*u);const x=Math.cos(a)*v*r*1.45,z=Math.sin(a)*v*r*1.35,y=3.05+u*r*1.22; q.setFromEuler(new THREE.Euler(random()*Math.PI,random()*Math.PI,random()*Math.PI));scale.set(1.4,.28,.65);matrix.compose(V3(x,y,z),q,scale);leafMesh.setMatrixAt(i,matrix);leafMesh.setColorAt(i,new THREE.Color(c.color).multiplyScalar(.72+random()*.62));}
    leafMesh.castShadow=true;leafMesh.receiveShadow=true;add(leafMesh);break;
   }
   case 'sofa':case 'daybed':add(box(c.w,.4,c.d,m,0,.43,0,.14));add(box(c.w,.58,.18,m,0,.85,-c.d/2+.1,.08));for(const x of [-c.w/2+.15,c.w/2-.15])add(box(.3,.6,c.d,m,x,.66,0,.1));break;
   case 'armchair':case 'dining-chair':case 'stool':add(box(c.w,.14,c.d,m,0,.52,0,.06));add(box(c.w,.55,.12,m,0,.85,-c.d/2+.04,.05));for(const x of [-c.w*.35,c.w*.35])for(const z of [-c.d*.35,c.d*.35])add(cylinder(.022,.5,brass,x,.25,z));break;
   case 'rug':add(box(c.w,c.h,c.d,m,0,c.h/2,0,.008));break;
   case 'shelf':for(const y of [.12,.7,1.3,1.9,2.4])add(box(c.w,.05,c.d,wood,0,y,0));for(const x of [-c.w/2,c.w/2])add(box(.05,c.h,c.d,wood,x,c.h/2,0));for(let n=0;n<20;n++)add(box(.08,.3+((n*7)%4)*.03,.20,standard(['#bda585','#4b5147','#ddd3bf','#91705b'][n%4]),-c.w/2+.2+(n%10)*.23,.9+Math.floor(n/10)*.6,0));break;
   case 'pendant':add(cylinder(.012,.95,brass,0,.7,0));add(sphere(.20,standard('#fff0d4',.3),0,.20,0));break;
   case 'floor-lamp':add(cylinder(.23,.04,brass));add(cylinder(.016,1.4,brass,0,.72,0));add(new THREE.Mesh(new THREE.ConeGeometry(.28,.38,32,1,true),m));g.children.at(-1).position.y=1.55;break;
   case 'vanity':add(box(c.w,.6,c.d,wood,0,.55,0,.03));add(box(c.w+.04,.09,c.d+.04,m,0,.89,0,.025));add(sphere(.2,fabric,0,.94,0));break;
   case 'toilet':add(sphere(.23,m,0,.35,0));add(box(.4,.1,.52,m,0,.52,.02,.05));break;
   case 'shower':add(box(c.w,.05,c.d,m));add(box(.015,c.h,c.d,new THREE.MeshPhysicalMaterial({color:'#dce8df',transparent:true,opacity:.21,roughness:.05,metalness:.1}),-c.w/2,c.h/2,0));add(cylinder(.012,2.1,brass,.35,1.1,-.4));add(cylinder(.14,.02,brass,.25,2.2,-.4));break;
   case 'art':add(box(c.w,c.h,c.d,brass,0,c.h/2,0,.01));add(box(c.w-.06,c.h-.06,.01,m,0,c.h/2,.05));for(let i=0;i<4;i++)add(sphere(.18,standard(['#f0e5cf','#85694f','#4b5849','#c0b198'][i]),(i%2-.5)*.6,.4+Math.floor(i/2)*.45,.07));break;
   case 'plant':add(cylinder(.2,.45,standard('#a67951')));add(cylinder(.025,1.4,wood,0,.9,0));for(let i=0;i<18;i++){const a=i*2.4;const o=sphere(.16,standard('#5b7047'),Math.cos(a)*.3,.8+i*.05,Math.sin(a)*.3);o.scale.set(1,.35,1);add(o);}break;
   case 'bed':add(box(c.w,.3,c.d,wood,0,.2,0,.08));add(box(c.w,.35,c.d,m,0,.5,0,.10));add(box(c.w,.95,.15,m,0,.9,-c.d/2,.07));break;
   default:add(box(c.w,.12,c.d,m,0,c.h-.06,0,.035));add(box(c.w*.5,Math.max(.1,c.h-.12),c.d*.5,wood,0,(c.h-.12)/2,0,.025));
  }
  g.userData.size=new THREE.Box3().setFromObject(g).getSize(V3());return g;
 }
 instantiate(item){const c=byCatalog(item.catalogId);const template=this.templates.get(c.model);const root=new THREE.Group();root.userData.entity={type:'item',id:item.id};const mesh=template?template.clone(true):this.makeFallback(c);root.userData.asset=c.model;root.userData.loaded=!!template;const size=mesh.userData.size;root.userData.size=size?V3(size.x,size.y,size.z):new THREE.Box3().setFromObject(mesh).getSize(V3());
  mesh.traverse(o=>{if(o.isMesh){o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();for(const m of (Array.isArray(o.material)?o.material:[o.material])){m.userData.baseColor=m.color.clone();m.userData.baseMap=m.map;m.userData.baseRoughness=m.roughness;}}});root.add(mesh);return root;
 }
 colorize(root,item){const c=byCatalog(item.catalogId);root.traverse(o=>{if(!o.isMesh)return;const materials=Array.isArray(o.material)?o.material:[o.material];for(const m of materials){const name=m.name.toLowerCase();const isFabric=/ivory|boucle|linen|leather|velvet|pillow|olive|cloud/.test(name),isWood=/wood|oak|walnut|joinery/.test(name),isStone=/travertine|stone|marble|limestone/.test(name),isPot=/pot_diff|pot_/.test(name);const paint=(c.category==='Seating'||c.category==='Bedroom')?isFabric:(c.material==='Wood'?isWood:(c.id==='plant'?isPot:(c.material==='Stone'||c.material==='Ceramic'?isStone:true)));
    if(c.id==='garden-tree'?!/foliage/.test(name):!(paint||!root.userData.loaded))continue;
    {m.color.set(item.color);if(item.material==='Wood'){m.roughness=.45;m.metalness=0;m.map=this.textureMaps.wood?.image?this.textureMaps.wood:m.userData.baseMap;}else if(item.material==='Leather'){m.roughness=.46;m.metalness=0;m.map=m.userData.baseMap;}else if(item.material==='Stone'){m.roughness=.35;m.metalness=0;m.map=this.textureMaps.stone?.image?this.textureMaps.stone:m.userData.baseMap;}else if(item.material==='Metal'){m.roughness=.28;m.metalness=.7;m.map=null;}else{m.roughness=.82;m.metalness=0;m.map=m.userData.baseMap;}m.needsUpdate=true;}}
  });}
 syncFurniture(force=false,asset=null){
  if(!this.project)return;const ids=new Set(this.project.items.map(i=>i.id));for(const [id,g]of this.instances)if(!ids.has(id)){this.furniture.remove(g);g.traverse(o=>{if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());});this.instances.delete(id);}
  for(const item of this.project.items){let g=this.instances.get(item.id);const c=byCatalog(item.catalogId);if(force&&(!asset||c.model===asset)&&g){this.furniture.remove(g);this.instances.delete(item.id);g=null;}
   if(!g){g=this.instantiate(item);this.instances.set(item.id,g);this.furniture.add(g);}
   const size=g.userData.size;g.children[0].scale.set(item.w/Math.max(.01,size.x),item.h/Math.max(.01,size.y),item.d/Math.max(.01,size.z));g.position.set(item.x,.07+item.elevation,-item.z);g.rotation.y=radians(item.r);const signature=item.color+item.material;if(g.userData.finish!==signature){this.colorize(g,item);g.userData.finish=signature;}
  }this.updateSelection();if(force){this.dirty=true;this.renderer.shadowMap.needsUpdate=true;}
 }
 floorMaterial(room){const f=finishes.find(f=>f.id===room.floor)??finishes[0];const t=f.texture?(f.texture==='wood.jpg'?this.textureMaps.wood:this.textureMaps.stone):null;const m=standard(f.color,f.type==='Stone'?.6:.88);if(t?.image){m.map=t.clone();m.map.needsUpdate=true;m.map.repeat.set(room.w/3,room.d/3);if(f.id==='oak')m.color.set('#ecd7b8');if(f.id==='marble')m.color.set('#e1ceb0');}return m;}
 sync(project){this.project=project;this.grid.visible=project.settings.grid;this.setLighting(project.settings.lighting);const landscapeSignature=JSON.stringify(project.site);if(landscapeSignature!==this.landscapeSignature){this.landscapeSignature=landscapeSignature;this.buildLandscape();}const sig=JSON.stringify([project.rooms,project.walls,project.openings,project.settings.cutaway,this.view]);if(sig!==this.archSignature){this.archSignature=sig;this.buildArchitecture();}this.syncFurniture();this.updateLabels();this.dirty=true;this.renderer.shadowMap.needsUpdate=true;}
 buildLandscape(){
  disposeGroup(this.landscape);const s=this.project.site??defaultSite(),cx=s.x+s.w/2,cz=-(s.z+s.d/2);
  const base=box(s.w+.24,.28,s.d+.24,standard('#b8ab92',.94),cx,-.23,cz,.05);base.castShadow=false;this.landscape.add(base);
  const material=standard(s.color,1);for(const [key,property]of [['grass','map'],['grassNormal','normalMap'],['grassRough','roughnessMap']]){const t=this.textureMaps[key];if(t?.image){material[property]=t.clone();material[property].repeat.set(s.w/2.2,s.d/2.2);material[property].needsUpdate=true;}}material.normalScale=new THREE.Vector2(.28,.28);
  const lawn=box(s.w,.035,s.d,material,cx,-.045,cz);lawn.castShadow=false;lawn.userData.entity={type:'site',id:'site'};this.landscape.add(lawn);
  const edge=standard('#c5b498',.9);for(const z of [s.z,s.z+s.d])this.landscape.add(box(s.w+.16,.045,.09,edge,cx,-.043,-z));for(const x of [s.x,s.x+s.w])this.landscape.add(box(.09,.045,s.d+.16,edge,x,-.043,cz));
 }
 buildArchitecture(){
  disposeGroup(this.arch);const p=this.project,b=projectBounds(p);const width=b.maxX-b.minX,depth=b.maxZ-b.minZ;
  if(p.rooms.length){const slab=box(width+.35,.32,depth+.35,standard('#ccc3b1',.83),(b.maxX+b.minX)/2,-.14,-(b.maxZ+b.minZ)/2,.08);slab.castShadow=false;this.arch.add(slab);}
  for(const room of p.rooms){const nested=p.rooms.filter(other=>other.id!==room.id&&other.w*other.d>room.w*room.d+.01&&room.x>=other.x-.001&&room.z>=other.z-.001&&room.x+room.w<=other.x+other.w+.001&&room.z+room.d<=other.z+other.d+.001).length;const fl=box(room.w,.035,room.d,this.floorMaterial(room),room.x+room.w/2,.04+nested*.012,-(room.z+room.d/2));fl.userData.entity={type:'room',id:room.id};fl.castShadow=false;this.arch.add(fl);
   if(room.outdoor){const railMat=new THREE.MeshPhysicalMaterial({color:'#d9e4dd',transparent:true,opacity:.16,roughness:.08,metalness:.05,depthWrite:false});const z=-(room.z);this.arch.add(box(room.w,.018,.03,brass,room.x+room.w/2,1.13,z),box(room.w,1.06,.012,railMat,room.x+room.w/2,.59,z));for(let x=room.x;x<=room.x+room.w+.01;x+=3)this.arch.add(box(.023,1.1,.023,brass,x,.6,z));}
  }
  for(const wall of projectWalls(p))this.buildWall(wall);
 }
 buildWall(wall){
  const L=Math.hypot(wall.x2-wall.x1,wall.z2-wall.z1);if(L<.04)return;
  const angle=Math.atan2(wall.z2-wall.z1,wall.x2-wall.x1);const group=new THREE.Group();group.position.set(wall.x1,0,-wall.z1);group.rotation.y=angle;group.userData.entity={type:'wall',id:wall.id};const room=this.project.rooms.find(r=>r.id===wall.roomId);
  let H=wall.h;if(this.view==='plan')H=.16;else if(this.project.settings.cutaway){const outer=wall.side==='north'&&Math.abs(wall.z1-projectBounds(this.project).maxZ)<.1;const west=wall.side==='west'&&Math.abs(wall.x1-projectBounds(this.project).minX)<.1&&wall.z1>7;H=outer||west?wall.h:Math.min(wall.h,1.25);}
  const material=standard(wall.color,.87);const openings=this.project.openings.filter(o=>o.wallId===wall.id).map(o=>({...o,start:clamp(o.t*L-o.w/2,.04,Math.max(.04,L-.34)),end:clamp(o.t*L+o.w/2,.34,L-.04)})).sort((a,b)=>a.start-b.start);
  let start=0;const solid=(a,b,y,h)=>{if(b-a>.01&&h>.01)group.add(box(b-a,h,wall.t,material,(a+b)/2,y+h/2,0));};
  for(const o of openings){solid(start,o.start,.07,H);if(o.kind!=='door')solid(o.start,o.end,.07,Math.min(o.sill,H));const upper=o.sill+o.h;if(upper<H)solid(o.start,o.end,upper+.07,H-upper);start=Math.max(start,o.end);
   if(this.view!=='plan'){
    const gh=Math.min(o.h,Math.max(.35,H-o.sill));const g=new THREE.Group();g.userData.entity={type:'opening',id:o.id};
    for(const x of [o.start,o.end])g.add(box(.035,gh,.05,brass,x,o.sill+.07+gh/2,0));g.add(box(o.end-o.start,.035,.05,brass,(o.start+o.end)/2,o.sill+.07+gh,0));
    if(o.kind==='window'||o.kind==='glass'){g.add(box(o.end-o.start,gh,.012,new THREE.MeshPhysicalMaterial({color:'#c8d9d2',transparent:true,opacity:.23,roughness:.12,depthWrite:false}),(o.start+o.end)/2,o.sill+.07+gh/2,0));g.add(box(o.end-o.start,.03,.05,brass,(o.start+o.end)/2,o.sill+.07,0));}
    else {const leaf=new THREE.Group();leaf.position.set(o.start,.07,0);leaf.rotation.y=-.68;leaf.add(box(o.end-o.start,.04,.035,brass,(o.end-o.start)/2,.1,0));if(!this.project.settings.cutaway)leaf.add(box(o.end-o.start,o.h,.045,standard('#b99b75',.65),(o.end-o.start)/2,o.h/2,0));g.add(leaf);}group.add(g);
   }
  }solid(start,L,.07,H);group.add(box(L,.07,wall.t+.014,wood,L/2,.11,0));this.arch.add(group);
 }
 updateLabels(){disposeGroup(this.labels);if(!this.project)return;
  for(const r of this.project.rooms){if(/bath|laundry|powder/i.test(r.name))continue;const text=this.view==='plan'?`${r.name} · ${(r.w*r.d).toFixed(1)} m²`:r.name;const l=label(text,'room-label '+(this.view==='plan'?'plan-label':''));l.position.set(r.x+r.w/2,.13,-(r.z+(this.view==='plan'?r.d*.45:r.d*.22)));this.labels.add(l);}
  this.labels.visible=this.project.settings.dimensions;
 }
 setSelection(selection){this.selection=selection;this.updateSelection();this.dirty=true;}
 selectionData(){if(!this.selection||!this.project)return null;const {type,id}=this.selection;return type==='site'?this.project.site:type==='item'?this.project.items.find(i=>i.id===id):type==='room'?this.project.rooms.find(r=>r.id===id):type==='wall'?projectWalls(this.project).find(w=>w.id===id):this.project.openings.find(o=>o.id===id);}
 updateSelection(){disposeGroup(this.selectionGroup);const e=this.selectionData();if(!e)return;let x,z,w,d,r=0;
  if(this.selection.type==='item'){({x,z,w,d,r}=e);}else if(['room','site'].includes(this.selection.type)){x=e.x+e.w/2;z=e.z+e.d/2;w=e.w;d=e.d;}else if(this.selection.type==='wall'){x=(e.x1+e.x2)/2;z=(e.z1+e.z2)/2;w=Math.hypot(e.x2-e.x1,e.z2-e.z1);d=e.t;r=Math.atan2(e.z2-e.z1,e.x2-e.x1)*180/Math.PI;}else return;
  const g=new THREE.Group();g.position.set(x,.105,-z);g.rotation.y=radians(r);const pts=[[-w/2,0,-d/2],[w/2,0,-d/2],[w/2,0,d/2],[-w/2,0,d/2],[-w/2,0,-d/2]].map(v=>V3(...v));const geo=new THREE.BufferGeometry().setFromPoints(pts);g.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:'#526d50',depthTest:false})));for(const [xx,zz]of [[-w/2,-d/2],[w/2,-d/2],[w/2,d/2],[-w/2,d/2]]){const dot=cylinder(.045,.016,standard('#526d50'),xx,.01,zz);dot.material.depthTest=false;dot.renderOrder=100;g.add(dot);}
  if(this.project.settings.dimensions){const factor=this.project.settings.units==='ft'?3.28084:1;const unit=this.project.settings.units==='ft'?'ft':'m';const l1=label((w*factor).toFixed(2)+' '+unit,'dimension-label');l1.position.set(0,.05,d/2+.28);g.add(l1);const l2=label((d*factor).toFixed(2)+' '+unit,'dimension-label');l2.position.set(w/2+.35,.05,0);g.add(l2);}this.selectionGroup.add(g);
 }
 setLighting(mode){if(this.lighting===mode)return;this.lighting=mode;if(mode==='sunset'){this.sun.color.set('#ffbb75');this.sun.intensity=2.4;this.sun.position.set(-18,8,15);this.hemi.intensity=1.45;this.scene.background.set('#e8dfd1');this.renderer.toneMappingExposure=.96;}else if(mode==='night'){this.sun.color.set('#c7d4f0');this.sun.intensity=.9;this.sun.position.set(-7,22,16);this.hemi.intensity=1.2;this.scene.background.set('#898d86');this.renderer.toneMappingExposure=.95;}else{this.sun.color.set('#fff2d9');this.sun.intensity=2.6;this.sun.position.set(-7,22,16);this.hemi.intensity=1.65;this.scene.background.set('#e8e5de');this.renderer.toneMappingExposure=.96;}}
 setView(view){this.view=view;this.pendingZoom=0;const target=this.controls.target.clone(),span=this.focusSpan;this.controls.dispose();this.camera=view==='plan'?this.ortho:this.perspective;this.controls=this.createControls(view);this.controls.target.copy(target);if(span)this.focusPoint(target.x,-target.z,span,false);else this.fit(false);this.archSignature=null;this.sync(this.project);}
 fit(animate=true){const b=siteBounds(this.project),cx=(b.minX+b.maxX)/2,cz=(b.minZ+b.maxZ)/2,span=Math.max(b.maxX-b.minX,b.maxZ-b.minZ,8);this.focusPoint(cx,cz,span,animate);}
 focusRoom(id){const r=this.project.rooms.find(r=>r.id===id);if(r)this.focusPoint(r.x+r.w/2,r.z+r.d/2,Math.max(r.w,r.d)*1.1,true);}
 focusSelection(){const e=this.selectionData();if(!e)return this.fit();if(this.selection.type==='item')this.focusPoint(e.x,e.z,Math.max(e.w,e.d)*2+3,true);else if(this.selection.type==='room')this.focusRoom(e.id);}
 focusPoint(x,z,span,animate=true){this.pendingZoom=0;this.focusSpan=span;const target=V3(x,0,-z),aspect=this.host.clientWidth/Math.max(1,this.host.clientHeight);this.planSpan=Math.max(span*.85+2,(span+2)/aspect);this.ortho.zoom=1;this.resize();let position;if(this.view==='plan'){this.camera.up.set(0,0,-1);position=V3(x,45,-z+.001);}else{this.camera.up.set(0,1,0);const factor=Math.max(7,span)*Math.max(1,1.16/aspect);position=target.clone().add(V3(factor*.94,factor*1.12,factor*1.22));}this.controls.maxDistance=Math.max(75,position.distanceTo(target)*1.35);if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches)this.cameraTween={from:this.camera.position.clone(),to:position,fromTarget:this.controls.target.clone(),target,t:performance.now()};else{this.camera.position.copy(position);this.controls.target.copy(target);this.controls.update();}this.dirty=true;}
 zoom(amount){let limited=false;if(this.view==='plan'){const next=this.ortho.zoom*amount;this.ortho.zoom=clamp(next,this.controls.minZoom,this.controls.maxZoom);limited=this.ortho.zoom!==next;this.ortho.updateProjectionMatrix();}else{const offset=this.camera.position.sub(this.controls.target),next=offset.length()/amount,distance=clamp(next,this.controls.minDistance,this.controls.maxDistance);limited=distance!==next;this.camera.position.copy(offset.setLength(distance).add(this.controls.target));}this.dirty=true;return limited;}
 setTool(tool,pending=null){this.tool=tool;this.pending=pending;this.drawing=null;this.clearPreview();this.controls.mouseButtons.LEFT=tool==='pan'?THREE.MOUSE.PAN:THREE.MOUSE.ROTATE;this.renderer.domElement.style.cursor=tool==='select'?'default':tool==='pan'?'grab':'crosshair';}
 point(event){const rect=this.renderer.domElement.getBoundingClientRect();this.pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);this.ray.setFromCamera(this.pointer,this.camera);const p=V3();if(!this.ray.ray.intersectPlane(this.plane,p))return null;return {x:p.x,z:-p.z};}
 hit(event){this.point(event);const intersections=this.ray.intersectObjects([this.furniture,this.arch,this.landscape],true);for(const hit of intersections){let node=hit.object;while(node&&!node.userData.entity)node=node.parent;if(node?.userData.entity)return {...node.userData.entity,point:hit.point};}return null;}
 nearestWall(point){let best=null;for(const w of projectWalls(this.project)){const dx=w.x2-w.x1,dz=w.z2-w.z1,len2=dx*dx+dz*dz;if(!len2)continue;const t=clamp(((point.x-w.x1)*dx+(point.z-w.z1)*dz)/len2,0,1);const distance=Math.hypot(point.x-(w.x1+t*dx),point.z-(w.z1+t*dz));if(!best||distance<best.distance)best={wall:w,t,distance};}return best;}
 bindEvents(){const canvas=this.renderer.domElement;
  // OrbitControls applies wheel zoom immediately, outside the render loop. Accumulate
  // wheel/trackpad input here so the camera and canvas advance together each frame.
  this.onWheel=e=>{if(!this.controls.enabled||!e.deltaY)return;e.preventDefault();e.stopImmediatePropagation();this.cameraTween=null;const pixels=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?this.host.clientHeight:1);this.pendingZoom=clamp(this.pendingZoom-pixels*.0015,-2,2);if(matchMedia('(prefers-reduced-motion: reduce)').matches){this.zoom(Math.exp(this.pendingZoom));this.pendingZoom=0;}};
  canvas.addEventListener('wheel',this.onWheel,{capture:true,passive:false});
  canvas.addEventListener('pointerdown',e=>{
   if(e.button!==0||this.tool==='pan')return;const pt=this.point(e);if(!pt)return;this.down={x:e.clientX,y:e.clientY};const snapped={x:snap(pt.x,this.project.settings.snap),z:snap(pt.z,this.project.settings.snap)};
   if(['room','wall'].includes(this.tool)){this.controls.enabled=false;this.drawing=this.drawing??{start:snapped};this.drawing.down=snapped;canvas.setPointerCapture(e.pointerId);e.stopImmediatePropagation();return;}
   if(this.tool==='place'){this.controls.enabled=false;this.ignoreClickUp=true;this.callbacks.onPlace?.(snapped);e.stopImmediatePropagation();return;}
   if(this.tool==='door'||this.tool==='window'){this.controls.enabled=false;this.ignoreClickUp=true;const near=this.nearestWall(pt);if(near&&near.distance<1.4)this.callbacks.onOpening?.(near.wall.id,near.t,this.tool);else this.callbacks.onNotice?.('Click an existing wall to add an opening.');e.stopImmediatePropagation();return;}
   const hit=this.hit(e);if(this.tool==='material'){if(hit)this.callbacks.onFinish?.(hit);this.controls.enabled=false;e.stopImmediatePropagation();return;}
   if(hit?.type==='item'){
    this.callbacks.onSelect?.({type:'item',id:hit.id});const item=this.project.items.find(i=>i.id===hit.id);if(!item?.locked){this.drag={type:'item',id:hit.id,start:pt,base:{x:item.x,z:item.z}};this.callbacks.onGestureStart?.();this.controls.enabled=false;canvas.setPointerCapture(e.pointerId);e.stopImmediatePropagation();}
   }else if(hit?.type==='wall'&&this.selection?.id===hit.id){this.drag={type:'wall',id:hit.id,start:pt,last:{x:0,z:0}};this.callbacks.onGestureStart?.();this.controls.enabled=false;canvas.setPointerCapture(e.pointerId);e.stopImmediatePropagation();}
   else if(hit?.type==='room'&&this.tool==='move-room'){this.drag={type:'room',id:hit.id,start:pt,base:{...this.project.rooms.find(r=>r.id===hit.id)}};this.callbacks.onGestureStart?.();this.controls.enabled=false;canvas.setPointerCapture(e.pointerId);e.stopImmediatePropagation();}
  },true);
  canvas.addEventListener('pointermove',e=>{
   const pt=this.point(e);if(!pt)return;const step=this.project?.settings.snap??.1;
   if(this.drag){const dx=snap(pt.x-this.drag.start.x,step),dz=snap(pt.z-this.drag.start.z,step);this.callbacks.onDrag?.(this.drag,dx,dz);return;}
   if(this.drawing){const end={x:snap(pt.x,step),z:snap(pt.z,step)};this.drawing.end=end;this.drawPreview(this.drawing.start,end,this.tool);return;}
   if(this.tool==='place'&&this.pending){this.drawGhost(snap(pt.x,step),snap(pt.z,step));return;}
  });
  const up=e=>{
   if(this.ignoreClickUp){this.ignoreClickUp=false;this.controls.enabled=true;this.down=null;return;}
   if(this.drag){this.callbacks.onGestureEnd?.();this.drag=null;}
   else if(this.drawing){const d=this.drawing;const pt=this.point(e)??d.start;const end={x:snap(pt.x,this.project.settings.snap),z:snap(pt.z,this.project.settings.snap)};const dist=Math.hypot(end.x-d.start.x,end.z-d.start.z);if(dist>=(this.tool==='room'?1:.3)){this.callbacks.onDraw?.(this.tool,d.start,end);this.drawing=null;this.clearPreview();}else this.callbacks.onNotice?.('Choose the opposite corner'+(this.tool==='wall'?' or the wall end.':'.'));}
   else if(this.tool==='select'&&this.down&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)<5){const hit=this.hit(e);this.callbacks.onSelect?.(hit?{type:hit.type,id:hit.id}:null);}
   this.controls.enabled=true;this.down=null;
  };
  canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',()=>{this.drag=null;this.drawing=null;this.clearPreview();this.controls.enabled=true;this.callbacks.onCancel?.();});
 }
 clearPreview(){disposeGroup(this.preview);this.ghost=null;this.dirty=true;}
 drawPreview(a,b,tool){this.clearPreview();const pts=tool==='room'?[[a.x,0,-a.z],[b.x,0,-a.z],[b.x,0,-b.z],[a.x,0,-b.z],[a.x,0,-a.z]]:[[a.x,0,-a.z],[b.x,0,-b.z]];const g=new THREE.BufferGeometry().setFromPoints(pts.map(p=>V3(...p)));const line=new THREE.Line(g,new THREE.LineBasicMaterial({color:'#426347'}));line.position.y=.12;this.preview.add(line);const w=Math.abs(b.x-a.x),d=Math.abs(b.z-a.z);const txt=tool==='room'?`${w.toFixed(2)} × ${d.toFixed(2)} m`:Math.hypot(w,d).toFixed(2)+' m';const l=label(txt,'dimension-label drawing-label');l.position.set((a.x+b.x)/2,.2,-(a.z+b.z)/2);this.preview.add(l);}
 drawGhost(x,z){if(!this.ghost){this.clearPreview();const c=byCatalog(this.pending);const m=new THREE.MeshStandardMaterial({color:'#748a6b',transparent:true,opacity:.45,depthWrite:false});this.ghost=box(c.w,.15,c.d,m);this.preview.add(this.ghost);}this.ghost.position.set(x,.13,-z);this.dirty=true;}
 showGuides(guides=[]){disposeGroup(this.guides);this.dirty=true;const b=projectBounds(this.project);for(const g of guides){const points=g.axis==='x'?[V3(g.value,.09,-b.minZ-1),V3(g.value,.09,-b.maxZ+1)]:[V3(b.minX-1,.09,-g.value),V3(b.maxX+1,.09,-g.value)];const geo=new THREE.BufferGeometry().setFromPoints(points);this.guides.add(new THREE.Line(geo,new THREE.LineDashedMaterial({color:'#7f926d',dashSize:.16,gapSize:.12,transparent:true,opacity:.8})));this.guides.children.at(-1).computeLineDistances();}}
 screenshot(){const old=this.selectionGroup.visible;this.selectionGroup.visible=false;this.renderer.render(this.scene,this.camera);const data=this.renderer.domElement.toDataURL('image/png');this.selectionGroup.visible=old;return data;}
 async thumbnail(c){
  if(!this.thumbRenderer){this.thumbRenderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});this.thumbRenderer.setSize(240,174);this.thumbRenderer.setPixelRatio(1);this.thumbRenderer.toneMapping=THREE.ACESFilmicToneMapping;this.thumbRenderer.toneMappingExposure=1.25;this.thumbScene=new THREE.Scene();this.thumbScene.environment=this.scene.environment;this.thumbScene.add(new THREE.HemisphereLight('#ffffff','#b9b3a4',3));const l=new THREE.DirectionalLight('#fff4df',3);l.position.set(-4,7,5);this.thumbScene.add(l);this.thumbCamera=new THREE.PerspectiveCamera(34,240/174,.01,100);}
  const item={...c,id:'thumb',catalogId:c.id};const g=this.instantiate(item),base=g.userData.size;g.children[0].scale.set(c.w/base.x,c.h/base.y,c.d/base.z);this.colorize(g,item);this.thumbScene.add(g);const b=new THREE.Box3().setFromObject(g),size=b.getSize(V3()),center=b.getCenter(V3());const max=Math.max(size.x,size.y,size.z);this.thumbCamera.position.copy(center).add(V3(max*1.45,max*.95,max*1.55));this.thumbCamera.lookAt(center);this.thumbRenderer.render(this.thumbScene,this.thumbCamera);const data=this.thumbRenderer.domElement.toDataURL('image/png');this.thumbScene.remove(g);g.traverse(o=>{if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());});return data;
 }
 animate(){this.frame=requestAnimationFrame(()=>this.animate());const now=performance.now(),dt=Math.min(now-(this.lastFrame??now-16.7),50);this.lastFrame=now;if(this.cameraTween){const t=clamp((now-this.cameraTween.t)/650,0,1),a=1-Math.pow(1-t,4);this.camera.position.lerpVectors(this.cameraTween.from,this.cameraTween.to,a);this.controls.target.lerpVectors(this.cameraTween.fromTarget,this.cameraTween.target,a);this.dirty=true;if(t===1)this.cameraTween=null;}if(this.pendingZoom){const step=Math.abs(this.pendingZoom)<.0001?this.pendingZoom:this.pendingZoom*(1-Math.exp(-dt/90));this.pendingZoom-=step;if(this.zoom(Math.exp(step)))this.pendingZoom=0;}const moved=this.controls.update();if(this.dirty||moved){this.renderer.render(this.scene,this.camera);this.labelRenderer.render(this.scene,this.camera);this.dirty=false;}}
 destroy(){cancelAnimationFrame(this.frame);this.resizeObserver.disconnect();this.renderer.domElement.removeEventListener('wheel',this.onWheel,true);this.controls.dispose();this.renderer.dispose();this.labelRenderer.domElement.remove();this.renderer.domElement.remove();}
}
