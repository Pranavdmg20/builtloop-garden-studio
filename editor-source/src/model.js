export const uid = (prefix = 'item') => `${prefix}-${crypto.randomUUID().slice(0, 10)}`;
export const clone = value => structuredClone(value);
export const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
export const snap = (v, step = .1) => step ? Math.round(v / step) * step : v;
export const defaultSite = () => ({id:'site',name:'Garden & lawn',x:-2,z:-5,w:26,d:19,color:'#73a45b'});
export const palettes = [
  {name:'Chalk',color:'#e8e2d5'}, {name:'Oat',color:'#c4b59c'}, {name:'Camel',color:'#ac8059'},
  {name:'Cognac',color:'#8f513b'}, {name:'Olive',color:'#6d785e'}, {name:'Forest',color:'#344c40'},
  {name:'Ink',color:'#343c3d'}, {name:'Terracotta',color:'#c46746'}, {name:'Teal',color:'#327e79'},
  {name:'Plum',color:'#796078'}, {name:'Ochre',color:'#c39543'}, {name:'Walnut',color:'#684d37'},
];
export const finishes = [
  {id:'oak',name:'Natural oak',color:'#bb966c',texture:'wood.jpg',type:'Wood'},
  {id:'smoked',name:'Smoked oak',color:'#79634b',texture:'wood.jpg',type:'Wood'},
  {id:'walnut',name:'Warm walnut',color:'#7a5034',texture:'wood.jpg',type:'Wood'},
  {id:'marble',name:'Ivory marble',color:'#dfd8c8',texture:'stone.jpg',type:'Stone'},
  {id:'limestone',name:'Honed limestone',color:'#c9bdab',texture:'stone.jpg',type:'Stone'},
  {id:'concrete',name:'Soft concrete',color:'#b2b0a5',texture:null,type:'Stone'},
  {id:'ivory',name:'Ivory plaster',color:'#e5e0d4',texture:null,type:'Paint'},
  {id:'sage',name:'Sage plaster',color:'#a7b09a',texture:null,type:'Paint'},
  {id:'linen',name:'Natural linen',color:'#c9bea9',texture:null,type:'Textile'},
];
export const catalog = [
 {id:'sofa',name:'Cloud sofa',subtitle:'Terracotta bouclé · walnut base',category:'Seating',w:3.9,d:1.3,h:1.2,color:'#c46746',model:'sofa',material:'Bouclé'},
 {id:'armchair',name:'Frame lounge chair',subtitle:'Soft leather · solid oak',category:'Seating',w:.84,d:1.02,h:1.05,color:'#684d37',model:'armchair',material:'Leather'},
 {id:'daybed',name:'Atelier daybed',subtitle:'Olive upholstery · low profile',category:'Seating',w:2.8,d:1.15,h:1.25,color:'#6d785e',model:'daybed',material:'Linen'},
 {id:'dining-chair',name:'Forma dining chair',subtitle:'Teal linen · bronze legs',category:'Seating',w:.64,d:.64,h:1.07,color:'#327e79',model:'dining-chair',material:'Linen'},
 {id:'stool',name:'Linea counter stool',subtitle:'Olive leather · bronze',category:'Seating',w:.58,d:.58,h:1.05,color:'#6d785e',model:'stool',material:'Leather'},
 {id:'dining-table',name:'Monolith dining table',subtitle:'Honed stone · seats eight',category:'Tables',w:1.4,d:2.9,h:.89,color:'#e8e2d5',model:'dining-table',material:'Stone'},
 {id:'coffee-table',name:'Pebble coffee table',subtitle:'Solid stone · circular',category:'Tables',w:1.72,d:1.72,h:.53,color:'#e8e2d5',model:'coffee-table',material:'Stone'},
 {id:'side-table',name:'Orbit side table',subtitle:'Warm walnut · sculptural',category:'Tables',w:1.06,d:1.06,h:.39,color:'#684d37',model:'side-table',material:'Wood'},
 {id:'desk',name:'Atelier writing desk',subtitle:'Walnut · leather writing pad',category:'Tables',w:2.8,d:.75,h:.85,color:'#684d37',model:'desk',material:'Wood'},
 {id:'bed',name:'Haven king bed',subtitle:'Ochre linen · upholstered headboard',category:'Bedroom',w:2.55,d:2.42,h:1.73,color:'#c39543',model:'bed',material:'Linen'},
 {id:'nightstand',name:'Column bedside table',subtitle:'Honed marble · cylindrical',category:'Bedroom',w:.6,d:.6,h:.76,color:'#e8e2d5',model:'nightstand',material:'Stone'},
 {id:'island',name:'Waterfall kitchen island',subtitle:'Continuous stone · oak drawers',category:'Kitchen',w:1.6,d:3.8,h:1.06,color:'#e8e2d5',model:'island',material:'Stone'},
 {id:'cabinet',name:'Full-height cabinet',subtitle:'Oak doors · bronze pulls',category:'Kitchen',w:.87,d:.66,h:2.73,color:'#ac8059',model:'cabinet',material:'Wood'},
 {id:'credenza',name:'Gallery sideboard',subtitle:'Satin walnut · fitted storage',category:'Storage',w:2.7,d:.55,h:.88,color:'#684d37',model:'credenza',material:'Wood'},
 {id:'shelf',name:'Open library',subtitle:'Walnut shelves · art volumes',category:'Storage',w:2.6,d:.35,h:2.4,color:'#684d37',material:'Wood'},
 {id:'plant',name:'Ficus in terracotta',subtitle:'Detailed foliage · earthen pot',category:'Decor',w:.85,d:.85,h:1.9,color:'#ac8059',model:'plant',material:'Ceramic'},
 {id:'vase',name:'Hand-thrown vessel',subtitle:'Textured stoneware',category:'Decor',w:.30,d:.30,h:.42,color:'#c4b59c',model:'vase',material:'Ceramic'},
 {id:'rug',name:'Woven wool rug',subtitle:'Terracotta wool · natural pile',category:'Decor',w:4.6,d:3.4,h:.035,color:'#b6795d',material:'Wool'},
 {id:'art',name:'Abstract canvas',subtitle:'Original composition · bronze',category:'Decor',w:1.65,d:.08,h:1.25,color:'#ac8059',material:'Canvas'},
 {id:'pendant',name:'Opal pendant',subtitle:'Warm glow · brushed bronze',category:'Lighting',w:.4,d:.4,h:1.2,color:'#e8e2d5',material:'Opal'},
 {id:'floor-lamp',name:'Arc floor lamp',subtitle:'Bronze stem · linen shade',category:'Lighting',w:.55,d:.55,h:1.75,color:'#c4b59c',material:'Linen'},
 {id:'chaise',name:'Terrace lounger',subtitle:'Saffron outdoor linen · low lounge',category:'Outdoor',w:.85,d:1.7,h:.72,color:'#c39543',model:'chaise',material:'Linen'},
 {id:'garden-tree',name:'Garden olive tree',subtitle:'Silver-green canopy · natural trunk',category:'Outdoor',w:2.8,d:2.8,h:4.4,color:'#65794c',material:'Foliage'},
 {id:'vanity',name:'Floating stone vanity',subtitle:'Stone basin · walnut joinery',category:'Bathroom',w:.75,d:.6,h:.95,color:'#e8e2d5',material:'Stone'},
 {id:'toilet',name:'Wall-hung porcelain',subtitle:'Compact concealed profile',category:'Bathroom',w:.46,d:.64,h:.58,color:'#e8e2d5',material:'Porcelain'},
 {id:'shower',name:'Walk-in rain shower',subtitle:'Clear glass · bronze fittings',category:'Bathroom',w:1.15,d:1.15,h:2.35,color:'#ac8059',material:'Stone'},
];
export const byCatalog = id => catalog.find(c => c.id === id);
const room = (id,name,x,z,w,d,edges=[],floor='oak',outdoor=false) => ({id,name,x,z,w,d,height:3.15,thickness:.16,floor,wallColor:'#d5bea2',edges,outdoor});
export function newItem(catalogId,x,z,r=0,patch={}) {
 const c=byCatalog(catalogId);return {id:uid(),catalogId,name:c.name,x,z,r,w:c.w,d:c.d,h:c.h,color:c.color,material:c.material,locked:false,elevation:0,...patch};
}
export function initialProject() {
 const rooms=[
  room('living','Living salon',0,0,7.4,6.4,['west','north']),
  room('dining','Dining',7.4,0,4.6,6.4,['north']),
  room('kitchen','Kitchen',12,0,6,5,['east','north'],'marble'),
  room('gallery','Gallery',0,6.4,18,1.4,['west','east']),
  room('primary','Primary suite',0,7.8,7.4,4.2,['west','north','east','south']),
  room('guest','Guest suite',7.4,7.8,5,4.2,['north','east','south']),
  room('study','Study & guest',12.4,7.8,5.6,4.2,['north','east','south']),
  room('primary-bath','Primary bath',4.8,9.7,2.6,2.3,['west','south'],'marble'),
  room('guest-bath','Guest bath',10.5,9.7,1.9,2.3,['west','south'],'marble'),
  room('powder','Powder room',12,5,2.6,1.4,['west','east'],'marble'),
  room('laundry','Laundry',14.6,5,1.7,1.4,['east'],'marble'),
  room('kitchen-entry','Kitchen entry',16.3,5,1.7,1.4,[],'oak'),
  room('terrace','South terrace',0,-2.4,18,2.4,[],'limestone',true),
 ];
 const items=[];const add=(id,x,z,r=0,p={})=>{const i=newItem(id,x,z,r,p);items.push(i);return i;};
 add('rug',3.65,3.05,0,{w:5.5,d:4.4,color:'#d1a17d'});
 const sofa=add('sofa',3.9,4.5);
 add('coffee-table',3.7,2.9);add('side-table',4.75,2.53);
 add('armchair',1.5,2.2,115);add('armchair',5.7,1.9,-115);
 add('credenza',6.65,4.8,90,{w:2,d:.5});
 add('plant',.65,5.45);add('plant',6.7,.65);
 add('rug',9.55,3.2,0,{w:3.6,d:4.8,color:'#b2b997'});
 add('dining-table',9.55,3);
 for(const z of [2,3,4]){add('dining-chair',8.45,z,90);add('dining-chair',10.65,z,-90);}
 add('dining-chair',9.55,1.12,180);add('dining-chair',9.55,4.9);
 add('credenza',9.4,6.07);
 add('island',14.55,2.75);
 for(const z of [.65,1.55,2.45,3.35,4.25])add('cabinet',17.65,z,90);
 for(const z of [1.6,2.7,3.8])add('stool',12.9,z,90);
 add('rug',2.35,9.8,0,{w:4.1,d:3.5,color:'#a7b6a4'});
 add('bed',2.3,10.15);add('nightstand',.825,10.9);add('nightstand',3.775,10.9);
 add('plant',.6,8.4,20,{h:1.65,w:.74,d:.74});
 add('rug',9,9.85,0,{w:2.8,d:3.6,color:'#b29282'});add('bed',8.95,10.15,0,{w:2.2,d:2.42,color:'#796078'});
 add('desk',14.2,9);add('dining-chair',14.2,8.2,180);add('daybed',16.3,10.9);add('shelf',16.1,11.76);
 add('plant',17.45,8.4);add('plant',11.9,8.4,40,{h:1.5,w:.65,d:.65});
 add('vanity',5.15,10.35,90);add('toilet',6.97,10.22);add('shower',6.8,11.35);
 add('vanity',10.82,10.08,90,{w:.55,d:.55});add('toilet',11.97,10.22);add('shower',11.8,11.35);
 add('vanity',12.5,5.65,90);add('toilet',14,5.65);
 add('sofa',3.8,-1.1,180,{w:2.7,d:.9,h:.95,color:'#327e79'});
 add('coffee-table',3.8,-.25,0,{w:.86,d:.86,h:.57});
 add('dining-chair',9.1,-1,90);add('dining-chair',10.6,-1,-90);add('side-table',9.85,-1,0,{w:.86,d:.86,h:.73});
 for(const x of [13.8,15.8])add('chaise',x,-1.15);
 for(const x of [1,6.7,11.8,17.1])add('plant',x,-1.75,0,{h:1.7,w:.75,d:.75});
 for(const z of [-1.8,5,11.4])add('garden-tree',21.5,z,20,{w:2.9,d:2.9,h:4.5});
 add('vase',3.95,3,0,{elevation:.53});add('vase',9.55,3,0,{elevation:.89});
 for(const x of [2.8,4,5.2])add('pendant',x,3.2,0,{elevation:2.35});
 for(const z of [1.7,2.8,3.9])add('pendant',14.55,z,0,{elevation:2.3});
 const openings=[];const door=(wallId,t,w=1.1)=>openings.push({id:uid('opening'),wallId,t,w,h:2.4,sill:0,kind:'door'});
 door('living:north',4/7.4,2);door('dining:north',2.5/4.6,1.8);door('kitchen:north',5.05/6,1.3);
 door('primary:south',2.8/7.4,1.2);door('guest:south',1.15/5,1.1);door('study:south',2.2/5.6,1.2);
 door('primary-bath:south',.95/2.6,.9);door('guest-bath:west',.35/2.3,.7);door('gallery:east',.5,1.1);
 const win=(wallId,t,w,h,sill)=>openings.push({id:uid('opening'),wallId,t,w,h,sill,kind:'window'});
 win('primary:west',.58,2.5,1.8,1);win('guest:north',.34,2.2,.7,2.2);win('study:east',.54,2.5,1.9,.9);
 return {version:1,paletteVersion:2,name:'Garden residence',site:defaultSite(),rooms,items,walls:[],openings,settings:{snap:.1,grid:false,dimensions:true,cutaway:true,lighting:'day',units:'m'},initialSelection:sofa.id};
}
export function emptyProject() {return {version:1,paletteVersion:2,name:'My new home',site:defaultSite(),rooms:[],items:[],walls:[],openings:[],settings:{snap:.1,grid:false,dimensions:true,cutaway:true,lighting:'day',units:'m'}};}
export function wallFor(room,side){
 const {x,z,w,d}=room;
 const endpoints={north:[x,z+d,x+w,z+d],south:[x,z,x+w,z],west:[x,z,x,z+d],east:[x+w,z,x+w,z+d]};
 const [x1,z1,x2,z2]=endpoints[side];return {id:`${room.id}:${side}`,roomId:room.id,side,x1,z1,x2,z2,h:room.height,t:room.thickness,color:room.wallColor};
}
export function projectWalls(project){return [...project.rooms.flatMap(r=>r.edges.map(s=>wallFor(r,s))),...project.walls];}
export function rectUnionArea(rects){
 if(!rects.length)return 0;
 const xs=[...new Set(rects.flatMap(r=>[r.x,r.x+r.w]))].sort((a,b)=>a-b);let area=0;
 for(let i=0;i<xs.length-1;i++){
  const a=xs[i],b=xs[i+1],mid=(a+b)/2;const intervals=rects.filter(r=>mid>=r.x&&mid<r.x+r.w).map(r=>[r.z,r.z+r.d]).sort((a,b)=>a[0]-b[0]);
  let low=null,high=0,len=0;for(const [z1,z2] of intervals){if(low===null){low=z1;high=z2;}else if(z1>high){len+=high-low;low=z1;high=z2;}else high=Math.max(high,z2);}if(low!==null)len+=high-low;area+=(b-a)*len;
 }return Math.round(area*100)/100;
}
export const enclosedArea=p=>rectUnionArea(p.rooms.filter(r=>!r.outdoor));
export const terraceArea=p=>rectUnionArea(p.rooms.filter(r=>r.outdoor));
export function footprint(item){const a=item.r*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return [[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].map(([x,z])=>({x:item.x+x*item.w*c-z*item.d*s,z:item.z+x*item.w*s+z*item.d*c}));}
export function footprintsOverlap(a,b){
 const A=footprint(a),B=footprint(b);
 for(const poly of [A,B])for(let i=0;i<2;i++){
  const p=poly[i],q=poly[i+1],axis={x:-(q.z-p.z),z:q.x-p.x};
  const pa=A.map(v=>v.x*axis.x+v.z*axis.z),pb=B.map(v=>v.x*axis.x+v.z*axis.z);
  if(Math.max(...pa)<=Math.min(...pb)+.001||Math.max(...pb)<=Math.min(...pa)+.001)return false;
 }return true;
}
export function placementWarnings(p,item){
 if(!item)return [];
 const warnings=[];const corners=footprint(item);
 const surfaces=byCatalog(item.catalogId)?.category==='Outdoor'?[...p.rooms,p.site??defaultSite()]:p.rooms;
 if(!corners.every(v=>surfaces.some(r=>v.x>=r.x-.08&&v.x<=r.x+r.w+.08&&v.z>=r.z-.08&&v.z<=r.z+r.d+.08)))warnings.push('Part of this piece is outside your room floors.');
 if(item.catalogId==='rug'||item.elevation>.08||byCatalog(item.catalogId)?.category==='Lighting')return warnings;
 for(const wall of projectWalls(p)){
  const w={x:(wall.x1+wall.x2)/2,z:(wall.z1+wall.z2)/2,w:Math.hypot(wall.x2-wall.x1,wall.z2-wall.z1),d:wall.t,r:Math.atan2(wall.z2-wall.z1,wall.x2-wall.x1)*180/Math.PI};
  if(footprintsOverlap(item,w)){warnings.push('This piece overlaps a wall. Move it inward for clearance.');break;}
 }
 if(!['Decor'].includes(byCatalog(item.catalogId)?.category)){
  const other=p.items.find(o=>o.id!==item.id&&o.catalogId!=='rug'&&o.elevation<.08&&!['Decor','Lighting'].includes(byCatalog(o.catalogId)?.category)&&footprintsOverlap(item,o));
  if(other)warnings.push(`Overlaps ${other.name.toLowerCase()}. Adjust the position or size.`);
 }return warnings;
}
export function alignmentSnap(p,id,position){
 const item=p.items.find(i=>i.id===id);if(!item||!p.settings.snap)return {...position,guides:[]};
 let x=position.x,z=position.z;const guides=[];
 const others=p.items.filter(o=>o.id!==id&&o.catalogId!=='rug'&&Math.hypot(o.x-x,o.z-z)<6);
 const gx=others.map(o=>o.x).find(v=>Math.abs(v-x)<.065),gz=others.map(o=>o.z).find(v=>Math.abs(v-z)<.065);
 if(gx!==undefined){x=gx;guides.push({axis:'x',value:x});}if(gz!==undefined){z=gz;guides.push({axis:'z',value:z});}
 return {x,z,guides};
}
export function roomAt(p,x,z){return [...p.rooms].reverse().find(r=>x>=r.x&&x<=r.x+r.w&&z>=r.z&&z<=r.z+r.d);}
export function projectBounds(p){const a=p.rooms.length?p.rooms:[{x:0,z:0,w:12,d:10}];return {minX:Math.min(...a.map(r=>r.x)),maxX:Math.max(...a.map(r=>r.x+r.w)),minZ:Math.min(...a.map(r=>r.z)),maxZ:Math.max(...a.map(r=>r.z+r.d))};}
export function siteBounds(p){const s=p.site??defaultSite(),b=projectBounds(p);return {minX:Math.min(s.x,b.minX),maxX:Math.max(s.x+s.w,b.maxX),minZ:Math.min(s.z,b.minZ),maxZ:Math.max(s.z+s.d,b.maxZ)};}
export function adjustRoom(p,id,patch,moveFurniture=false){
 const old=p.rooms.find(r=>r.id===id);if(!old)return;
 const next={...old,...patch};next.w=clamp(+next.w||1,1,50);next.d=clamp(+next.d||1,1,50);
 if(moveFurniture){const dx=next.x-old.x,dz=next.z-old.z;for(const o of p.items){if(o.x>=old.x&&o.x<=old.x+old.w&&o.z>=old.z&&o.z<=old.z+old.d){o.x+=dx;o.z+=dz;}}for(const child of p.rooms){if(child.id!==id&&child.x>=old.x&&child.z>=old.z&&child.x+child.w<=old.x+old.w+.001&&child.z+child.d<=old.z+old.d+.001){child.x+=dx;child.z+=dz;}}}
 Object.assign(old,next);
}
export function moveRoomWall(p,wallId,delta){
 const [id,side]=wallId.split(':');const r=p.rooms.find(r=>r.id===id);if(!r)return;
 const before=clone(r);let patch={};
 if(side==='east')patch={w:Math.max(1,r.w+delta.x)};
 if(side==='west')patch={x:Math.min(r.x+delta.x,r.x+r.w-1),w:Math.max(1,r.w-delta.x)};
 if(side==='north')patch={d:Math.max(1,r.d+delta.z)};
 if(side==='south')patch={z:Math.min(r.z+delta.z,r.z+r.d-1),d:Math.max(1,r.d-delta.z)};
 adjustRoom(p,id,patch);
 // Adjacent opposing boundaries follow a shared wall rather than leaving a slit.
 for(const n of p.rooms){if(n.id===id||n.outdoor)continue;
  if(side==='east'&&Math.abs(n.x-(before.x+before.w))<.01&&n.z<before.z+before.d&&n.z+n.d>before.z){const dx=r.x+r.w-n.x;n.x+=dx;n.w=Math.max(1,n.w-dx);}
  if(side==='north'&&Math.abs(n.z-(before.z+before.d))<.01&&n.x<before.x+before.w&&n.x+n.w>before.x){const dz=r.z+r.d-n.z;n.z+=dz;n.d=Math.max(1,n.d-dz);}
 }
}
const validColor=c=>/^#[0-9a-f]{6}$/i.test(c);
export function parseProject(text){
 const v=JSON.parse(text);const p=['builtloop-studio','aurel-home-studio'].includes(v.format)?v.project:v;
 if(!p||p.version!==1||!Array.isArray(p.rooms)||!Array.isArray(p.items)||!Array.isArray(p.walls)||!Array.isArray(p.openings))throw new Error('Choose a Builtloop Studio project JSON file.');
 if(p.rooms.length>150||p.items.length>1000||p.walls.length>500||p.openings.length>500)throw new Error('This project is too large for the editor.');
 const num=(n,min=-100,max=100)=>typeof n==='number'&&Number.isFinite(n)&&n>=min&&n<=max;
 const str=s=>typeof s==='string'&&s.length<=150;
 p.site??=defaultSite();const site=p.site;
 if(!num(site.x)||!num(site.z)||!num(site.w,5,80)||!num(site.d,5,80)||!validColor(site.color))throw new Error('The garden has invalid measurements or color.');
 p.site={...site,id:'site',name:'Garden & lawn'};
 // Upgrade untouched colors from the original example while preserving personal edits.
 if(p.paletteVersion!==2){const old={sofa:'#e8e2d5','dining-chair':'#c4b59c',bed:'#e8e2d5',chaise:'#e8e2d5',rug:'#c4b59c'};for(const item of p.items)if(old[item.catalogId]===item.color)item.color=byCatalog(item.catalogId).color;for(const r of p.rooms)if(r.wallColor==='#e5e0d4')r.wallColor='#d5bea2';p.paletteVersion=2;}
 const ids=new Set();for(const a of [p.rooms,p.items,p.walls,p.openings])for(const o of a){if(!str(o.id)||ids.has(o.id))throw new Error('Project IDs are invalid.');ids.add(o.id);}
 for(const r of p.rooms)if(!str(r.name)||!num(r.x)||!num(r.z)||!num(r.w,1,50)||!num(r.d,1,50)||!num(r.height,1,8)||!num(r.thickness,.05,1)||!validColor(r.wallColor)||!finishes.some(f=>f.id===r.floor)||!Array.isArray(r.edges)||r.edges.some(s=>!['north','south','west','east'].includes(s)))throw new Error('A room has invalid measurements or finishes.');
 for(const i of p.items)if(!byCatalog(i.catalogId)||!str(i.name)||!num(i.x)||!num(i.z)||!num(i.w,.05,30)||!num(i.d,.05,30)||!num(i.h,.01,10)||!num(i.r,-3600,3600)||!validColor(i.color)||!num(i.elevation,0,8))throw new Error('A furniture item is invalid.');
 for(const w of p.walls)if(![w.x1,w.x2,w.z1,w.z2].every(v=>num(v))||!num(w.h,1,8)||!num(w.t,.05,1)||!validColor(w.color))throw new Error('A wall has invalid measurements.');
 const wallIds=new Set(projectWalls(p).map(w=>w.id));for(const o of p.openings)if(!wallIds.has(o.wallId)||!num(o.t,0,1)||!num(o.w,.3,8)||!num(o.h,.3,6)||!num(o.sill,0,5)||!['door','window','glass'].includes(o.kind))throw new Error('A door or window is invalid.');
 const settings=p.settings??{};p.settings={snap:[0,.01,.05,.1,.25,.5].includes(settings.snap)?settings.snap:.1,grid:!!settings.grid,dimensions:settings.dimensions!==false,cutaway:settings.cutaway!==false,lighting:['day','sunset','night'].includes(settings.lighting)?settings.lighting:'day',units:settings.units==='ft'?'ft':'m'};
 p.name=str(p.name)?(p.name==='AUREL residence'?'Garden residence':p.name):'My home';return clone(p);
}
export function createStore(initial){
 let project=clone(initial),past=[],future=[],listeners=new Set(),gesture=null;
 const emit=()=>listeners.forEach(l=>l(project));
 return {
  get:()=>project, canUndo:()=>past.length>0,canRedo:()=>future.length>0,
  subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn);},
  edit(fn,{history=true}={}){if(history){past.push(clone(project));past=past.slice(-60);future=[];}fn(project);emit();},
  begin(){if(!gesture)gesture=clone(project);},
  end(){if(gesture&&JSON.stringify(gesture)!==JSON.stringify(project)){past.push(gesture);past=past.slice(-60);future=[];}gesture=null;emit();},
  cancel(){if(gesture){project=gesture;gesture=null;emit();}},
  undo(){if(past.length){future.push(clone(project));project=past.pop();emit();}},
  redo(){if(future.length){past.push(clone(project));project=future.pop();emit();}},
  replace(p){past.push(clone(project));future=[];project=clone(p);emit();},
 };
}
