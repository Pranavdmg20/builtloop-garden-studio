(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const wh="builtloop-studio",Eh=1,Th=JSON.parse('{"version":1,"paletteVersion":2,"name":"Garden residence","site":{"id":"site","name":"Garden & lawn","x":-2,"z":-5,"w":26,"d":19,"color":"#73a45b"},"rooms":[{"id":"living","name":"Living salon","x":0,"z":0,"w":7.4,"d":6.4,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["west","north"],"outdoor":false},{"id":"dining","name":"Dining","x":7.4,"z":0,"w":4.6,"d":6.4,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north"],"outdoor":false},{"id":"kitchen","name":"Kitchen","x":12,"z":0,"w":6,"d":5,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["east","north"],"outdoor":false},{"id":"gallery","name":"Gallery","x":0,"z":6.4,"w":18,"d":1.4,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["west","east"],"outdoor":false},{"id":"primary","name":"Primary suite","x":0,"z":7.8,"w":7.4,"d":4.2,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["west","north","east","south"],"outdoor":false},{"id":"guest","name":"Guest suite","x":7.4,"z":7.8,"w":5,"d":4.2,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north","east","south"],"outdoor":false},{"id":"primary-bath","name":"Primary bath","x":4.8,"z":9.7,"w":2.6,"d":2.3,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["west","south"],"outdoor":false},{"id":"guest-bath","name":"Guest bath","x":10.5,"z":9.7,"w":1.9,"d":2.3,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["west","south"],"outdoor":false},{"id":"powder","name":"Powder room","x":12,"z":5,"w":2.6,"d":1.4,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["west","east"],"outdoor":false},{"id":"laundry","name":"Laundry","x":14.6,"z":5,"w":1.7,"d":1.4,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["east"],"outdoor":false},{"id":"kitchen-entry","name":"Kitchen entry","x":16.3,"z":5,"w":1.7,"d":1.4,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":[],"outdoor":false},{"id":"terrace","name":"South terrace","x":0,"z":-2.4,"w":18,"d":2.4,"height":3.15,"thickness":0.16,"floor":"limestone","wallColor":"#d5bea2","edges":[],"outdoor":true},{"id":"room-40743cbc-d","name":"Creative studio","x":12.4,"z":7.800000000000001,"w":5.6,"d":4.199999999999999,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north","east","south"],"outdoor":false}],"items":[{"id":"item-fd6ad782-e","catalogId":"rug","name":"Woven wool rug","x":3.65,"z":3.05,"r":0,"w":5.5,"d":4.4,"h":0.035,"color":"#d1a17d","material":"Wool","locked":false,"elevation":0},{"id":"item-54eae663-4","catalogId":"sofa","name":"Cloud sofa","x":3.9,"z":4.5,"r":0,"w":3.9,"d":1.3,"h":1.2,"color":"#c46746","material":"Bouclé","locked":false,"elevation":0},{"id":"item-333f31fb-d","catalogId":"coffee-table","name":"Pebble coffee table","x":3.7,"z":2.9,"r":0,"w":1.72,"d":1.72,"h":0.53,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-13cc2563-7","catalogId":"side-table","name":"Orbit side table","x":4.75,"z":2.53,"r":0,"w":1.06,"d":1.06,"h":0.39,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-8b7de13c-e","catalogId":"armchair","name":"Frame lounge chair","x":1.5,"z":2.2,"r":115,"w":0.84,"d":1.02,"h":1.05,"color":"#684d37","material":"Leather","locked":false,"elevation":0},{"id":"item-b4641461-5","catalogId":"armchair","name":"Frame lounge chair","x":5.7,"z":1.9,"r":-115,"w":0.84,"d":1.02,"h":1.05,"color":"#684d37","material":"Leather","locked":false,"elevation":0},{"id":"item-606e676a-e","catalogId":"credenza","name":"Gallery sideboard","x":6.65,"z":4.8,"r":90,"w":2,"d":0.5,"h":0.88,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-b3f61994-9","catalogId":"plant","name":"Ficus in terracotta","x":0.65,"z":5.45,"r":0,"w":0.85,"d":0.85,"h":1.9,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-1322bf04-b","catalogId":"plant","name":"Ficus in terracotta","x":6.7,"z":0.65,"r":0,"w":0.85,"d":0.85,"h":1.9,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-69886293-5","catalogId":"rug","name":"Woven wool rug","x":9.55,"z":3.2,"r":0,"w":3.6,"d":4.8,"h":0.035,"color":"#b2b997","material":"Wool","locked":false,"elevation":0},{"id":"item-3118e03a-8","catalogId":"dining-table","name":"Monolith dining table","x":9.55,"z":3,"r":0,"w":1.4,"d":2.9,"h":0.89,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-fac69bd6-6","catalogId":"dining-chair","name":"Forma dining chair","x":8.45,"z":2,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-da6bab4f-0","catalogId":"dining-chair","name":"Forma dining chair","x":10.65,"z":2,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-f484c9b6-8","catalogId":"dining-chair","name":"Forma dining chair","x":8.45,"z":3,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-dc0f0771-2","catalogId":"dining-chair","name":"Forma dining chair","x":10.65,"z":3,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-a6d18059-8","catalogId":"dining-chair","name":"Forma dining chair","x":8.45,"z":4,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-84af4891-e","catalogId":"dining-chair","name":"Forma dining chair","x":10.65,"z":4,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-81214370-9","catalogId":"dining-chair","name":"Forma dining chair","x":9.55,"z":1.12,"r":180,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-4d3bccc1-2","catalogId":"dining-chair","name":"Forma dining chair","x":9.55,"z":4.9,"r":0,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-293e9626-3","catalogId":"credenza","name":"Gallery sideboard","x":9.4,"z":6.07,"r":0,"w":2.7,"d":0.55,"h":0.88,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-ac79816a-e","catalogId":"island","name":"Waterfall kitchen island","x":14.55,"z":2.75,"r":0,"w":1.6,"d":3.8,"h":1.06,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-202a58ea-c","catalogId":"cabinet","name":"Full-height cabinet","x":17.65,"z":0.65,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-c4c4b6ac-d","catalogId":"cabinet","name":"Full-height cabinet","x":17.65,"z":1.55,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-5660e560-0","catalogId":"cabinet","name":"Full-height cabinet","x":17.65,"z":2.45,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-ba143773-6","catalogId":"cabinet","name":"Full-height cabinet","x":17.65,"z":3.35,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-59e0c9f5-a","catalogId":"cabinet","name":"Full-height cabinet","x":17.65,"z":4.25,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-cfa27807-e","catalogId":"stool","name":"Linea counter stool","x":12.9,"z":1.6,"r":90,"w":0.58,"d":0.58,"h":1.05,"color":"#6d785e","material":"Leather","locked":false,"elevation":0},{"id":"item-fa17766b-2","catalogId":"stool","name":"Linea counter stool","x":12.9,"z":2.7,"r":90,"w":0.58,"d":0.58,"h":1.05,"color":"#6d785e","material":"Leather","locked":false,"elevation":0},{"id":"item-0cc50028-e","catalogId":"stool","name":"Linea counter stool","x":12.9,"z":3.8,"r":90,"w":0.58,"d":0.58,"h":1.05,"color":"#6d785e","material":"Leather","locked":false,"elevation":0},{"id":"item-3a49c0a9-a","catalogId":"rug","name":"Woven wool rug","x":2.35,"z":9.8,"r":0,"w":4.1,"d":3.5,"h":0.035,"color":"#a7b6a4","material":"Wool","locked":false,"elevation":0},{"id":"item-71bb0154-1","catalogId":"bed","name":"Haven king bed","x":2.3,"z":10.15,"r":0,"w":2.55,"d":2.42,"h":1.73,"color":"#c39543","material":"Linen","locked":false,"elevation":0},{"id":"item-248d4ae6-5","catalogId":"nightstand","name":"Column bedside table","x":0.825,"z":10.9,"r":0,"w":0.6,"d":0.6,"h":0.76,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-38fb31cf-4","catalogId":"nightstand","name":"Column bedside table","x":3.775,"z":10.9,"r":0,"w":0.6,"d":0.6,"h":0.76,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-c1803f35-1","catalogId":"plant","name":"Ficus in terracotta","x":0.6,"z":8.4,"r":20,"w":0.74,"d":0.74,"h":1.65,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-9f1e394b-7","catalogId":"rug","name":"Woven wool rug","x":9,"z":9.85,"r":0,"w":2.8,"d":3.6,"h":0.035,"color":"#b29282","material":"Wool","locked":false,"elevation":0},{"id":"item-72ab1d57-9","catalogId":"bed","name":"Haven king bed","x":8.95,"z":10.15,"r":0,"w":2.2,"d":2.42,"h":1.73,"color":"#796078","material":"Linen","locked":false,"elevation":0},{"id":"item-23dfc41f-1","catalogId":"plant","name":"Ficus in terracotta","x":11.9,"z":8.4,"r":40,"w":0.65,"d":0.65,"h":1.5,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-b94d5cbd-f","catalogId":"vanity","name":"Floating stone vanity","x":5.15,"z":10.35,"r":90,"w":0.75,"d":0.6,"h":0.95,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-eb98f105-d","catalogId":"toilet","name":"Wall-hung porcelain","x":6.97,"z":10.22,"r":0,"w":0.46,"d":0.64,"h":0.58,"color":"#e8e2d5","material":"Porcelain","locked":false,"elevation":0},{"id":"item-59e1eed2-f","catalogId":"shower","name":"Walk-in rain shower","x":6.8,"z":11.35,"r":0,"w":1.15,"d":1.15,"h":2.35,"color":"#ac8059","material":"Stone","locked":false,"elevation":0},{"id":"item-dd4f927a-3","catalogId":"vanity","name":"Floating stone vanity","x":10.82,"z":10.08,"r":90,"w":0.55,"d":0.55,"h":0.95,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-e97e6780-2","catalogId":"toilet","name":"Wall-hung porcelain","x":11.97,"z":10.22,"r":0,"w":0.46,"d":0.64,"h":0.58,"color":"#e8e2d5","material":"Porcelain","locked":false,"elevation":0},{"id":"item-c2efe1f1-7","catalogId":"shower","name":"Walk-in rain shower","x":11.8,"z":11.35,"r":0,"w":1.15,"d":1.15,"h":2.35,"color":"#ac8059","material":"Stone","locked":false,"elevation":0},{"id":"item-3d611dfd-8","catalogId":"vanity","name":"Floating stone vanity","x":12.5,"z":5.65,"r":90,"w":0.75,"d":0.6,"h":0.95,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-17db7945-6","catalogId":"toilet","name":"Wall-hung porcelain","x":14,"z":5.65,"r":0,"w":0.46,"d":0.64,"h":0.58,"color":"#e8e2d5","material":"Porcelain","locked":false,"elevation":0},{"id":"item-3ab0f873-9","catalogId":"sofa","name":"Cloud sofa","x":3.8,"z":-1.1,"r":180,"w":2.7,"d":0.9,"h":0.95,"color":"#327e79","material":"Bouclé","locked":false,"elevation":0},{"id":"item-0be5448b-9","catalogId":"coffee-table","name":"Pebble coffee table","x":3.8,"z":-0.25,"r":0,"w":0.86,"d":0.86,"h":0.57,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-66d87c54-6","catalogId":"dining-chair","name":"Forma dining chair","x":9.1,"z":-1,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-9ac9d73f-7","catalogId":"dining-chair","name":"Forma dining chair","x":10.6,"z":-1,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-3fa2fe19-0","catalogId":"side-table","name":"Orbit side table","x":9.85,"z":-1,"r":0,"w":0.86,"d":0.86,"h":0.73,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-89345050-f","catalogId":"chaise","name":"Terrace lounger","x":13.8,"z":-1.15,"r":0,"w":0.85,"d":1.7,"h":0.72,"color":"#c39543","material":"Linen","locked":false,"elevation":0},{"id":"item-15281e41-6","catalogId":"chaise","name":"Terrace lounger","x":15.8,"z":-1.15,"r":0,"w":0.85,"d":1.7,"h":0.72,"color":"#c39543","material":"Linen","locked":false,"elevation":0},{"id":"item-223a8ff2-0","catalogId":"plant","name":"Ficus in terracotta","x":1,"z":-1.75,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-10bea57f-8","catalogId":"plant","name":"Ficus in terracotta","x":6.7,"z":-1.75,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-59176181-1","catalogId":"plant","name":"Ficus in terracotta","x":11.8,"z":-1.75,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-c8e6eb19-0","catalogId":"plant","name":"Ficus in terracotta","x":17.1,"z":-1.75,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-635f6f0a-d","catalogId":"garden-tree","name":"Garden olive tree","x":21.5,"z":-1.8,"r":20,"w":2.9,"d":2.9,"h":4.5,"color":"#65794c","material":"Foliage","locked":false,"elevation":0},{"id":"item-cfac8fd3-9","catalogId":"garden-tree","name":"Garden olive tree","x":21.5,"z":5,"r":20,"w":2.9,"d":2.9,"h":4.5,"color":"#65794c","material":"Foliage","locked":false,"elevation":0},{"id":"item-4706457e-4","catalogId":"garden-tree","name":"Garden olive tree","x":21.5,"z":11.4,"r":20,"w":2.9,"d":2.9,"h":4.5,"color":"#65794c","material":"Foliage","locked":false,"elevation":0},{"id":"item-08d1d180-1","catalogId":"vase","name":"Hand-thrown vessel","x":3.95,"z":3,"r":0,"w":0.3,"d":0.3,"h":0.42,"color":"#c4b59c","material":"Ceramic","locked":false,"elevation":0.53},{"id":"item-3f35de64-e","catalogId":"vase","name":"Hand-thrown vessel","x":9.55,"z":3,"r":0,"w":0.3,"d":0.3,"h":0.42,"color":"#c4b59c","material":"Ceramic","locked":false,"elevation":0.89},{"id":"item-13333a10-a","catalogId":"pendant","name":"Opal pendant","x":2.8,"z":3.2,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.35},{"id":"item-df70a544-1","catalogId":"pendant","name":"Opal pendant","x":4,"z":3.2,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.35},{"id":"item-ab7474dd-1","catalogId":"pendant","name":"Opal pendant","x":5.2,"z":3.2,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.35},{"id":"item-3d985f31-b","catalogId":"pendant","name":"Opal pendant","x":14.55,"z":1.7,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.3},{"id":"item-19edcc41-d","catalogId":"pendant","name":"Opal pendant","x":14.55,"z":2.8,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.3},{"id":"item-64d2cef2-e","catalogId":"pendant","name":"Opal pendant","x":14.55,"z":3.9,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.3},{"id":"item-4578f8f5-1","catalogId":"rug","name":"Woven wool rug","x":15.200000000000001,"z":9.9,"r":0,"w":5,"d":3,"h":0.035,"color":"#c9b697","material":"Wool","locked":false,"elevation":0},{"id":"item-e9d0f140-1","catalogId":"desk","name":"Atelier writing desk","x":14,"z":10.3,"r":0,"w":2.5,"d":0.75,"h":0.85,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-482a99e5-8","catalogId":"dining-chair","name":"Forma dining chair","x":14.1,"z":9.3,"r":165,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-e5b5e018-8","catalogId":"daybed","name":"Atelier daybed","x":16.5,"z":10.9,"r":0,"w":2.4,"d":1.05,"h":1.15,"color":"#c46746","material":"Linen","locked":false,"elevation":0},{"id":"item-60cd5c34-c","catalogId":"shelf","name":"Open library","x":14,"z":11.700000000000001,"r":0,"w":2.6,"d":0.35,"h":2.4,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-96d63059-6","catalogId":"side-table","name":"Orbit side table","x":16.400000000000002,"z":9.5,"r":0,"w":0.7,"d":0.7,"h":0.55,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-17ace375-f","catalogId":"plant","name":"Ficus in terracotta","x":17.400000000000002,"z":8.5,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-4c020689-2","catalogId":"floor-lamp","name":"Arc floor lamp","x":5.9,"z":5.7,"r":0,"w":0.55,"d":0.55,"h":1.75,"color":"#c39543","material":"Linen","locked":false,"elevation":0}],"walls":[],"openings":[{"id":"opening-7f232391-6","wallId":"living:north","t":0.5405405405405405,"w":2,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-1f0c3455-8","wallId":"dining:north","t":0.5434782608695653,"w":1.8,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-9a3bec02-0","wallId":"kitchen:north","t":0.8416666666666667,"w":1.3,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-a200a1db-e","wallId":"primary:south","t":0.37837837837837834,"w":1.2,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-fa9cbf59-9","wallId":"guest:south","t":0.22999999999999998,"w":1.1,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-dd4c2c7d-f","wallId":"primary-bath:south","t":0.36538461538461536,"w":0.9,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-1ce3872e-a","wallId":"guest-bath:west","t":0.15217391304347827,"w":0.7,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-809d5515-1","wallId":"gallery:east","t":0.5,"w":1.1,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-69d8c8e8-3","wallId":"primary:west","t":0.58,"w":2.5,"h":1.8,"sill":1,"kind":"window"},{"id":"opening-2260e5ab-e","wallId":"guest:north","t":0.34,"w":2.2,"h":0.7,"sill":2.2,"kind":"window"},{"id":"opening-35ad9b30-a","wallId":"room-40743cbc-d:south","t":0.3928571386099836,"w":1.1,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-1e8dadc7-6","wallId":"room-40743cbc-d:east","t":0.5476190438853611,"w":1.8,"h":1.5,"sill":0.95,"kind":"window"}],"settings":{"snap":0.1,"grid":false,"dimensions":false,"cutaway":true,"lighting":"day","units":"m"},"initialSelection":"item-54eae663-4"}'),Ah={format:wh,version:Eh,project:Th},Rh="aurel-home-studio",Ch=1,Ph=JSON.parse('{"version":1,"paletteVersion":2,"name":"AUREL residence","site":{"id":"site","name":"Garden & lawn","x":-2,"z":-5,"w":26,"d":19,"color":"#73a45b"},"rooms":[{"id":"room-5ebb1e49-5","name":"Living salon","x":0,"z":0,"w":7.4,"d":6.4,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north","west"],"outdoor":false},{"id":"room-b5026ce6-8","name":"Dining","x":7.4,"z":0,"w":4.6,"d":6.4,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north"],"outdoor":false},{"id":"room-ed609e3e-b","name":"Kitchen","x":12,"z":0,"w":6,"d":5,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["north","east"],"outdoor":false},{"id":"room-06fe6a8c-2","name":"Gallery","x":0,"z":6.4,"w":18,"d":1.4000000000000004,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["east","west"],"outdoor":false},{"id":"room-09e2f9ad-3","name":"Primary suite","x":0,"z":7.800000000000001,"w":7.4,"d":4.199999999999999,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north","east","south","west"],"outdoor":false},{"id":"room-b29184ff-c","name":"Guest suite","x":7.4,"z":7.800000000000001,"w":5,"d":4.199999999999999,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north","east","south"],"outdoor":false},{"id":"room-8b60700b-3","name":"Study & guest","x":12.4,"z":7.800000000000001,"w":5.6,"d":4.199999999999999,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":["north","east","south"],"outdoor":false},{"id":"room-047649ba-4","name":"Primary bath","x":4.800000000000001,"z":9.700000000000001,"w":2.5999999999999996,"d":2.299999999999999,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["south","west"],"outdoor":false},{"id":"room-3de29184-5","name":"Guest bath","x":10.5,"z":9.700000000000001,"w":1.9000000000000004,"d":2.299999999999999,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["south","west"],"outdoor":false},{"id":"room-98e8c39a-d","name":"Powder room","x":12,"z":5,"w":2.6000000000000014,"d":1.4000000000000004,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["east","west"],"outdoor":false},{"id":"room-f7376b4d-b","name":"Laundry","x":14.600000000000001,"z":5,"w":1.6999999999999993,"d":1.4000000000000004,"height":3.15,"thickness":0.16,"floor":"marble","wallColor":"#d5bea2","edges":["east"],"outdoor":false},{"id":"room-ec252593-4","name":"Kitchen entry","x":16.3,"z":5,"w":1.6999999999999993,"d":1.4000000000000004,"height":3.15,"thickness":0.16,"floor":"oak","wallColor":"#d5bea2","edges":[],"outdoor":false},{"id":"room-7a8b52d3-9","name":"South terrace","x":0,"z":-2.4000000000000004,"w":18,"d":2.4000000000000004,"height":3.15,"thickness":0.16,"floor":"limestone","wallColor":"#d5bea2","edges":[],"outdoor":true}],"items":[{"id":"item-214e6859-1","catalogId":"rug","name":"Woven wool rug","x":3.7,"z":3,"r":0,"w":5.5,"d":4.4,"h":0.035,"color":"#d1a17d","material":"Wool","locked":false,"elevation":0},{"id":"item-f2cf37c5-a","catalogId":"sofa","name":"Cloud sofa","x":3.9000000000000004,"z":4.5,"r":0,"w":3.9,"d":1.3,"h":1.2,"color":"#c46746","material":"Bouclé","locked":false,"elevation":0},{"id":"item-0e435c25-7","catalogId":"coffee-table","name":"Pebble coffee table","x":3.7,"z":2.9000000000000004,"r":0,"w":1.72,"d":1.72,"h":0.53,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-09009c4a-f","catalogId":"side-table","name":"Orbit side table","x":4.800000000000001,"z":2.5,"r":0,"w":1.06,"d":1.06,"h":0.39,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-0c26f1e5-1","catalogId":"armchair","name":"Frame lounge chair","x":1.5,"z":2.2,"r":115,"w":0.84,"d":1.02,"h":1.05,"color":"#684d37","material":"Leather","locked":false,"elevation":0},{"id":"item-298b387c-3","catalogId":"armchair","name":"Frame lounge chair","x":5.7,"z":1.9000000000000001,"r":-115,"w":0.84,"d":1.02,"h":1.05,"color":"#684d37","material":"Leather","locked":false,"elevation":0},{"id":"item-e9ac442e-3","catalogId":"credenza","name":"Gallery sideboard","x":6.7,"z":4.800000000000001,"r":90,"w":2,"d":0.5,"h":0.88,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-b0fd695a-b","catalogId":"plant","name":"Ficus in terracotta","x":0.7000000000000001,"z":5.4,"r":0,"w":0.85,"d":0.85,"h":1.9,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-536d23ce-0","catalogId":"plant","name":"Ficus in terracotta","x":6.7,"z":0.6000000000000001,"r":0,"w":0.85,"d":0.85,"h":1.9,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-6c73bd24-8","catalogId":"rug","name":"Woven wool rug","x":9.600000000000001,"z":3.2,"r":0,"w":3.6,"d":4.8,"h":0.035,"color":"#b2b997","material":"Wool","locked":false,"elevation":0},{"id":"item-8f3ef107-8","catalogId":"dining-table","name":"Monolith dining table","x":9.5,"z":3,"r":0,"w":1.4,"d":2.9,"h":0.89,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-d0910579-b","catalogId":"dining-chair","name":"Forma dining chair","x":8.5,"z":2,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-33ec29ad-2","catalogId":"dining-chair","name":"Forma dining chair","x":10.700000000000001,"z":2,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-6572836f-2","catalogId":"dining-chair","name":"Forma dining chair","x":8.4,"z":3,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-2573451b-a","catalogId":"dining-chair","name":"Forma dining chair","x":10.700000000000001,"z":3,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-866a1c59-6","catalogId":"dining-chair","name":"Forma dining chair","x":8.4,"z":4,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-b7d2298d-5","catalogId":"dining-chair","name":"Forma dining chair","x":10.600000000000001,"z":4,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-e468377d-7","catalogId":"dining-chair","name":"Forma dining chair","x":9.600000000000001,"z":1.1,"r":180,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-55b09322-3","catalogId":"dining-chair","name":"Forma dining chair","x":9.600000000000001,"z":4.9,"r":0,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-d92aeba1-1","catalogId":"credenza","name":"Gallery sideboard","x":9.4,"z":6.1000000000000005,"r":0,"w":2.7,"d":0.55,"h":0.88,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-d8a63838-4","catalogId":"island","name":"Waterfall kitchen island","x":14.600000000000001,"z":2.8000000000000003,"r":0,"w":1.6,"d":3.8,"h":1.06,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-4a9b65e8-3","catalogId":"cabinet","name":"Full-height cabinet","x":17.7,"z":0.7000000000000001,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-4884bc42-f","catalogId":"cabinet","name":"Full-height cabinet","x":17.7,"z":1.5,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-1c073a42-c","catalogId":"cabinet","name":"Full-height cabinet","x":17.7,"z":2.4000000000000004,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-d1502089-1","catalogId":"cabinet","name":"Full-height cabinet","x":17.6,"z":3.3000000000000003,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-f934354a-b","catalogId":"cabinet","name":"Full-height cabinet","x":17.6,"z":4.2,"r":90,"w":0.87,"d":0.66,"h":2.73,"color":"#ac8059","material":"Wood","locked":false,"elevation":0},{"id":"item-b8610b73-3","catalogId":"stool","name":"Linea counter stool","x":12.9,"z":1.6,"r":90,"w":0.58,"d":0.58,"h":1.05,"color":"#6d785e","material":"Leather","locked":false,"elevation":0},{"id":"item-6006e9af-3","catalogId":"stool","name":"Linea counter stool","x":12.9,"z":2.7,"r":90,"w":0.58,"d":0.58,"h":1.05,"color":"#6d785e","material":"Leather","locked":false,"elevation":0},{"id":"item-ee552e57-d","catalogId":"stool","name":"Linea counter stool","x":12.9,"z":3.8000000000000003,"r":90,"w":0.58,"d":0.58,"h":1.05,"color":"#6d785e","material":"Leather","locked":false,"elevation":0},{"id":"item-8c1096da-b","catalogId":"vanity","name":"Floating stone vanity","x":12.5,"z":5.7,"r":90,"w":0.75,"d":0.6,"h":0.95,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-36b346b4-0","catalogId":"toilet","name":"Wall-hung porcelain","x":14,"z":5.7,"r":0,"w":0.46,"d":0.64,"h":0.58,"color":"#e8e2d5","material":"Porcelain","locked":false,"elevation":0},{"id":"item-c2700045-8","catalogId":"garden-tree","name":"Garden olive tree","x":21.5,"z":5,"r":20,"w":2.9,"d":2.9,"h":4.5,"color":"#65794c","material":"Foliage","locked":false,"elevation":0},{"id":"item-62279e89-8","catalogId":"vase","name":"Hand-thrown vessel","x":3.9000000000000004,"z":3,"r":0,"w":0.3,"d":0.3,"h":0.42,"color":"#c4b59c","material":"Ceramic","locked":false,"elevation":0.53},{"id":"item-1a957d0a-9","catalogId":"vase","name":"Hand-thrown vessel","x":9.5,"z":3,"r":0,"w":0.3,"d":0.3,"h":0.42,"color":"#c4b59c","material":"Ceramic","locked":false,"elevation":0.89},{"id":"item-6ed47cbc-f","catalogId":"pendant","name":"Opal pendant","x":2.8000000000000003,"z":3.2,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.35},{"id":"item-1f645689-2","catalogId":"pendant","name":"Opal pendant","x":4,"z":3.2,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.35},{"id":"item-4f2b6bf7-d","catalogId":"pendant","name":"Opal pendant","x":5.2,"z":3.2,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.35},{"id":"item-82538ff8-d","catalogId":"pendant","name":"Opal pendant","x":14.600000000000001,"z":1.7000000000000002,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.3},{"id":"item-57e41311-e","catalogId":"pendant","name":"Opal pendant","x":14.600000000000001,"z":2.8000000000000003,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.3},{"id":"item-0daeb9e6-7","catalogId":"pendant","name":"Opal pendant","x":14.600000000000001,"z":3.9000000000000004,"r":0,"w":0.4,"d":0.4,"h":1.2,"color":"#e8e2d5","material":"Opal","locked":false,"elevation":2.3},{"id":"item-c56dfdae-c","catalogId":"rug","name":"Woven wool rug","x":2.4000000000000004,"z":9.8,"r":0,"w":4.1,"d":3.5,"h":0.035,"color":"#a7b6a4","material":"Wool","locked":false,"elevation":0},{"id":"item-2959d589-9","catalogId":"bed","name":"Haven king bed","x":2.3000000000000003,"z":10.200000000000001,"r":0,"w":2.55,"d":2.42,"h":1.73,"color":"#c39543","material":"Linen","locked":false,"elevation":0},{"id":"item-fc9b2cdc-1","catalogId":"nightstand","name":"Column bedside table","x":0.8,"z":10.9,"r":0,"w":0.6,"d":0.6,"h":0.76,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-119d9f01-2","catalogId":"nightstand","name":"Column bedside table","x":3.8000000000000003,"z":10.9,"r":0,"w":0.6,"d":0.6,"h":0.76,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-f85169e4-5","catalogId":"plant","name":"Ficus in terracotta","x":0.6000000000000001,"z":8.4,"r":20,"w":0.74,"d":0.74,"h":1.65,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-64b97f38-8","catalogId":"rug","name":"Woven wool rug","x":9,"z":9.9,"r":0,"w":2.8,"d":3.6,"h":0.035,"color":"#b29282","material":"Wool","locked":false,"elevation":0},{"id":"item-30d2c971-6","catalogId":"bed","name":"Haven king bed","x":8.9,"z":10.100000000000001,"r":0,"w":2.2,"d":2.42,"h":1.73,"color":"#796078","material":"Linen","locked":false,"elevation":0},{"id":"item-3827e210-2","catalogId":"desk","name":"Atelier writing desk","x":14.200000000000001,"z":9,"r":0,"w":2.8,"d":0.75,"h":0.85,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-4112b0af-d","catalogId":"dining-chair","name":"Forma dining chair","x":14.200000000000001,"z":8.200000000000001,"r":180,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-bd0c2670-e","catalogId":"daybed","name":"Atelier daybed","x":16.3,"z":10.9,"r":0,"w":2.8,"d":1.15,"h":1.25,"color":"#6d785e","material":"Linen","locked":false,"elevation":0},{"id":"item-06f35bc4-6","catalogId":"shelf","name":"Open library","x":16.1,"z":11.8,"r":0,"w":2.6,"d":0.35,"h":2.4,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-94e15272-5","catalogId":"plant","name":"Ficus in terracotta","x":17.5,"z":8.4,"r":0,"w":0.85,"d":0.85,"h":1.9,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-5f1a0615-7","catalogId":"plant","name":"Ficus in terracotta","x":11.9,"z":8.4,"r":40,"w":0.65,"d":0.65,"h":1.5,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-1db2803b-5","catalogId":"vanity","name":"Floating stone vanity","x":5.1000000000000005,"z":10.3,"r":90,"w":0.75,"d":0.6,"h":0.95,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-03fce0e9-b","catalogId":"toilet","name":"Wall-hung porcelain","x":7,"z":10.200000000000001,"r":0,"w":0.46,"d":0.64,"h":0.58,"color":"#e8e2d5","material":"Porcelain","locked":false,"elevation":0},{"id":"item-a09c6975-5","catalogId":"shower","name":"Walk-in rain shower","x":6.800000000000001,"z":11.3,"r":0,"w":1.15,"d":1.15,"h":2.35,"color":"#ac8059","material":"Stone","locked":false,"elevation":0},{"id":"item-c2e73672-1","catalogId":"vanity","name":"Floating stone vanity","x":10.8,"z":10.100000000000001,"r":90,"w":0.55,"d":0.55,"h":0.95,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-62858937-e","catalogId":"toilet","name":"Wall-hung porcelain","x":12,"z":10.200000000000001,"r":0,"w":0.46,"d":0.64,"h":0.58,"color":"#e8e2d5","material":"Porcelain","locked":false,"elevation":0},{"id":"item-20c3d232-1","catalogId":"shower","name":"Walk-in rain shower","x":11.8,"z":11.3,"r":0,"w":1.15,"d":1.15,"h":2.35,"color":"#ac8059","material":"Stone","locked":false,"elevation":0},{"id":"item-4205c78c-5","catalogId":"garden-tree","name":"Garden olive tree","x":21.5,"z":11.4,"r":20,"w":2.9,"d":2.9,"h":4.5,"color":"#65794c","material":"Foliage","locked":false,"elevation":0},{"id":"item-487a7246-d","catalogId":"sofa","name":"Cloud sofa","x":3.8000000000000003,"z":-1.1,"r":180,"w":2.7,"d":0.9,"h":0.95,"color":"#327e79","material":"Bouclé","locked":false,"elevation":0},{"id":"item-05575992-9","catalogId":"coffee-table","name":"Pebble coffee table","x":3.8000000000000003,"z":-0.2,"r":0,"w":0.86,"d":0.86,"h":0.57,"color":"#e8e2d5","material":"Stone","locked":false,"elevation":0},{"id":"item-c142bbcd-9","catalogId":"dining-chair","name":"Forma dining chair","x":9.1,"z":-1,"r":90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-a220ffba-d","catalogId":"dining-chair","name":"Forma dining chair","x":10.600000000000001,"z":-1,"r":-90,"w":0.64,"d":0.64,"h":1.07,"color":"#327e79","material":"Linen","locked":false,"elevation":0},{"id":"item-00c88c36-e","catalogId":"side-table","name":"Orbit side table","x":9.9,"z":-1,"r":0,"w":0.86,"d":0.86,"h":0.73,"color":"#684d37","material":"Wood","locked":false,"elevation":0},{"id":"item-b2585f75-d","catalogId":"chaise","name":"Terrace lounger","x":13.8,"z":-1.1,"r":0,"w":0.85,"d":1.7,"h":0.72,"color":"#c39543","material":"Linen","locked":false,"elevation":0},{"id":"item-c11fc083-6","catalogId":"chaise","name":"Terrace lounger","x":15.8,"z":-1.1,"r":0,"w":0.85,"d":1.7,"h":0.72,"color":"#c39543","material":"Linen","locked":false,"elevation":0},{"id":"item-2ad8d246-8","catalogId":"plant","name":"Ficus in terracotta","x":1,"z":-1.8,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-1adfdb63-9","catalogId":"plant","name":"Ficus in terracotta","x":6.7,"z":-1.8,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-6023d595-8","catalogId":"plant","name":"Ficus in terracotta","x":11.8,"z":-1.7000000000000002,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-90614256-8","catalogId":"plant","name":"Ficus in terracotta","x":17.1,"z":-1.8,"r":0,"w":0.75,"d":0.75,"h":1.7,"color":"#ac8059","material":"Ceramic","locked":false,"elevation":0},{"id":"item-b150e896-5","catalogId":"garden-tree","name":"Garden olive tree","x":21.5,"z":-1.8,"r":20,"w":2.9,"d":2.9,"h":4.5,"color":"#65794c","material":"Foliage","locked":false,"elevation":0}],"walls":[],"openings":[{"id":"opening-5da06c48-8","wallId":"room-5ebb1e49-5:north","t":0.5405406397148194,"w":2,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-6217b8be-0","wallId":"room-b5026ce6-8:north","t":0.543478194394055,"w":1.8,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-987a6eda-9","wallId":"room-ed609e3e-b:north","t":0.8416667013225675,"w":1.3,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-b9c07697-b","wallId":"room-09e2f9ad-3:south","t":0.3783783238325269,"w":1.2,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-8e1946e5-9","wallId":"room-b29184ff-c:south","t":0.23000005137227753,"w":1.1,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-dd12c6b0-9","wallId":"room-8b60700b-3:south","t":0.3928572258565691,"w":1.2,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-565d1f3f-9","wallId":"room-047649ba-4:south","t":0.36538482708355735,"w":0.9,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-1bff6f76-a","wallId":"room-3de29184-5:west","t":0.22652173913043486,"w":0.7,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-a6922981-2","wallId":"room-06fe6a8c-2:east","t":0.5000001614911924,"w":1.1,"h":2.4,"sill":0,"kind":"door"},{"id":"opening-b3239925-6","wallId":"room-09e2f9ad-3:west","t":0.5799999696395388,"w":2.5,"h":1.8,"sill":1,"kind":"window"},{"id":"opening-a77f00f9-2","wallId":"room-b29184ff-c:north","t":0.34000008195101294,"w":2.2,"h":0.7,"sill":2.2,"kind":"window"},{"id":"opening-0a29aef5-f","wallId":"room-8b60700b-3:east","t":0.5399999866920822,"w":2.5,"h":1.9,"sill":0.9,"kind":"window"}],"settings":{"snap":0.1,"grid":false,"dimensions":false,"cutaway":true,"lighting":"day","units":"m"}}'),Lh={format:Rh,version:Ch,project:Ph};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=(s,e,t=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",s);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),t.length&&t.forEach(i=>{const a=bd(...i);n.appendChild(a)}),n};var Dh=([s,e,t])=>bd(s,e,t);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=s=>Array.from(s.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Uh=s=>typeof s=="string"?s:!s||!s.class?"":s.class&&typeof s.class=="string"?s.class.split(" "):s.class&&Array.isArray(s.class)?s.class:"",Fh=s=>s.flatMap(Uh).map(t=>t.trim()).filter(Boolean).filter((t,n,i)=>i.indexOf(t)===n).join(" "),Nh=s=>s.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,n)=>t.toUpperCase()+n.toLowerCase()),Rl=(s,{nameAttr:e,icons:t,attrs:n})=>{var g;const i=s.getAttribute(e);if(i==null)return;const a=Nh(i),r=t[a];if(!r)return console.warn(`${s.outerHTML} icon name was not found in the provided icons object.`);const o=Ih(s),[l,c,d]=r,h={...c,"data-lucide":i,...n,...o},u=Fh(["lucide",`lucide-${i}`,o,n]);u&&Object.assign(h,{class:u});const p=Dh([l,h,d]);return(g=s.parentNode)==null?void 0:g.replaceChild(p,s)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",Le,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=["svg",Le,[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",Le,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=["svg",Le,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",Le,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",Le,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",Le,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",Le,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",Le,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",Le,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",Le,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",Le,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",Le,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",Le,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",Le,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",Le,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",Le,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",Le,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",Le,[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",Le,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",Le,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",Le,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",Le,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",Le,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",Le,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",Le,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",Le,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",Le,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",Le,[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",Le,[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",Le,[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",Le,[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",Le,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",Le,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",Le,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",Le,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",Le,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",Le,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",Le,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",Le,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",Le,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",Le,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",Le,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",Le,[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",Le,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",Le,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",Le,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",Le,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",Le,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=({icons:s={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(s).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${e}]`);if(Array.from(n).forEach(i=>Rl(i,{nameAttr:e,icons:s,attrs:t})),e==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(a=>Rl(a,{nameAttr:"icon-name",icons:s,attrs:t})))}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="180",fi={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Du=0,Cl=1,Iu=2,xd=1,vd=2,qn=3,ei=0,Kt=1,bn=2,pi=0,ls=1,Pl=2,Ll=3,Dl=4,Uu=5,Ci=100,Fu=101,Nu=102,Ou=103,ku=104,zu=200,Bu=201,Hu=202,Gu=203,Kr=204,Yr=205,Vu=206,Wu=207,ju=208,Xu=209,qu=210,$u=211,Ku=212,Yu=213,Zu=214,Zr=0,Jr=1,Qr=2,us=3,eo=4,to=5,no=6,io=7,Ko=0,Ju=1,Qu=2,mi=0,ef=1,tf=2,nf=3,so=4,sf=5,af=6,rf=7,Il="attached",of="detached",yd=300,fs=301,ps=302,ao=303,ro=304,tr=306,Ii=1e3,di=1001,ja=1002,Yt=1003,Md=1004,Bs=1005,ln=1006,ka=1007,Kn=1008,kn=1009,Sd=1010,wd=1011,qs=1012,Yo=1013,Ui=1014,An=1015,na=1016,Zo=1017,Jo=1018,$s=1020,Ed=35902,Td=35899,Ad=1021,Rd=1022,_n=1023,Ks=1026,Ys=1027,Qo=1028,el=1029,Cd=1030,tl=1031,nl=1033,za=33776,Ba=33777,Ha=33778,Ga=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37808,go=37809,bo=37810,_o=37811,xo=37812,vo=37813,yo=37814,Mo=37815,So=37816,wo=37817,Eo=37818,To=37819,Ao=37820,Ro=37821,Co=36492,Po=36494,Lo=36495,Do=36283,Io=36284,Uo=36285,Fo=36286,Zs=2300,Js=2301,dr=2302,Ul=2400,Fl=2401,Nl=2402,lf=2500,cf=0,Pd=1,No=2,df=3200,hf=3201,il=0,uf=1,ci="",Ct="srgb",Jt="srgb-linear",Xa="linear",at="srgb",Hi=7680,Ol=519,ff=512,pf=513,mf=514,Ld=515,gf=516,bf=517,_f=518,xf=519,Oo=35044,kl="300 es",On=2e3,qa=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const Vs=Math.PI/180,ms=180/Math.PI;function Rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function sl(s,e){return(s%e+e)%e}function vf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yf(s,e,t){return s!==e?(t-s)/(e-s):0}function Ws(s,e,t){return(1-t)*s+t*e}function Mf(s,e,t,n){return Ws(s,e,1-Math.exp(-t*n))}function Sf(s,e=1){return e-Math.abs(sl(s,e*2)-e)}function wf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Af(s,e){return s+Math.random()*(e-s)}function Rf(s){return s*(.5-Math.random())}function Cf(s){s!==void 0&&(zl=s);let e=zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pf(s){return s*Vs}function Lf(s){return s*ms}function Df(s){return(s&s-1)===0&&s!==0}function If(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Uf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ff(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),d=r((e+n)/2),h=a((e-n)/2),u=r((e-n)/2),p=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*d,l*h,l*u,o*c);break;case"YZY":s.set(l*u,o*d,l*h,o*c);break;case"ZXZ":s.set(l*h,l*u,o*d,o*c);break;case"XZX":s.set(o*d,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*d,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Dd={DEG2RAD:Vs,RAD2DEG:ms,generateUUID:Rn,clamp:je,euclideanModulo:sl,mapLinear:vf,inverseLerp:yf,lerp:Ws,damp:Mf,pingpong:Sf,smoothstep:wf,smootherstep:Ef,randInt:Tf,randFloat:Af,randFloatSpread:Rf,seededRandom:Cf,degToRad:Pf,radToDeg:Lf,isPowerOfTwo:Df,ceilPowerOfTwo:If,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:Ff,normalize:nt,denormalize:En};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=a[r+0],p=a[r+1],g=a[r+2],b=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(h!==b||l!==u||c!==p||d!==g){let m=1-o;const f=l*u+c*p+d*g+h*b,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const T=Math.sqrt(S),A=Math.atan2(T,f*y);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}const x=o*y;if(l=l*m+u*x,c=c*m+p*x,d=d*m+g*x,h=h*m+b*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=T,c*=T,d*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-o*p,e[t+2]=c*g+d*p+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(a/2),u=l(n/2),p=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*o+i*c-a*l,this._y=i*d+r*l+a*o-n*c,this._z=a*d+r*c+n*l-i*o,this._w=r*d-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),d=2*(o*t-a*i),h=2*(a*n-r*t);return this.x=t+l*c+r*h-o*d,this.y=n+l*d+o*c-a*h,this.z=i+l*h+a*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hr.copy(this).projectOnVector(e),this.sub(hr)}reflect(e){return this.sub(hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new L,Bl=new Pn;class He{constructor(e,t,n,i,a,r,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c)}set(e,t,n,i,a,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],b=i[0],m=i[3],f=i[6],y=i[1],S=i[4],x=i[7],T=i[2],A=i[5],R=i[8];return a[0]=r*b+o*y+l*T,a[3]=r*m+o*S+l*A,a[6]=r*f+o*x+l*R,a[1]=c*b+d*y+h*T,a[4]=c*m+d*S+h*A,a[7]=c*f+d*x+h*R,a[2]=u*b+p*y+g*T,a[5]=u*m+p*S+g*A,a[8]=u*f+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-n*a*d+n*o*l+i*a*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*r-o*c,u=o*l-d*a,p=c*a-r*l,g=t*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(i*c-d*n)*b,e[2]=(o*n-i*r)*b,e[3]=u*b,e[4]=(d*t-i*l)*b,e[5]=(i*a-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(r*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new He;function Id(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){const s=Qs("canvas");return s.style.display="block",s}const Hl={};function ea(s){s in Hl||(Hl[s]=!0,console.warn(s))}function Of(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Gl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kf(){const s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===at&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===at&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Xa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return ea("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return ea("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jt]:{primaries:e,whitePoint:n,transfer:Xa,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),s}const Ye=kf();function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gi;class zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=Qs("canvas")),Gi.width=e.width,Gi.height=e.height;const i=Gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Zn(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bf=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(fr(i[r].image)):a.push(fr(i[r]))}else a=fr(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hf=0;const pr=new L;class Ft extends zi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=di,i=di,a=ln,r=Kn,o=_n,l=kn,c=Ft.DEFAULT_ANISOTROPY,d=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Rn(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pr).x}get height(){return this.source.getSize(pr).y}get depth(){return this.source.getSize(pr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=yd;Ft.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(p+1)/2,T=(f+1)/2,A=(d+u)/4,R=(h+b)/4,D=(g+m)/4;return S>x&&S>T?S<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(S),i=A/n,a=R/n):x>T?x<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),n=A/i,a=D/i):T<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(T),n=R/a,i=D/a),this.set(n,i,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-b)/y,this.z=(u-d)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:n.depth},a=new Ft(i);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new al(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends Gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ud extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vf extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,yn):yn.fromBufferAttribute(a,r),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),la.subVectors(this.max,Cs),Vi.subVectors(e.a,Cs),Wi.subVectors(e.b,Cs),ji.subVectors(e.c,Cs),ti.subVectors(Wi,Vi),ni.subVectors(ji,Wi),yi.subVectors(Vi,ji);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-yi.y,yi.x,0];return!mr(t,Vi,Wi,ji,la)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,Vi,Wi,ji,la))?!1:(ca.crossVectors(ti,ni),t=[ca.x,ca.y,ca.z],mr(t,Vi,Wi,ji,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,oa=new cn,Vi=new L,Wi=new L,ji=new L,ti=new L,ni=new L,yi=new L,Cs=new L,la=new L,ca=new L,Mi=new L;function mr(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Mi.fromArray(s,a);const o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),d=n.dot(Mi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Wf=new cn,Ps=new L,gr=new L;class zn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wf.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(gr)),this.expandByPoint(Ps.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gn=new L,br=new L,da=new L,ii=new L,_r=new L,ha=new L,xr=new L;class Ms{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){br.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(br);const a=e.distanceTo(t)*.5,r=-this.direction.dot(da),o=ii.dot(this.direction),l=-ii.dot(da),c=ii.lengthSq(),d=Math.abs(1-r*r);let h,u,p,g;if(d>0)if(h=r*l-o,u=r*o-l,g=a*d,h>=0)if(u>=-g)if(u<=g){const b=1/d;h*=b,u*=b,p=h*(h+r*u+2*o)+u*(r*h+u+2*l)+c}else u=a,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-r*a+o)),u=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(h=Math.max(0,-(r*a+o)),u=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+u*(u+2*l)+c);else u=r>0?-a:a,h=Math.max(0,-(r*u+o)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(br).addScaledVector(da,u),p}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,a){_r.subVectors(t,e),ha.subVectors(n,e),xr.crossVectors(_r,ha);let r=this.direction.dot(xr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(ha.crossVectors(ii,ha));if(l<0)return null;const c=o*this.direction.dot(_r.cross(ii));if(c<0||l+c>r)return null;const d=-o*ii.dot(xr);return d<0?null:this.at(d/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,a,r,o,l,c,d,h,u,p,g,b,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,l,c,d,h,u,p,g,b,m)}set(e,t,n,i,a,r,o,l,c,d,h,u,p,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xi.setFromMatrixColumn(e,0).length(),a=1/Xi.setFromMatrixColumn(e,1).length(),r=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=r*d,p=r*h,g=o*d,b=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,b=c*h;t[0]=u+b*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*h,t[5]=r*d,t[9]=-o,t[2]=p*o-g,t[6]=b+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,b=c*h;t[0]=u-b*o,t[4]=-r*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*d,t[9]=b-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*d,p=r*h,g=o*d,b=o*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+b,t[1]=l*h,t[5]=b*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,g=o*l,b=o*c;t[0]=l*d,t[4]=b-u*h,t[8]=g*h+p,t[1]=h,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-b*h}else if(e.order==="XZY"){const u=r*l,p=r*c,g=o*l,b=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+b,t[5]=r*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=b*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,Xf)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),si.crossVectors(n,an),si.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),si.crossVectors(n,an)),si.normalize(),ua.crossVectors(an,si),i[0]=si.x,i[4]=ua.x,i[8]=an.x,i[1]=si.y,i[5]=ua.y,i[9]=an.y,i[2]=si.z,i[6]=ua.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],y=n[3],S=n[7],x=n[11],T=n[15],A=i[0],R=i[4],D=i[8],w=i[12],M=i[1],P=i[5],O=i[9],B=i[13],X=i[2],W=i[6],j=i[10],Y=i[14],H=i[3],re=i[7],de=i[11],we=i[15];return a[0]=r*A+o*M+l*X+c*H,a[4]=r*R+o*P+l*W+c*re,a[8]=r*D+o*O+l*j+c*de,a[12]=r*w+o*B+l*Y+c*we,a[1]=d*A+h*M+u*X+p*H,a[5]=d*R+h*P+u*W+p*re,a[9]=d*D+h*O+u*j+p*de,a[13]=d*w+h*B+u*Y+p*we,a[2]=g*A+b*M+m*X+f*H,a[6]=g*R+b*P+m*W+f*re,a[10]=g*D+b*O+m*j+f*de,a[14]=g*w+b*B+m*Y+f*we,a[3]=y*A+S*M+x*X+T*H,a[7]=y*R+S*P+x*W+T*re,a[11]=y*D+S*O+x*j+T*de,a[15]=y*w+S*B+x*Y+T*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+a*l*h-i*c*h-a*o*u+n*c*u+i*o*p-n*l*p)+b*(+t*l*p-t*c*u+a*r*u-i*r*p+i*c*d-a*l*d)+m*(+t*c*h-t*o*p-a*r*h+n*r*p+a*o*d-n*c*d)+f*(-i*o*d-t*l*h+t*o*u+i*r*h-n*r*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],y=h*m*c-b*u*c+b*l*p-o*m*p-h*l*f+o*u*f,S=g*u*c-d*m*c-g*l*p+r*m*p+d*l*f-r*u*f,x=d*b*c-g*h*c+g*o*p-r*b*p-d*o*f+r*h*f,T=g*h*l-d*b*l-g*o*u+r*b*u+d*o*m-r*h*m,A=t*y+n*S+i*x+a*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(b*u*a-h*m*a-b*i*p+n*m*p+h*i*f-n*u*f)*R,e[2]=(o*m*a-b*l*a+b*i*c-n*m*c-o*i*f+n*l*f)*R,e[3]=(h*l*a-o*u*a-h*i*c+n*u*c+o*i*p-n*l*p)*R,e[4]=S*R,e[5]=(d*m*a-g*u*a+g*i*p-t*m*p-d*i*f+t*u*f)*R,e[6]=(g*l*a-r*m*a-g*i*c+t*m*c+r*i*f-t*l*f)*R,e[7]=(r*u*a-d*l*a+d*i*c-t*u*c-r*i*p+t*l*p)*R,e[8]=x*R,e[9]=(g*h*a-d*b*a-g*n*p+t*b*p+d*n*f-t*h*f)*R,e[10]=(r*b*a-g*o*a+g*n*c-t*b*c-r*n*f+t*o*f)*R,e[11]=(d*o*a-r*h*a-d*n*c+t*h*c+r*n*p-t*o*p)*R,e[12]=T*R,e[13]=(d*b*i-g*h*i+g*n*u-t*b*u-d*n*m+t*h*m)*R,e[14]=(g*o*i-r*b*i-g*n*l+t*b*l+r*n*m-t*o*m)*R,e[15]=(r*h*i-d*o*i+d*n*l-t*h*l-r*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,d=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*r,0,c*l-i*o,d*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,d=r+r,h=o+o,u=a*c,p=a*d,g=a*h,b=r*d,m=r*h,f=o*h,y=l*c,S=l*d,x=l*h,T=n.x,A=n.y,R=n.z;return i[0]=(1-(b+f))*T,i[1]=(p+x)*T,i[2]=(g-S)*T,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(u+f))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+S)*R,i[9]=(m-y)*R,i[10]=(1-(u+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=Xi.set(i[0],i[1],i[2]).length();const r=Xi.set(i[4],i[5],i[6]).length(),o=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);const c=1/a,d=1/r,h=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=d,Mn.elements[5]*=d,Mn.elements[6]*=d,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=On,l=!1){const c=this.elements,d=2*a/(t-e),h=2*a/(n-i),u=(t+e)/(t-e),p=(n+i)/(n-i);let g,b;if(l)g=a/(r-a),b=r*a/(r-a);else if(o===On)g=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===qa)g=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=On,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-i),u=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,b;if(l)g=1/(r-a),b=r/(r-a);else if(o===On)g=-2/(r-a),b=-(r+a)/(r-a);else if(o===qa)g=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new L,Mn=new Oe,jf=new L(0,0,0),Xf=new L(1,1,1),si=new L,ua=new L,an=new L,Wl=new Oe,jl=new Pn;class vn{constructor(e=0,t=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const Xl=new L,qi=new Pn,Vn=new Oe,fa=new L,Ls=new L,$f=new L,Kf=new Pn,ql=new L(1,0,0),$l=new L(0,1,0),Kl=new L(0,0,1),Yl={type:"added"},Yf={type:"removed"},$i={type:"childadded",child:null},vr={type:"childremoved",child:null};class ht extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new L,t=new vn,n=new Pn,i=new L(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new He}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ls,fa,this.up):Vn.lookAt(fa,Ls,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yf),vr.child=e,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,$f),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),h=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new L(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new L,Wn=new L,yr=new L,jn=new L,Ki=new L,Yi=new L,Zl=new L,Mr=new L,Sr=new L,wr=new L,Er=new Qe,Tr=new Qe,Ar=new Qe;class Tn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Sn.subVectors(i,t),Wn.subVectors(n,t),yr.subVectors(e,t);const r=Sn.dot(Sn),o=Sn.dot(Wn),l=Sn.dot(yr),c=Wn.dot(Wn),d=Wn.dot(yr),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,g=(r*d-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,a,r,o,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,jn.x),l.addScaledVector(r,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(e,t,n,i,a,r){return Er.setScalar(0),Tr.setScalar(0),Ar.setScalar(0),Er.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,n),Ar.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Er,a.x),r.addScaledVector(Tr,a.y),r.addScaledVector(Ar,a.z),r}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),Wn.subVectors(e,t),Sn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;Ki.subVectors(i,n),Yi.subVectors(a,n),Mr.subVectors(e,n);const l=Ki.dot(Mr),c=Yi.dot(Mr);if(l<=0&&c<=0)return t.copy(n);Sr.subVectors(e,i);const d=Ki.dot(Sr),h=Yi.dot(Sr);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector(Ki,r);wr.subVectors(e,a);const p=Ki.dot(wr),g=Yi.dot(wr);if(g>=0&&p<=g)return t.copy(a);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Yi,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Zl.subVectors(a,i),o=(h-d)/(h-d+(p-g)),t.copy(i).addScaledVector(Zl,o);const f=1/(m+b+u);return r=b*f,o=u*f,t.copy(n).addScaledVector(Ki,r).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Rr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=sl(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Rr(r,a,e+1/3),this.g=Rr(r,a,e),this.b=Rr(r,a,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ye.workingToColorSpace(Bt.copy(this),e),Math.round(je(Bt.r*255,0,255))*65536+Math.round(je(Bt.g*255,0,255))*256+Math.round(je(Bt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,a=Bt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=d<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-n)/h+2;break;case a:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ct){Ye.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(pa);const n=Ws(ai.h,pa.h,t),i=Ws(ai.s,pa.s,t),a=Ws(ai.l,pa.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ce;Ce.NAMES=Fd;let Zf=0;class Cn extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=ls,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=Yr,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Li extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new L,ma=new Re;let Jf=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),a=nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class Nd extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Od extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qf=0;const fn=new Oe,Cr=new ht,Zi=new L,rn=new cn,Ds=new cn,It=new L;class Wt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?Od:Nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new He().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];rn.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(rn.min,Ds.min),rn.expandByPoint(It),It.addVectors(rn.max,Ds.max),rn.expandByPoint(It)):(rn.expandByPoint(Ds.min),rn.expandByPoint(Ds.max))}rn.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)It.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(It));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)It.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),It.add(Zi)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;const c=new L,d=new L,h=new L,u=new Re,p=new Re,g=new Re,b=new L,m=new L;function f(D,w,M){c.fromBufferAttribute(n,D),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),u.fromBufferAttribute(a,D),p.fromBufferAttribute(a,w),g.fromBufferAttribute(a,M),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),o[D].add(b),o[w].add(b),o[M].add(b),l[D].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,w=y.length;D<w;++D){const M=y[D],P=M.start,O=M.count;for(let B=P,X=P+O;B<X;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new L,x=new L,T=new L,A=new L;function R(D){T.fromBufferAttribute(i,D),A.copy(T);const w=o[D];S.copy(w),S.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(A,w);const P=x.dot(l[D])<0?-1:1;r.setXYZW(D,S.x,S.y,S.z,P)}for(let D=0,w=y.length;D<w;++D){const M=y[D],P=M.start,O=M.count;for(let B=P,X=P+O;B<X;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,a=new L,r=new L,o=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,m),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,a),h.subVectors(i,a),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new Zt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new Oe,Si=new Ms,ga=new zn,Ql=new L,ba=new L,_a=new L,xa=new L,Pr=new L,va=new L,ec=new L,ya=new L;class gt extends ht{constructor(e=new Wt,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){va.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],h=a[l];d!==0&&(Pr.fromBufferAttribute(h,e),r?va.addScaledVector(Pr,d):va.addScaledVector(Pr.sub(t),d))}t.add(va)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(a),Si.copy(e.ray).recast(e.near),!(ga.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ga,Ql)===null||Si.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(a).invert(),Si.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){const m=u[g],f=r[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,T=S;x<T;x+=3){const A=o.getX(x),R=o.getX(x+1),D=o.getX(x+2);i=Ma(this,f,e,n,c,d,h,A,R,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const y=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);i=Ma(this,r,e,n,c,d,h,y,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,b=u.length;g<b;g++){const m=u[g],f=r[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,T=S;x<T;x+=3){const A=x,R=x+1,D=x+2;i=Ma(this,f,e,n,c,d,h,A,R,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const y=m,S=m+1,x=m+2;i=Ma(this,r,e,n,c,d,h,y,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ep(s,e,t,n,i,a,r,o){let l;if(e.side===Kt?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,e.side===ei,o),l===null)return null;ya.copy(o),ya.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:s}}function Ma(s,e,t,n,i,a,r,o,l,c){s.getVertexPosition(o,ba),s.getVertexPosition(l,_a),s.getVertexPosition(c,xa);const d=ep(s,e,t,n,ba,_a,xa,ec);if(d){const h=new L;Tn.getBarycoord(ec,ba,_a,xa,h),i&&(d.uv=Tn.getInterpolatedAttribute(i,o,l,c,h,new Re)),a&&(d.uv1=Tn.getInterpolatedAttribute(a,o,l,c,h,new Re)),r&&(d.normal=Tn.getInterpolatedAttribute(r,o,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Tn.getNormal(ba,_a,xa,u.normal),d.face=u,d.barycoord=h}return d}class _i extends Wt{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(h,2));function g(b,m,f,y,S,x,T,A,R,D,w){const M=x/R,P=T/D,O=x/2,B=T/2,X=A/2,W=R+1,j=D+1;let Y=0,H=0;const re=new L;for(let de=0;de<j;de++){const we=de*P-B;for(let Xe=0;Xe<W;Xe++){const lt=Xe*M-O;re[b]=lt*y,re[m]=we*S,re[f]=X,c.push(re.x,re.y,re.z),re[b]=0,re[m]=0,re[f]=A>0?1:-1,d.push(re.x,re.y,re.z),h.push(Xe/R),h.push(1-de/D),Y+=1}}for(let de=0;de<D;de++)for(let we=0;we<R;we++){const Xe=u+we+W*de,lt=u+we+W*(de+1),ft=u+(we+1)+W*(de+1),et=u+(we+1)+W*de;l.push(Xe,lt,et),l.push(lt,ft,et),H+=6}o.addGroup(p,H,w),p+=H,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=gs(s[t]);for(const i in n)e[i]=n[i]}return e}function tp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const np={clone:gs,merge:qt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zd extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new L,tc=new Re,nc=new Re;class Gt extends zd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,tc,nc),t.subVectors(nc,tc)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class ap extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Ji,Qi,e,t);i.layers=this.layers,this.add(i);const a=new Gt(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const r=new Gt(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const o=new Gt(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bd extends Ft{constructor(e=[],t=fs,n,i,a,r,o,l,c,d){super(e,t,n,i,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rp extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _i(5,5,5),a=new gi({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:pi});a.uniforms.tEquirect.value=t;const r=new gt(i,a),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=ln),new ap(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}class wt extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(op)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ko extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oo,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new L;class ol{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),a=nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ol(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ic=new L,sc=new Qe,ac=new Qe,cp=new L,rc=new Oe,Sa=new L,Dr=new zn,oc=new Oe,Ir=new Ms;class dp extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(i),e.ray.intersectsSphere(Dr)!==!1&&(oc.copy(i).invert(),Ir.copy(e.ray).applyMatrix4(oc),!(this.boundingBox!==null&&Ir.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ir)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===of?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sc.fromBufferAttribute(i.attributes.skinIndex,e),ac.fromBufferAttribute(i.attributes.skinWeight,e),ic.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=ac.getComponent(a);if(r!==0){const o=sc.getComponent(a);rc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cp.copy(ic).applyMatrix4(rc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hd extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gd extends Ft{constructor(e=null,t=1,n=1,i,a,r,o,l,c=Yt,d=Yt,h,u){super(null,r,o,l,c,d,i,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new Oe,hp=new Oe;class ll{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:hp;lc.multiplyMatrices(o,t[a]),lc.toArray(n,a*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ll(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gd(t,e,e,_n,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new Hd),this.bones.push(r),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class zo extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Oe,cc=new Oe,wa=[],dc=new cn,up=new Oe,Is=new gt,Us=new zn;class cl extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,up)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),dc.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Us.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),e.ray.intersectsSphere(Us)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,es),cc.multiplyMatrices(n,es),Is.matrixWorld=cc,Is.raycast(e,wa);for(let r=0,o=wa.length;r<o;r++){const l=wa[r];l.instanceId=a,l.object=this,t.push(l)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gd(new Float32Array(i*this.count),i,this.count,Qo,An));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ur=new L,fp=new L,pp=new He;class $n{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ur.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pp.getNormalMatrix(e),i=this.coplanarPoint(Ur).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new zn,mp=new Re(.5,.5),Ea=new L;class dl{constructor(e=new $n,t=new $n,n=new $n,i=new $n,a=new $n,r=new $n){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const i=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],d=a[4],h=a[5],u=a[6],p=a[7],g=a[8],b=a[9],m=a[10],f=a[11],y=a[12],S=a[13],x=a[14],T=a[15];if(i[0].setComponents(c-r,p-d,f-g,T-y).normalize(),i[1].setComponents(c+r,p+d,f+g,T+y).normalize(),i[2].setComponents(c+o,p+h,f+b,T+S).normalize(),i[3].setComponents(c-o,p-h,f-b,T-S).normalize(),n)i[4].setComponents(l,u,m,x).normalize(),i[5].setComponents(c-l,p-u,f-m,T-x).normalize();else if(i[4].setComponents(c-l,p-u,f-m,T-x).normalize(),t===On)i[5].setComponents(c+l,p+u,f+m,T+x).normalize();else if(t===qa)i[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=mp.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bs extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new L,Ka=new L,hc=new Oe,Fs=new Ms,Ta=new zn,Fr=new L,uc=new L;class ds extends ht{constructor(e=new Wt,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)$a.fromBufferAttribute(t,i-1),Ka.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$a.distanceTo(Ka);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=a,e.ray.intersectsSphere(Ta)===!1)return;hc.copy(i).invert(),Fs.copy(e.ray).applyMatrix4(hc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let b=p,m=g-1;b<m;b+=c){const f=d.getX(b),y=d.getX(b+1),S=Aa(this,e,Fs,l,f,y,b);S&&t.push(S)}if(this.isLineLoop){const b=d.getX(g-1),m=d.getX(p),f=Aa(this,e,Fs,l,b,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let b=p,m=g-1;b<m;b+=c){const f=Aa(this,e,Fs,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){const b=Aa(this,e,Fs,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Aa(s,e,t,n,i,a,r){const o=s.geometry.attributes.position;if($a.fromBufferAttribute(o,i),Ka.fromBufferAttribute(o,a),t.distanceSqToSegment($a,Ka,Fr,uc)>n)return;Fr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fr);if(!(c<e.near||c>e.far))return{distance:c,point:uc.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const fc=new L,pc=new L;class Vd extends ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)fc.fromBufferAttribute(t,i),pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fc.distanceTo(pc);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gp extends ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wd extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mc=new Oe,Bo=new Ms,Ra=new zn,Ca=new L;class bp extends ht{constructor(e=new Wt,t=new Wd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=a,e.ray.intersectsSphere(Ra)===!1)return;mc.copy(i).invert(),Bo.copy(e.ray).applyMatrix4(mc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,b=p;g<b;g++){const m=c.getX(g);Ca.fromBufferAttribute(h,m),gc(Ca,m,l,i,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=u,b=p;g<b;g++)Ca.fromBufferAttribute(h,g),gc(Ca,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function gc(s,e,t,n,i,a,r){const o=Bo.distanceSqToPoint(s);if(o<t){const l=new L;Bo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class jd extends Ft{constructor(e,t,n=Ui,i,a,r,o=Yt,l=Yt,c,d=Ks,h=1){if(d!==Ks&&d!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,a,r,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xd extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nr extends Wt{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const d=[],h=[],u=[],p=[];let g=0;const b=[],m=n/2;let f=0;y(),r===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(p,2));function y(){const x=new L,T=new L;let A=0;const R=(t-e)/n;for(let D=0;D<=a;D++){const w=[],M=D/a,P=M*(t-e)+e;for(let O=0;O<=i;O++){const B=O/i,X=B*l+o,W=Math.sin(X),j=Math.cos(X);T.x=P*W,T.y=-M*n+m,T.z=P*j,h.push(T.x,T.y,T.z),x.set(W,R,j).normalize(),u.push(x.x,x.y,x.z),p.push(B,1-M),w.push(g++)}b.push(w)}for(let D=0;D<i;D++)for(let w=0;w<a;w++){const M=b[w][D],P=b[w+1][D],O=b[w+1][D+1],B=b[w][D+1];(e>0||w!==0)&&(d.push(M,P,B),A+=3),(t>0||w!==a-1)&&(d.push(P,O,B),A+=3)}c.addGroup(f,A,0),f+=A}function S(x){const T=g,A=new Re,R=new L;let D=0;const w=x===!0?e:t,M=x===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const X=O/i*l+o,W=Math.cos(X),j=Math.sin(X);R.x=w*j,R.y=m*M,R.z=w*W,h.push(R.x,R.y,R.z),u.push(0,M,0),A.x=W*.5+.5,A.y=j*.5*M+.5,p.push(A.x,A.y),g++}for(let O=0;O<i;O++){const B=T+O,X=P+O;x===!0?d.push(X,X+1,B):d.push(X+1,X,B),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hl extends nr{constructor(e=1,t=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new hl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,p=[],g=[],b=[],m=[];for(let f=0;f<d;f++){const y=f*u-r;for(let S=0;S<c;S++){const x=S*h-a;g.push(x,-y,0),b.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const S=y+c*f,x=y+c*(f+1),T=y+1+c*(f+1),A=y+1+c*f;p.push(S,x,A),p.push(x,T,A)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(b,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class sr extends Wt{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const d=[],h=new L,u=new L,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){const y=[],S=f/n;let x=0;f===0&&r===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(i+A*a)*Math.sin(r+S*o),h.y=e*Math.cos(r+S*o),h.z=e*Math.sin(i+A*a)*Math.sin(r+S*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),b.push(u.x,u.y,u.z),m.push(A+x,1-S),y.push(c++)}d.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const S=d[f][y+1],x=d[f][y],T=d[f+1][y],A=d[f+1][y+1];(f!==0||r>0)&&p.push(S,x,A),(f!==n-1||l<Math.PI)&&p.push(x,T,A)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(b,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ni extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dn extends Ni{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _p extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yp extends bs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Pa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Sp(s){function e(i,a){return s[i]-s[a]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bc(s,e,t){const n=s.length,i=new s.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let l=0;l!==e;++l)i[r++]=s[o+l]}return i}function qd(s,e,t,n){let i=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[i++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push(...r)),a=s[i++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=s[i++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=s[i++];while(a!==void 0)}class ia{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let r=0;r!==i;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wp extends ia{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(e,t,n){const i=this.parameterPositions;let a=e-2,r=e+1,o=i[a],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:a=e,o=2*t-n;break;case Nl:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:r=e,l=2*n-t;break;case Nl:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=a*d,this._offsetNext=r*d}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,f=-u*m+2*u*b-u*g,y=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,S=(-1-p)*m+(1.5+p)*b+.5*g,x=p*m-p*b;for(let T=0;T!==o;++T)a[T]=f*r[d+T]+y*r[c+T]+S*r[l+T]+x*r[h+T];return a}}class Ep extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)a[u]=r[c+u]*h+r[l+u]*d;return a}}class Tp extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case dr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return dr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let a=0,r=i-1;for(;a!==i&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==i){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Mp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===dr,a=e.length-1;let r=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,p=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[u+g]||b!==t[p+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const h=o*n,u=r*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Js;class Ss extends Ln{constructor(e,t,n){super(e,t,n)}}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Zs;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class $d extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}$d.prototype.ValueTypeName="color";class _s extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}_s.prototype.ValueTypeName="number";class Ap extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let d=c+o;c!==d;c+=4)Pn.slerpFlat(a,0,r,c-o,r,c,l);return a}}class xs extends Ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ap(this.times,this.values,this.getValueSize(),e)}}xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Ln{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Zs;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}vs.prototype.ValueTypeName="vector";class Rp{constructor(e="",t=-1,n=[],i=lf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Pp(n[r]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,r=n.length;a!==r;++a)t.push(Ln.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const a=t.length,r=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const d=Sp(l);l=bc(l,1,d),c=bc(c,1,d),!i&&l[0]===0&&(l.push(a),c.push(c[0])),r.push(new _s(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(a);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,g,b){if(p.length!==0){const m=[],f=[];qd(p,m,f,g),m.length!==0&&b.push(new h(u,m,f))}},i=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let b=0;b<u[g].morphTargets.length;b++)p[u[g].morphTargets[b]]=-1;for(const b in p){const m=[],f=[];for(let y=0;y!==u[g].morphTargets.length;++y){const S=u[g];m.push(S.time),f.push(S.morphTarget===b?1:0)}i.push(new _s(".morphTargetInfluence["+b+"]",m,f))}l=p.length*r}else{const p=".bones["+t[h].name+"]";n(vs,p+".position",u,"pos",i),n(xs,p+".quaternion",u,"rot",i),n(vs,p+".scale",u,"scl",i)}}return i.length===0?null:new this(a,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Cp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return $d;case"quaternion":return xs;case"bool":case"boolean":return Ss;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Pp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cp(s.type);if(s.times===void 0){const t=[],n=[];qd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Yn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Lp{constructor(e,t,n){const i=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,a===!1&&i.onStart!==void 0&&i.onStart(d,r,o),a=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Dp=new Lp;class Es{constructor(e){this.manager=e!==void 0?e:Dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Ip extends Error{constructor(e,t){super(e),this.response=t}}class Kd extends Es{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Yn.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Xn[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let b=0;const m=new ReadableStream({start(f){y();function y(){h.read().then(({done:S,value:x})=>{if(S)f.close();else{b+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let A=0,R=d.length;A<R;A++){const D=d[A];D.onProgress&&D.onProgress(T)}f.enqueue(x),y()}},S=>{f.error(S)})}}});return new Response(m)}else throw new Ip(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Yn.add(`file:${e}`,c);const d=Xn[e];delete Xn[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=Xn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ts=new WeakMap;class Up extends Es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=Yn.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let h=ts.get(r);h===void 0&&(h=[],ts.set(r,h)),h.push({onLoad:t,onError:i})}return r}const o=Qs("img");function l(){d(),t&&t(this);const h=ts.get(this)||[];for(let u=0;u<h.length;u++){const p=h[u];p.onLoad&&p.onLoad(this)}ts.delete(this),a.manager.itemEnd(e)}function c(h){d(),i&&i(h),Yn.remove(`image:${e}`);const u=ts.get(this)||[];for(let p=0;p<u.length;p++){const g=u[p];g.onError&&g.onError(h)}ts.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yn.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Yd extends Es{constructor(e){super(e)}load(e,t,n,i){const a=new Ft,r=new Up(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class ar extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _c extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nr=new Oe,xc=new L,vc=new L;class ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vc),t.updateMatrixWorld(),Nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fp extends ul{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Np extends ar{constructor(e,t,n=0,i=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Fp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yc=new Oe,Ns=new L,Or=new L;class Op extends ul{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),Or.copy(n.position),Or.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Or),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc,n.coordinateSystem,n.reversedDepth)}}class Zd extends ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Op}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rr extends zd{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kp extends ul{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Va extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class js{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const kr=new WeakMap;class zp extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=Yn.get(`image-bitmap:${e}`);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(c=>{if(kr.has(r)===!0)i&&i(kr.get(r)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(c),a.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(`image-bitmap:${e}`,c),t&&t(c),a.manager.itemEnd(e),c}).catch(function(c){i&&i(c),kr.set(l,c),Yn.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Yn.add(`image-bitmap:${e}`,l),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Bp extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fl="\\[\\]\\.:\\/",Hp=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",Gp="[^"+fl.replace("\\.","")+"]",Vp=/((?:WC+[\/:])*)/.source.replace("WC",pl),Wp=/(WCOD+)?/.source.replace("WCOD",Gp),jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),qp=new RegExp("^"+Vp+Wp+jp+Xp+"$"),$p=["material","materials","bones","map"];class Kp{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(e){const t=qp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const a=n.nodeName.substring(i+1);$p.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Kp;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Mc=new Oe;class Yp{constructor(e,t,n=0,i=1/0){this.ray=new Ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(e,t=!0,n=[]){return Ho(e,this,n,t),n.sort(Sc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,a=e.length;i<a;i++)Ho(e[i],this,n,t);return n.sort(Sc),n}}function Sc(s,e){return s.distance-e.distance}function Ho(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)Ho(a[r],e,t,!0)}}class wc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zp extends Vd{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);const a=t/2,r=e/t,o=e/2,l=[],c=[];for(let u=0,p=0,g=-o;u<=t;u++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const b=u===a?n:i;b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3}const d=new Wt;d.setAttribute("position",new Ot(l,3)),d.setAttribute("color",new Ot(c,3));const h=new bs({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jp extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ec(s,e,t,n){const i=Qp(n);switch(t){case Ad:return s*e;case Qo:return s*e/i.components*i.byteLength;case el:return s*e/i.components*i.byteLength;case Cd:return s*e*2/i.components*i.byteLength;case tl:return s*e*2/i.components*i.byteLength;case Rd:return s*e*3/i.components*i.byteLength;case _n:return s*e*4/i.components*i.byteLength;case nl:return s*e*4/i.components*i.byteLength;case za:case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lo:case ho:return Math.max(s,16)*Math.max(e,8)/4;case oo:case co:return Math.max(s,8)*Math.max(e,8)/2;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Co:case Po:case Lo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Do:case Io:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uo:case Fo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qp(s){switch(s){case kn:case Sd:return{byteLength:1,components:1};case qs:case wd:case na:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case Ui:case Yo:case An:return{byteLength:4,components:1};case Ed:case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jd(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function em(s){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],b=h[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,h[u]=b)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const b=h[p];s.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:tm,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:am,alphatest_pars_fragment:rm,aomap_fragment:om,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:dm,begin_vertex:hm,beginnormal_vertex:um,bsdfs:fm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:bm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:ym,color_pars_vertex:Mm,color_vertex:Sm,common:wm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Im,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:km,fog_pars_vertex:zm,fog_fragment:Bm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Vm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:jm,lights_pars_begin:Xm,lights_toon_fragment:$m,lights_toon_pars_fragment:Km,lights_phong_fragment:Ym,lights_phong_pars_fragment:Zm,lights_physical_fragment:Jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:eg,lights_fragment_maps:tg,lights_fragment_end:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:rg,map_fragment:og,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:dg,metalnessmap_fragment:hg,metalnessmap_pars_fragment:ug,morphinstance_vertex:fg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:bg,normal_fragment_begin:_g,normal_fragment_maps:xg,normal_pars_fragment:vg,normal_pars_vertex:yg,normal_vertex:Mg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Ag,opaque_fragment:Rg,packing:Cg,premultiplied_alpha_fragment:Pg,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ig,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Og,shadowmap_vertex:kg,shadowmask_pars_fragment:zg,skinbase_vertex:Bg,skinning_pars_vertex:Hg,skinning_vertex:Gg,skinnormal_vertex:Vg,specularmap_fragment:Wg,specularmap_pars_fragment:jg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:$g,transmission_pars_fragment:Kg,uv_pars_fragment:Yg,uv_pars_vertex:Zg,uv_vertex:Jg,worldpos_vertex:Qg,background_vert:e0,background_frag:t0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:a0,depth_vert:r0,depth_frag:o0,distanceRGBA_vert:l0,distanceRGBA_frag:c0,equirect_vert:d0,equirect_frag:h0,linedashed_vert:u0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:b0,meshmatcap_vert:_0,meshmatcap_frag:x0,meshnormal_vert:v0,meshnormal_frag:y0,meshphong_vert:M0,meshphong_frag:S0,meshphysical_vert:w0,meshphysical_frag:E0,meshtoon_vert:T0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:L0,sprite_vert:D0,sprite_frag:I0},ae={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Fn={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Fn.physical={uniforms:qt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const La={r:0,b:0,g:0},Ei=new vn,U0=new Oe;function F0(s,e,t,n,i,a,r){const o=new Ce(0);let l=a===!0?0:1,c,d,h=null,u=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function b(S){let x=!1;const T=g(S);T===null?f(o,l):T&&T.isColor&&(f(T,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===tr)?(d===void 0&&(d=new gt(new _i(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:gs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Ei.copy(x.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(Ei)),d.material.toneMapped=Ye.getTransfer(T.colorSpace)!==at,(h!==T||u!==T.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=T,u=T.version,p=s.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new gt(new ir(2,2),new gi({name:"BackgroundMaterial",uniforms:gs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(T.colorSpace)!==at,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||u!==T.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,u=T.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(La,kd(s)),n.buffers.color.setClear(La.r,La.g,La.b,x,r)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:b,addToRenderList:m,dispose:y}}function N0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let a=i,r=!1;function o(M,P,O,B,X){let W=!1;const j=h(B,O,P);a!==j&&(a=j,c(a.object)),W=p(M,B,O,X),W&&g(M,B,O,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,x(M,P,O,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function h(M,P,O){const B=O.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let W=X[P.id];W===void 0&&(W={},X[P.id]=W);let j=W[B];return j===void 0&&(j=u(l()),W[B]=j),j}function u(M){const P=[],O=[],B=[];for(let X=0;X<t;X++)P[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,O,B){const X=a.attributes,W=P.attributes;let j=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){const de=X[H];let we=W[H];if(we===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;j++}return a.attributesNum!==j||a.index!==B}function g(M,P,O,B){const X={},W=P.attributes;let j=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){let de=W[H];de===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const we={};we.attribute=de,de&&de.data&&(we.data=de.data),X[H]=we,j++}a.attributes=X,a.attributesNum=j,a.index=B}function b(){const M=a.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const O=a.newAttributes,B=a.enabledAttributes,X=a.attributeDivisors;O[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),X[M]!==P&&(s.vertexAttribDivisor(M,P),X[M]=P)}function y(){const M=a.newAttributes,P=a.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==M[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function S(M,P,O,B,X,W,j){j===!0?s.vertexAttribIPointer(M,P,O,X,W):s.vertexAttribPointer(M,P,O,B,X,W)}function x(M,P,O,B){b();const X=B.attributes,W=O.getAttributes(),j=P.defaultAttributeValues;for(const Y in W){const H=W[Y];if(H.location>=0){let re=X[Y];if(re===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const de=re.normalized,we=re.itemSize,Xe=e.get(re);if(Xe===void 0)continue;const lt=Xe.buffer,ft=Xe.type,et=Xe.bytesPerElement,q=ft===s.INT||ft===s.UNSIGNED_INT||re.gpuType===Yo;if(re.isInterleavedBufferAttribute){const Z=re.data,fe=Z.stride,Fe=re.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)f(H.location+Se,Z.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<H.locationSize;Se++)m(H.location+Se);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Se=0;Se<H.locationSize;Se++)S(H.location+Se,we/H.locationSize,ft,de,fe*et,(Fe+we/H.locationSize*Se)*et,q)}else{if(re.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)f(H.location+Z,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Z=0;Z<H.locationSize;Z++)S(H.location+Z,we/H.locationSize,ft,de,we*et,we/H.locationSize*Z*et,q)}}else if(j!==void 0){const de=j[Y];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(H.location,de);break;case 3:s.vertexAttrib3fv(H.location,de);break;case 4:s.vertexAttrib4fv(H.location,de);break;default:s.vertexAttrib1fv(H.location,de)}}}}y()}function T(){D();for(const M in n){const P=n[M];for(const O in P){const B=P[O];for(const X in B)d(B[X].object),delete B[X];delete P[O]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const B=P[O];for(const X in B)d(B[X].object),delete B[X];delete P[O]}delete n[M.id]}function R(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const B=O[M.id];for(const X in B)d(B[X].object),delete B[X];delete O[M.id]}}function D(){w(),r=!0,a!==i&&(a=i,c(a.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function O0(s,e,t){let n;function i(c){n=c}function a(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function r(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let b=0;b<h;b++)g+=d[b]*u[b];t.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function k0(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==_n&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==kn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!D)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:A}}function z0(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new $n,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||a&&!m)a?d(null):c();else{const y=a?0:n,S=y*4;let x=f.clippingState||null;l.value=x,x=d(g,u,S,p);for(let T=0;T!==S;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const f=p+b*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==b;++S,x+=4)r.copy(h[S]).applyMatrix4(y,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function B0(s){let e=new WeakMap;function t(r,o){return o===ao?r.mapping=fs:o===ro&&(r.mapping=ps),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===ao||o===ro)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new rp(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const os=4,Tc=[.125,.215,.35,.446,.526,.582],Pi=20,zr=new rr,Ac=new Ce;let Br=null,Hr=0,Gr=0,Vr=!1;const Ri=(1+Math.sqrt(5))/2,ns=1/Ri,Rc=[new L(-Ri,ns,0),new L(Ri,ns,0),new L(-ns,0,Ri),new L(ns,0,Ri),new L(0,Ri,-ns),new L(0,Ri,ns),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],H0=new L;class Go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,a={}){const{size:r=256,position:o=H0}=a;Br=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Br,Hr,Gr),this._renderer.xr.enabled=Vr,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Br=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:na,format:_n,colorSpace:Jt,depthBuffer:!1},i=Cc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(a)),this._blurMaterial=V0(a,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,n,i,a){const l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ac),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const b=new Li({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new gt(new _i,b);let f=!1;const y=e.background;y?y.isColor&&(b.color.copy(y),e.background=null,f=!0):(b.color.copy(Ac),f=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[S],a.y,a.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[S]));const T=this._cubeSize;Da(i,x*T,S>2?T:0,T,T),h.setRenderTarget(i),f&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fs||e.mapping===ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new gt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Rc[(i-a-1)%Rc.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new gt(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),b=a/g,m=isFinite(a)?1+Math.floor(d*b):Pi;m>Pi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const f=[];let y=0;for(let R=0;R<Pi;++R){const D=R/b,w=Math.exp(-D*D/2);f.push(w),R===0?y+=w:R<m&&(y+=2*w)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const x=this._sizeLods[i],T=3*x*(i>S-os?i-S+os:0),A=4*(this._cubeSize-x);Da(t,T,A,3*x,2*x),l.setRenderTarget(t),l.render(h,zr)}}function G0(s){const e=[],t=[],n=[];let i=s;const a=s-os+1+Tc.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>s-os?l=Tc[r-s+os-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,b=3,m=2,f=1,y=new Float32Array(b*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,D=A>2?0:-1,w=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(w,b*g*A),S.set(u,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const T=new Wt;T.setAttribute("position",new Zt(y,b)),T.setAttribute("uv",new Zt(S,m)),T.setAttribute("faceIndex",new Zt(x,f)),e.push(T),i>os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cc(s,e,t){const n=new Fi(s,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function V0(s,e,t){const n=new Float32Array(Pi),i=new L(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Pc(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Lc(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ao||l===ro,d=l===fs||l===ps;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Go(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new Go(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function j0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ea("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function X0(s,e,t,n){const i={},a=new WeakMap;function r(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let b=0;if(p!==null){const y=p.array;b=p.version;for(let S=0,x=y.length;S<x;S+=3){const T=y[S+0],A=y[S+1],R=y[S+2];u.push(T,A,A,R,R,T)}}else if(g!==void 0){const y=g.array;b=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const T=S+0,A=S+1,R=S+2;u.push(T,A,A,R,R,T)}}else return;const m=new(Id(u)?Od:Nd)(u,1);m.version=b;const f=a.get(h);f&&e.remove(f),a.set(h,m)}function d(h){const u=a.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function q0(s,e,t){let n;function i(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){s.drawElements(n,p,a,u*r),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,a,u*r,g),t.update(p,n,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(u,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,u,0,b,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*b[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function $0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function K0(s,e,t){const n=new WeakMap,i=new Qe;function a(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),b===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*h),D=new Ud(R,T,A,h);D.type=An,D.needsUpdate=!0;const w=x*4;for(let P=0;P<h;P++){const O=f[P],B=y[P],X=S[P],W=T*A*4*P;for(let j=0;j<O.count;j++){const Y=j*w;g===!0&&(i.fromBufferAttribute(O,j),R[W+Y+0]=i.x,R[W+Y+1]=i.y,R[W+Y+2]=i.z,R[W+Y+3]=0),b===!0&&(i.fromBufferAttribute(B,j),R[W+Y+4]=i.x,R[W+Y+5]=i.y,R[W+Y+6]=i.z,R[W+Y+7]=0),m===!0&&(i.fromBufferAttribute(X,j),R[W+Y+8]=i.x,R[W+Y+9]=i.y,R[W+Y+10]=i.z,R[W+Y+11]=X.itemSize===4?i.w:1)}}u={count:h,texture:D,size:new Re(T,A)},n.set(o,u),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function Y0(s,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}const Qd=new Ft,Dc=new jd(1,1),eh=new Ud,th=new Vf,nh=new Bd,Ic=[],Uc=[],Fc=new Float32Array(16),Nc=new Float32Array(9),Oc=new Float32Array(4);function Ts(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Ic[i];if(a===void 0&&(a=new Float32Array(i),Ic[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function or(s,e){let t=Uc[e];t===void 0&&(t=new Int32Array(e),Uc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Z0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function J0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function Q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function tb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Oc.set(n),s.uniformMatrix2fv(this.addr,!1,Oc),Lt(t,n)}}function nb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Nc.set(n),s.uniformMatrix3fv(this.addr,!1,Nc),Lt(t,n)}}function ib(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Fc.set(n),s.uniformMatrix4fv(this.addr,!1,Fc),Lt(t,n)}}function sb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function ob(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function lb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function hb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function ub(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Dc.compareFunction=Ld,a=Dc):a=Qd,t.setTexture2D(e||a,i)}function fb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||th,i)}function pb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nh,i)}function mb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eh,i)}function gb(s){switch(s){case 5126:return Z0;case 35664:return J0;case 35665:return Q0;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return sb;case 35667:case 35671:return ab;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return db;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function bb(s,e){s.uniform1fv(this.addr,e)}function _b(s,e){const t=Ts(e,this.size,2);s.uniform2fv(this.addr,t)}function xb(s,e){const t=Ts(e,this.size,3);s.uniform3fv(this.addr,t)}function vb(s,e){const t=Ts(e,this.size,4);s.uniform4fv(this.addr,t)}function yb(s,e){const t=Ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Mb(s,e){const t=Ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sb(s,e){const t=Ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wb(s,e){s.uniform1iv(this.addr,e)}function Eb(s,e){s.uniform2iv(this.addr,e)}function Tb(s,e){s.uniform3iv(this.addr,e)}function Ab(s,e){s.uniform4iv(this.addr,e)}function Rb(s,e){s.uniform1uiv(this.addr,e)}function Cb(s,e){s.uniform2uiv(this.addr,e)}function Pb(s,e){s.uniform3uiv(this.addr,e)}function Lb(s,e){s.uniform4uiv(this.addr,e)}function Db(s,e,t){const n=this.cache,i=e.length,a=or(t,i);Pt(n,a)||(s.uniform1iv(this.addr,a),Lt(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Qd,a[r])}function Ib(s,e,t){const n=this.cache,i=e.length,a=or(t,i);Pt(n,a)||(s.uniform1iv(this.addr,a),Lt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||th,a[r])}function Ub(s,e,t){const n=this.cache,i=e.length,a=or(t,i);Pt(n,a)||(s.uniform1iv(this.addr,a),Lt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||nh,a[r])}function Fb(s,e,t){const n=this.cache,i=e.length,a=or(t,i);Pt(n,a)||(s.uniform1iv(this.addr,a),Lt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||eh,a[r])}function Nb(s){switch(s){case 5126:return bb;case 35664:return _b;case 35665:return xb;case 35666:return vb;case 35674:return yb;case 35675:return Mb;case 35676:return Sb;case 5124:case 35670:return wb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Cb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Fb}}class Ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gb(t.type)}}class kb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nb(t.type)}}class zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function kc(s,e){s.seq.push(e),s.map[e.id]=e}function Bb(s,e,t){const n=s.name,i=n.length;for(Wr.lastIndex=0;;){const a=Wr.exec(n),r=Wr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){kc(t,c===void 0?new Ob(o,s,e):new kb(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new zb(o),kc(t,h)),t=h}}}class Wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);Bb(a,r,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function zc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Hb=37297;let Gb=0;function Vb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Bc=new He;function Wb(s){Ye._getMatrix(Bc,Ye.workingColorSpace,s);const e=`mat3( ${Bc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Xa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Vb(s.getShaderSource(e),o)}else return a}function jb(s,e){const t=Wb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xb(s,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case nf:t="Cineon";break;case so:t="ACESFilmic";break;case af:t="AgX";break;case rf:t="Neutral";break;case sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ia=new L;function qb(){Ye.getLuminanceCoefficients(Ia);const s=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Kb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Hs(s){return s!==""}function Gc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(s){return s.replace(Zb,Qb)}const Jb=new Map;function Qb(s,e){let t=We[e];if(t===void 0){const n=Jb.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(s){return s.replace(e_,t_)}function t_(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function jc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function i_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fs:case ps:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function a_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ko:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function r_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o_(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=n_(t),c=i_(t),d=s_(t),h=a_(t),u=r_(t),p=$b(t),g=Kb(a),b=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(m=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?We.tonemapping_pars_fragment:"",t.toneMapping!==mi?Xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,jb("linearToOutputTexel",t.outputColorSpace),qb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),r=Vo(r),r=Gc(r,t),r=Vc(r,t),o=Vo(o),o=Gc(o,t),o=Vc(o,t),r=Wc(r),o=Wc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=y+m+r,x=y+f+o,T=zc(i,i.VERTEX_SHADER,S),A=zc(i,i.FRAGMENT_SHADER,x);i.attachShader(b,T),i.attachShader(b,A),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(b)||"",B=i.getShaderInfoLog(T)||"",X=i.getShaderInfoLog(A)||"",W=O.trim(),j=B.trim(),Y=X.trim();let H=!0,re=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,T,A);else{const de=Hc(i,T,"vertex"),we=Hc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+de+`
`+we)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||Y==="")&&(re=!1);re&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(T),i.deleteShader(A),D=new Wa(i,b),w=Yb(i,b)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(b,Hb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let l_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=l_++,this.code=e,this.usedTimes=0}}function h_(s,e,t,n,i,a,r){const o=new rl,l=new c_,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,O,B){const X=O.fog,W=B.geometry,j=w.isMeshStandardMaterial?O.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||j),H=Y&&Y.mapping===tr?Y.image.height:null,re=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,we=de!==void 0?de.length:0;let Xe=0;W.morphAttributes.position!==void 0&&(Xe=1),W.morphAttributes.normal!==void 0&&(Xe=2),W.morphAttributes.color!==void 0&&(Xe=3);let lt,ft,et,q;if(re){const tt=Fn[re];lt=tt.vertexShader,ft=tt.fragmentShader}else lt=w.vertexShader,ft=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),q=l.getFragmentShaderID(w);const Z=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,Se=B.isBatchedMesh===!0,Ke=!!w.map,kt=!!w.matcap,C=!!Y,pt=!!w.aoMap,ze=!!w.lightMap,Ie=!!w.bumpMap,ge=!!w.normalMap,mt=!!w.displacementMap,be=!!w.emissiveMap,Ge=!!w.metalnessMap,Dt=!!w.roughnessMap,Mt=w.anisotropy>0,E=w.clearcoat>0,_=w.dispersion>0,N=w.iridescence>0,V=w.sheen>0,K=w.transmission>0,G=Mt&&!!w.anisotropyMap,ye=E&&!!w.clearcoatMap,ne=E&&!!w.clearcoatNormalMap,_e=E&&!!w.clearcoatRoughnessMap,xe=N&&!!w.iridescenceMap,ee=N&&!!w.iridescenceThicknessMap,ce=V&&!!w.sheenColorMap,De=V&&!!w.sheenRoughnessMap,ve=!!w.specularMap,oe=!!w.specularColorMap,Be=!!w.specularIntensityMap,I=K&&!!w.transmissionMap,te=K&&!!w.thicknessMap,se=!!w.gradientMap,ue=!!w.alphaMap,J=w.alphaTest>0,$=!!w.alphaHash,me=!!w.extensions;let ke=mi;w.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ke=s.toneMapping);const ct={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:lt,fragmentShader:ft,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Se,batchingColor:Se&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Jt,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:kt,envMap:C,envMapMode:C&&Y.mapping,envMapCubeUVHeight:H,aoMap:pt,lightMap:ze,bumpMap:Ie,normalMap:ge,displacementMap:u&&mt,emissiveMap:be,normalMapObjectSpace:ge&&w.normalMapType===uf,normalMapTangentSpace:ge&&w.normalMapType===il,metalnessMap:Ge,roughnessMap:Dt,anisotropy:Mt,anisotropyMap:G,clearcoat:E,clearcoatMap:ye,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:_,iridescence:N,iridescenceMap:xe,iridescenceThicknessMap:ee,sheen:V,sheenColorMap:ce,sheenRoughnessMap:De,specularMap:ve,specularColorMap:oe,specularIntensityMap:Be,transmission:K,transmissionMap:I,thicknessMap:te,gradientMap:se,opaque:w.transparent===!1&&w.blending===ls&&w.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:$,combine:w.combine,mapUv:Ke&&b(w.map.channel),aoMapUv:pt&&b(w.aoMap.channel),lightMapUv:ze&&b(w.lightMap.channel),bumpMapUv:Ie&&b(w.bumpMap.channel),normalMapUv:ge&&b(w.normalMap.channel),displacementMapUv:mt&&b(w.displacementMap.channel),emissiveMapUv:be&&b(w.emissiveMap.channel),metalnessMapUv:Ge&&b(w.metalnessMap.channel),roughnessMapUv:Dt&&b(w.roughnessMap.channel),anisotropyMapUv:G&&b(w.anisotropyMap.channel),clearcoatMapUv:ye&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:De&&b(w.sheenRoughnessMap.channel),specularMapUv:ve&&b(w.specularMap.channel),specularColorMapUv:oe&&b(w.specularColorMap.channel),specularIntensityMapUv:Be&&b(w.specularIntensityMap.channel),transmissionMapUv:I&&b(w.transmissionMap.channel),thicknessMapUv:te&&b(w.thicknessMap.channel),alphaMapUv:ue&&b(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ge||Mt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Ke||ue),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===at,decodeVideoTextureEmissive:be&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bn,flipSided:w.side===Kt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:me&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&w.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(M,w),S(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const M=g[w.type];let P;if(M){const O=Fn[M];P=np.clone(O.uniforms)}else P=w.uniforms;return P}function T(w,M){let P;for(let O=0,B=d.length;O<B;O++){const X=d[O];if(X.cacheKey===M){P=X,++P.usedTimes;break}}return P===void 0&&(P=new o_(s,M,w,a),d.push(P)),P}function A(w){if(--w.usedTimes===0){const M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function R(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:D}}function u_(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function f_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qc(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(h,u,p,g,b,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=b,f.group=m),e++,f}function o(h,u,p,g,b,m){const f=r(h,u,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,g,b,m){const f=r(h,u,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||f_),n.length>1&&n.sort(u||Xc),i.length>1&&i.sort(u||Xc)}function d(){for(let h=e,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:d,sort:c}}function p_(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new qc,s.set(n,[r])):i>=a.length?(r=new qc,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function m_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function g_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let b_=0;function __(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function x_(s){const e=new m_,t=g_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,a=new Oe,r=new Oe;function o(c){let d=0,h=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,y=0,S=0,x=0,T=0,A=0,R=0;c.sort(__);for(let w=0,M=c.length;w<M;w++){const P=c[w],O=P.color,B=P.intensity,X=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*B,h+=O.g*B,u+=O.b*B;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],B);R++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=j,p++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(O).multiplyScalar(B),j.distance=X,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[b]=j;const Y=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[b]=Y.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=W,x++}b++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(O).multiplyScalar(B),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=j,m++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Y=P.shadow,H=t.get(P);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=j,g++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(B),j.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=j,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==b||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==x||D.numSpotMaps!==T||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=b,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=x,D.numSpotMaps=T,D.numLightProbes=R,n.version=b_++)}function l(c,d){let h=0,u=0,p=0,g=0,b=0;const m=d.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const S=c[f];if(S.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),r.identity(),a.copy(S.matrixWorld),a.premultiply(m),r.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const x=n.hemi[b];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function $c(s){const e=new x_(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function r(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function v_(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new $c(s),e.set(i,[o])):a>=r.length?(o=new $c(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S_(s,e,t){let n=new dl;const i=new Re,a=new Re,r=new Qe,o=new xp({depthPacking:hf}),l=new vp,c={},d=t.maxTextureSize,h={[ei]:Kt,[Kt]:ei,[bn]:bn},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:y_,fragmentShader:M_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let f=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==qn&&this.type===qn,X=f===qn&&this.type!==qn;for(let W=0,j=A.length;W<j;W++){const Y=A[W],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const re=H.getFrameExtents();if(i.multiply(re),a.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/re.x),i.x=a.x*re.x,H.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/re.y),i.y=a.y*re.y,H.mapSize.y=a.y)),H.map===null||B===!0||X===!0){const we=this.type!==qn?{minFilter:Yt,magFilter:Yt}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(i.x,i.y,we),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const de=H.getViewportCount();for(let we=0;we<de;we++){const Xe=H.getViewport(we);r.set(a.x*Xe.x,a.y*Xe.y,a.x*Xe.z,a.y*Xe.w),O.viewport(r),H.updateMatrices(Y,we),n=H.getFrustum(),x(R,D,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===qn&&y(H,D),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function y(A,R){const D=e.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,D,u,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,D,p,b,null)}function S(A,R,D,w){let M=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=M.uuid,B=R.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let W=X[B];W===void 0&&(W=M.clone(),X[B]=W,R.addEventListener("dispose",T)),M=W}if(M.visible=R.visible,M.wireframe=R.wireframe,w===qn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=D}return M}function x(A,R,D,w,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const B=e.update(A),X=A.material;if(Array.isArray(X)){const W=B.groups;for(let j=0,Y=W.length;j<Y;j++){const H=W[j],re=X[H.materialIndex];if(re&&re.visible){const de=S(A,re,w,M);A.onBeforeShadow(s,A,R,D,B,de,H),s.renderBufferDirect(D,null,B,de,A,H),A.onAfterShadow(s,A,R,D,B,de,H)}}}else if(X.visible){const W=S(A,X,w,M);A.onBeforeShadow(s,A,R,D,B,W,null),s.renderBufferDirect(D,null,B,W,A,null),A.onAfterShadow(s,A,R,D,B,W,null)}}const O=A.children;for(let B=0,X=O.length;B<X;B++)x(O[B],R,D,w,M)}function T(A){A.target.removeEventListener("dispose",T);for(const D in c){const w=c[D],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const w_={[Zr]:Jr,[Qr]:no,[eo]:io,[us]:to,[Jr]:Zr,[no]:Qr,[io]:eo,[to]:us};function E_(s,e){function t(){let I=!1;const te=new Qe;let se=null;const ue=new Qe(0,0,0,0);return{setMask:function(J){se!==J&&!I&&(s.colorMask(J,J,J,J),se=J)},setLocked:function(J){I=J},setClear:function(J,$,me,ke,ct){ct===!0&&(J*=ke,$*=ke,me*=ke),te.set(J,$,me,ke),ue.equals(te)===!1&&(s.clearColor(J,$,me,ke),ue.copy(te))},reset:function(){I=!1,se=null,ue.set(-1,0,0,0)}}}function n(){let I=!1,te=!1,se=null,ue=null,J=null;return{setReversed:function($){if(te!==$){const me=e.get("EXT_clip_control");$?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=$;const ke=J;J=null,this.setClear(ke)}},getReversed:function(){return te},setTest:function($){$?Z(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function($){se!==$&&!I&&(s.depthMask($),se=$)},setFunc:function($){if(te&&($=w_[$]),ue!==$){switch($){case Zr:s.depthFunc(s.NEVER);break;case Jr:s.depthFunc(s.ALWAYS);break;case Qr:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case eo:s.depthFunc(s.EQUAL);break;case to:s.depthFunc(s.GEQUAL);break;case no:s.depthFunc(s.GREATER);break;case io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=$}},setLocked:function($){I=$},setClear:function($){J!==$&&(te&&($=1-$),s.clearDepth($),J=$)},reset:function(){I=!1,se=null,ue=null,J=null,te=!1}}}function i(){let I=!1,te=null,se=null,ue=null,J=null,$=null,me=null,ke=null,ct=null;return{setTest:function(tt){I||(tt?Z(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(tt){te!==tt&&!I&&(s.stencilMask(tt),te=tt)},setFunc:function(tt,Bn,Dn){(se!==tt||ue!==Bn||J!==Dn)&&(s.stencilFunc(tt,Bn,Dn),se=tt,ue=Bn,J=Dn)},setOp:function(tt,Bn,Dn){($!==tt||me!==Bn||ke!==Dn)&&(s.stencilOp(tt,Bn,Dn),$=tt,me=Bn,ke=Dn)},setLocked:function(tt){I=tt},setClear:function(tt){ct!==tt&&(s.clearStencil(tt),ct=tt)},reset:function(){I=!1,te=null,se=null,ue=null,J=null,$=null,me=null,ke=null,ct=null}}}const a=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,b=!1,m=null,f=null,y=null,S=null,x=null,T=null,A=null,R=new Ce(0,0,0),D=0,w=!1,M=null,P=null,O=null,B=null,X=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=Y>=2);let re=null,de={};const we=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),lt=new Qe().fromArray(we),ft=new Qe().fromArray(Xe);function et(I,te,se,ue){const J=new Uint8Array(4),$=s.createTexture();s.bindTexture(I,$),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<se;me++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(te+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return $}const q={};q[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),r.setFunc(us),Ie(!1),ge(Cl),Z(s.CULL_FACE),pt(pi);function Z(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function fe(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Fe(I,te){return h[I]!==te?(s.bindFramebuffer(I,te),h[I]=te,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=te),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Se(I,te){let se=p,ue=!1;if(I){se=u.get(te),se===void 0&&(se=[],u.set(te,se));const J=I.textures;if(se.length!==J.length||se[0]!==s.COLOR_ATTACHMENT0){for(let $=0,me=J.length;$<me;$++)se[$]=s.COLOR_ATTACHMENT0+$;se.length=J.length,ue=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,ue=!0);ue&&s.drawBuffers(se)}function Ke(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const kt={[Ci]:s.FUNC_ADD,[Fu]:s.FUNC_SUBTRACT,[Nu]:s.FUNC_REVERSE_SUBTRACT};kt[Ou]=s.MIN,kt[ku]=s.MAX;const C={[zu]:s.ZERO,[Bu]:s.ONE,[Hu]:s.SRC_COLOR,[Kr]:s.SRC_ALPHA,[qu]:s.SRC_ALPHA_SATURATE,[ju]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Gu]:s.ONE_MINUS_SRC_COLOR,[Yr]:s.ONE_MINUS_SRC_ALPHA,[Xu]:s.ONE_MINUS_DST_COLOR,[Wu]:s.ONE_MINUS_DST_ALPHA,[$u]:s.CONSTANT_COLOR,[Ku]:s.ONE_MINUS_CONSTANT_COLOR,[Yu]:s.CONSTANT_ALPHA,[Zu]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(I,te,se,ue,J,$,me,ke,ct,tt){if(I===pi){b===!0&&(fe(s.BLEND),b=!1);return}if(b===!1&&(Z(s.BLEND),b=!0),I!==Uu){if(I!==m||tt!==w){if((f!==Ci||x!==Ci)&&(s.blendEquation(s.FUNC_ADD),f=Ci,x=Ci),tt)switch(I){case ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.ONE,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ll:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,T=null,A=null,R.set(0,0,0),D=0,m=I,w=tt}return}J=J||te,$=$||se,me=me||ue,(te!==f||J!==x)&&(s.blendEquationSeparate(kt[te],kt[J]),f=te,x=J),(se!==y||ue!==S||$!==T||me!==A)&&(s.blendFuncSeparate(C[se],C[ue],C[$],C[me]),y=se,S=ue,T=$,A=me),(ke.equals(R)===!1||ct!==D)&&(s.blendColor(ke.r,ke.g,ke.b,ct),R.copy(ke),D=ct),m=I,w=!1}function ze(I,te){I.side===bn?fe(s.CULL_FACE):Z(s.CULL_FACE);let se=I.side===Kt;te&&(se=!se),Ie(se),I.blending===ls&&I.transparent===!1?pt(pi):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function ge(I){I!==Du?(Z(s.CULL_FACE),I!==P&&(I===Cl?s.cullFace(s.BACK):I===Iu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),P=I}function mt(I){I!==O&&(j&&s.lineWidth(I),O=I)}function be(I,te,se){I?(Z(s.POLYGON_OFFSET_FILL),(B!==te||X!==se)&&(s.polygonOffset(te,se),B=te,X=se)):fe(s.POLYGON_OFFSET_FILL)}function Ge(I){I?Z(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function Dt(I){I===void 0&&(I=s.TEXTURE0+W-1),re!==I&&(s.activeTexture(I),re=I)}function Mt(I,te,se){se===void 0&&(re===null?se=s.TEXTURE0+W-1:se=re);let ue=de[se];ue===void 0&&(ue={type:void 0,texture:void 0},de[se]=ue),(ue.type!==I||ue.texture!==te)&&(re!==se&&(s.activeTexture(se),re=se),s.bindTexture(I,te||q[I]),ue.type=I,ue.texture=te)}function E(){const I=de[re];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){lt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function De(I){ft.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ft.copy(I))}function ve(I,te){let se=c.get(te);se===void 0&&(se=new WeakMap,c.set(te,se));let ue=se.get(I);ue===void 0&&(ue=s.getUniformBlockIndex(te,I.name),se.set(I,ue))}function oe(I,te){const ue=c.get(te).get(I);l.get(te)!==ue&&(s.uniformBlockBinding(te,ue,I.__bindingPointIndex),l.set(te,ue))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},re=null,de={},h={},u=new WeakMap,p=[],g=null,b=!1,m=null,f=null,y=null,S=null,x=null,T=null,A=null,R=new Ce(0,0,0),D=0,w=!1,M=null,P=null,O=null,B=null,X=null,lt.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Z,disable:fe,bindFramebuffer:Fe,drawBuffers:Se,useProgram:Ke,setBlending:pt,setMaterial:ze,setFlipSided:Ie,setCullFace:ge,setLineWidth:mt,setPolygonOffset:be,setScissorTest:Ge,activeTexture:Dt,bindTexture:Mt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:xe,texImage3D:ee,updateUBOMapping:ve,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:_e,texSubImage2D:V,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:ye,scissor:ce,viewport:De,reset:Be}}function T_(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):Qs("canvas")}function b(E,_,N){let V=1;const K=Mt(E);if((K.width>N||K.height>N)&&(V=N/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const G=Math.floor(V*K.width),ye=Math.floor(V*K.height);h===void 0&&(h=g(G,ye));const ne=_?g(G,ye):h;return ne.width=G,ne.height=ye,ne.getContext("2d").drawImage(E,0,0,G,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+ye+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(E,_,N,V,K=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=_;if(_===s.RED&&(N===s.FLOAT&&(G=s.R32F),N===s.HALF_FLOAT&&(G=s.R16F),N===s.UNSIGNED_BYTE&&(G=s.R8)),_===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(G=s.R8UI),N===s.UNSIGNED_SHORT&&(G=s.R16UI),N===s.UNSIGNED_INT&&(G=s.R32UI),N===s.BYTE&&(G=s.R8I),N===s.SHORT&&(G=s.R16I),N===s.INT&&(G=s.R32I)),_===s.RG&&(N===s.FLOAT&&(G=s.RG32F),N===s.HALF_FLOAT&&(G=s.RG16F),N===s.UNSIGNED_BYTE&&(G=s.RG8)),_===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(G=s.RG8UI),N===s.UNSIGNED_SHORT&&(G=s.RG16UI),N===s.UNSIGNED_INT&&(G=s.RG32UI),N===s.BYTE&&(G=s.RG8I),N===s.SHORT&&(G=s.RG16I),N===s.INT&&(G=s.RG32I)),_===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(G=s.RGB8UI),N===s.UNSIGNED_SHORT&&(G=s.RGB16UI),N===s.UNSIGNED_INT&&(G=s.RGB32UI),N===s.BYTE&&(G=s.RGB8I),N===s.SHORT&&(G=s.RGB16I),N===s.INT&&(G=s.RGB32I)),_===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),N===s.UNSIGNED_INT&&(G=s.RGBA32UI),N===s.BYTE&&(G=s.RGBA8I),N===s.SHORT&&(G=s.RGBA16I),N===s.INT&&(G=s.RGBA32I)),_===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),_===s.RGBA){const ye=K?Xa:Ye.getTransfer(V);N===s.FLOAT&&(G=s.RGBA32F),N===s.HALF_FLOAT&&(G=s.RGBA16F),N===s.UNSIGNED_BYTE&&(G=ye===at?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(E,_){let N;return E?_===null||_===Ui||_===$s?N=s.DEPTH24_STENCIL8:_===An?N=s.DEPTH32F_STENCIL8:_===qs&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===$s?N=s.DEPTH_COMPONENT24:_===An?N=s.DEPTH_COMPONENT32F:_===qs&&(N=s.DEPTH_COMPONENT16),N}function T(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Yt&&E.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&d.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),M(_)}function D(E){const _=n.get(E);if(_.__webglInit===void 0)return;const N=E.source,V=u.get(N);if(V){const K=V[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(E),Object.keys(V).length===0&&u.delete(N)}n.remove(E)}function w(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const N=E.source,V=u.get(N);delete V[_.__cacheKey],r.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let K=0;K<_.__webglFramebuffer[V].length;K++)s.deleteFramebuffer(_.__webglFramebuffer[V][K]);else s.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)s.deleteFramebuffer(_.__webglFramebuffer[V]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let V=0,K=N.length;V<K;V++){const G=n.get(N[V]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),r.memory.textures--),n.remove(N[V])}n.remove(E)}let P=0;function O(){P=0}function B(){const E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function X(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function W(E,_){const N=n.get(E);if(E.isVideoTexture&&Ge(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const V=E.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+_)}function j(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){q(N,E,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+_)}function Y(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){q(N,E,_);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+_)}function H(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){Z(N,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+_)}const re={[Ii]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[ja]:s.MIRRORED_REPEAT},de={[Yt]:s.NEAREST,[Md]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[ka]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},we={[ff]:s.NEVER,[xf]:s.ALWAYS,[pf]:s.LESS,[Ld]:s.LEQUAL,[mf]:s.EQUAL,[_f]:s.GEQUAL,[gf]:s.GREATER,[bf]:s.NOTEQUAL};function Xe(E,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===ka||_.magFilter===Bs||_.magFilter===Kn||_.minFilter===ln||_.minFilter===ka||_.minFilter===Bs||_.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,re[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,re[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,re[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,de[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==Bs&&_.minFilter!==Kn||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function lt(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const V=_.source;let K=u.get(V);K===void 0&&(K={},u.set(V,K));const G=X(_);if(G!==E.__cacheKey){K[G]===void 0&&(K[G]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,N=!0),K[G].usedTimes++;const ye=K[E.__cacheKey];ye!==void 0&&(K[E.__cacheKey].usedTimes--,ye.usedTimes===0&&w(_)),E.__cacheKey=G,E.__webglTexture=K[G].texture}return N}function ft(E,_,N){return Math.floor(Math.floor(E/N)/_)}function et(E,_,N,V){const G=E.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,N,V,_.data);else{G.sort((ee,ce)=>ee.start-ce.start);let ye=0;for(let ee=1;ee<G.length;ee++){const ce=G[ye],De=G[ee],ve=ce.start+ce.count,oe=ft(De.start,_.width,4),Be=ft(ce.start,_.width,4);De.start<=ve+1&&oe===Be&&ft(De.start+De.count-1,_.width,4)===oe?ce.count=Math.max(ce.count,De.start+De.count-ce.start):(++ye,G[ye]=De)}G.length=ye+1;const ne=s.getParameter(s.UNPACK_ROW_LENGTH),_e=s.getParameter(s.UNPACK_SKIP_PIXELS),xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let ee=0,ce=G.length;ee<ce;ee++){const De=G[ee],ve=Math.floor(De.start/4),oe=Math.ceil(De.count/4),Be=ve%_.width,I=Math.floor(ve/_.width),te=oe,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,Be,I,te,se,N,V,_.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),s.pixelStorei(s.UNPACK_SKIP_ROWS,xe)}}function q(E,_,N){let V=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=s.TEXTURE_3D);const K=lt(E,_),G=_.source;t.bindTexture(V,E.__webglTexture,s.TEXTURE0+N);const ye=n.get(G);if(G.version!==ye.__version||K===!0){t.activeTexture(s.TEXTURE0+N);const ne=Ye.getPrimaries(Ye.workingColorSpace),_e=_.colorSpace===ci?null:Ye.getPrimaries(_.colorSpace),xe=_.colorSpace===ci||ne===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ee=b(_.image,!1,i.maxTextureSize);ee=Dt(_,ee);const ce=a.convert(_.format,_.colorSpace),De=a.convert(_.type);let ve=S(_.internalFormat,ce,De,_.colorSpace,_.isVideoTexture);Xe(V,_);let oe;const Be=_.mipmaps,I=_.isVideoTexture!==!0,te=ye.__version===void 0||K===!0,se=G.dataReady,ue=T(_,ee);if(_.isDepthTexture)ve=x(_.format===Ys,_.type),te&&(I?t.texStorage2D(s.TEXTURE_2D,1,ve,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,ve,ee.width,ee.height,0,ce,De,null));else if(_.isDataTexture)if(Be.length>0){I&&te&&t.texStorage2D(s.TEXTURE_2D,ue,ve,Be[0].width,Be[0].height);for(let J=0,$=Be.length;J<$;J++)oe=Be[J],I?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,De,oe.data):t.texImage2D(s.TEXTURE_2D,J,ve,oe.width,oe.height,0,ce,De,oe.data);_.generateMipmaps=!1}else I?(te&&t.texStorage2D(s.TEXTURE_2D,ue,ve,ee.width,ee.height),se&&et(_,ee,ce,De)):t.texImage2D(s.TEXTURE_2D,0,ve,ee.width,ee.height,0,ce,De,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,ve,Be[0].width,Be[0].height,ee.depth);for(let J=0,$=Be.length;J<$;J++)if(oe=Be[J],_.format!==_n)if(ce!==null)if(I){if(se)if(_.layerUpdates.size>0){const me=Ec(oe.width,oe.height,_.format,_.type);for(const ke of _.layerUpdates){const ct=oe.data.subarray(ke*me/oe.data.BYTES_PER_ELEMENT,(ke+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,ke,oe.width,oe.height,1,ce,ct)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,ve,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,De,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,ve,oe.width,oe.height,ee.depth,0,ce,De,oe.data)}else{I&&te&&t.texStorage2D(s.TEXTURE_2D,ue,ve,Be[0].width,Be[0].height);for(let J=0,$=Be.length;J<$;J++)oe=Be[J],_.format!==_n?ce!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,J,ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,De,oe.data):t.texImage2D(s.TEXTURE_2D,J,ve,oe.width,oe.height,0,ce,De,oe.data)}else if(_.isDataArrayTexture)if(I){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,ve,ee.width,ee.height,ee.depth),se)if(_.layerUpdates.size>0){const J=Ec(ee.width,ee.height,_.format,_.type);for(const $ of _.layerUpdates){const me=ee.data.subarray($*J/ee.data.BYTES_PER_ELEMENT,($+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ce,De,me)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,De,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,ce,De,ee.data);else if(_.isData3DTexture)I?(te&&t.texStorage3D(s.TEXTURE_3D,ue,ve,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,De,ee.data)):t.texImage3D(s.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,ce,De,ee.data);else if(_.isFramebufferTexture){if(te)if(I)t.texStorage2D(s.TEXTURE_2D,ue,ve,ee.width,ee.height);else{let J=ee.width,$=ee.height;for(let me=0;me<ue;me++)t.texImage2D(s.TEXTURE_2D,me,ve,J,$,0,ce,De,null),J>>=1,$>>=1}}else if(Be.length>0){if(I&&te){const J=Mt(Be[0]);t.texStorage2D(s.TEXTURE_2D,ue,ve,J.width,J.height)}for(let J=0,$=Be.length;J<$;J++)oe=Be[J],I?se&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce,De,oe):t.texImage2D(s.TEXTURE_2D,J,ve,ce,De,oe);_.generateMipmaps=!1}else if(I){if(te){const J=Mt(ee);t.texStorage2D(s.TEXTURE_2D,ue,ve,J.width,J.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,De,ee)}else t.texImage2D(s.TEXTURE_2D,0,ve,ce,De,ee);m(_)&&f(V),ye.__version=G.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Z(E,_,N){if(_.image.length!==6)return;const V=lt(E,_),K=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+N);const G=n.get(K);if(K.version!==G.__version||V===!0){t.activeTexture(s.TEXTURE0+N);const ye=Ye.getPrimaries(Ye.workingColorSpace),ne=_.colorSpace===ci?null:Ye.getPrimaries(_.colorSpace),_e=_.colorSpace===ci||ye===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!xe&&!ee?ce[$]=b(_.image[$],!0,i.maxCubemapSize):ce[$]=ee?_.image[$].image:_.image[$],ce[$]=Dt(_,ce[$]);const De=ce[0],ve=a.convert(_.format,_.colorSpace),oe=a.convert(_.type),Be=S(_.internalFormat,ve,oe,_.colorSpace),I=_.isVideoTexture!==!0,te=G.__version===void 0||V===!0,se=K.dataReady;let ue=T(_,De);Xe(s.TEXTURE_CUBE_MAP,_);let J;if(xe){I&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Be,De.width,De.height);for(let $=0;$<6;$++){J=ce[$].mipmaps;for(let me=0;me<J.length;me++){const ke=J[me];_.format!==_n?ve!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,ke.width,ke.height,ve,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Be,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,ke.width,ke.height,ve,oe,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Be,ke.width,ke.height,0,ve,oe,ke.data)}}}else{if(J=_.mipmaps,I&&te){J.length>0&&ue++;const $=Mt(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Be,$.width,$.height)}for(let $=0;$<6;$++)if(ee){I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,ve,oe,ce[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,ce[$].width,ce[$].height,0,ve,oe,ce[$].data);for(let me=0;me<J.length;me++){const ct=J[me].image[$].image;I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,ct.width,ct.height,ve,oe,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Be,ct.width,ct.height,0,ve,oe,ct.data)}}else{I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve,oe,ce[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,ve,oe,ce[$]);for(let me=0;me<J.length;me++){const ke=J[me];I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,ve,oe,ke.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Be,ve,oe,ke.image[$])}}}m(_)&&f(s.TEXTURE_CUBE_MAP),G.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function fe(E,_,N,V,K,G){const ye=a.convert(N.format,N.colorSpace),ne=a.convert(N.type),_e=S(N.internalFormat,ye,ne,N.colorSpace),xe=n.get(_),ee=n.get(N);if(ee.__renderTarget=_,!xe.__hasExternalTextures){const ce=Math.max(1,_.width>>G),De=Math.max(1,_.height>>G);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,G,_e,ce,De,_.depth,0,ye,ne,null):t.texImage2D(K,G,_e,ce,De,0,ye,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),be(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,K,ee.__webglTexture,0,mt(_)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,K,ee.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(E,_,N){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const V=_.depthTexture,K=V&&V.isDepthTexture?V.type:null,G=x(_.stencilBuffer,K),ye=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=mt(_);be(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,G,_.width,_.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,G,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,G,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,E)}else{const V=_.textures;for(let K=0;K<V.length;K++){const G=V[K],ye=a.convert(G.format,G.colorSpace),ne=a.convert(G.type),_e=S(G.internalFormat,ye,ne,G.colorSpace),xe=mt(_);N&&be(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,_e,_.width,_.height):be(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,_e,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,_e,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const K=V.__webglTexture,G=mt(_);if(_.depthTexture.format===Ks)be(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(_.depthTexture.format===Ys)be(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ke(E){const _=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const V=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=V}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const V=E.texture.mipmaps;V&&V.length>0?Se(_.__webglFramebuffer[0],E):Se(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=s.createRenderbuffer(),Fe(_.__webglDepthbuffer[V],E,!1);else{const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,G)}}else{const V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Fe(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(E,_,N){const V=n.get(E);_!==void 0&&fe(V.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ke(E)}function C(E){const _=E.texture,N=n.get(E),V=n.get(_);E.addEventListener("dispose",R);const K=E.textures,G=E.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=_.version,r.memory.textures++),G){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let _e=0;_e<_.mipmaps.length;_e++)N.__webglFramebuffer[ne][_e]=s.createFramebuffer()}else N.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)N.__webglFramebuffer[ne]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ne=0,_e=K.length;ne<_e;ne++){const xe=n.get(K[ne]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),r.memory.textures++)}if(E.samples>0&&be(E)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const _e=K[ne];N.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const xe=a.convert(_e.format,_e.colorSpace),ee=a.convert(_e.type),ce=S(_e.internalFormat,xe,ee,_e.colorSpace,E.isXRRenderTarget===!0),De=mt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)fe(N.__webglFramebuffer[ne][_e],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else fe(N.__webglFramebuffer[ne],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(_)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ne=0,_e=K.length;ne<_e;ne++){const xe=K[ne],ee=n.get(xe);let ce=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Xe(ce,xe),fe(N.__webglFramebuffer,E,xe,s.COLOR_ATTACHMENT0+ne,ce,0),m(xe)&&f(ce)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,V.__webglTexture),Xe(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)fe(N.__webglFramebuffer[_e],E,_,s.COLOR_ATTACHMENT0,ne,_e);else fe(N.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,ne,0);m(_)&&f(ne),t.unbindTexture()}E.depthBuffer&&Ke(E)}function pt(E){const _=E.textures;for(let N=0,V=_.length;N<V;N++){const K=_[N];if(m(K)){const G=y(E),ye=n.get(K).__webglTexture;t.bindTexture(G,ye),f(G),t.unbindTexture()}}}const ze=[],Ie=[];function ge(E){if(E.samples>0){if(be(E)===!1){const _=E.textures,N=E.width,V=E.height;let K=s.COLOR_BUFFER_BIT;const G=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(E),ne=_.length>1;if(ne)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const _e=E.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const ee=n.get(_[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,N,V,0,0,N,V,K,s.NEAREST),l===!0&&(ze.length=0,Ie.length=0,ze.push(s.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ze.push(G),Ie.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const ee=n.get(_[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function mt(E){return Math.min(i.maxSamples,E.samples)}function be(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ge(E){const _=r.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function Dt(E,_){const N=E.colorSpace,V=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Jt&&N!==ci&&(Ye.getTransfer(N)===at?(V!==_n||K!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=kt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=be}function A_(s,e){function t(n,i=ci){let a;const r=Ye.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===Zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ed)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Td)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sd)return s.BYTE;if(n===wd)return s.SHORT;if(n===qs)return s.UNSIGNED_SHORT;if(n===Yo)return s.INT;if(n===Ui)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===na)return s.HALF_FLOAT;if(n===Ad)return s.ALPHA;if(n===Rd)return s.RGB;if(n===_n)return s.RGBA;if(n===Ks)return s.DEPTH_COMPONENT;if(n===Ys)return s.DEPTH_STENCIL;if(n===Qo)return s.RED;if(n===el)return s.RED_INTEGER;if(n===Cd)return s.RG;if(n===tl)return s.RG_INTEGER;if(n===nl)return s.RGBA_INTEGER;if(n===za||n===Ba||n===Ha||n===Ga)if(r===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===uo||n===fo)return r===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===po)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===bo||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===wo||n===Eo||n===To||n===Ao||n===Ro)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===mo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return r===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Po||n===Lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Co)return r===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Io||n===Uo||n===Fo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Do)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:R_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L_ extends zi{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const b=typeof XRWebGLBinding<"u",m=new P_,f={},y=t.getContextAttributes();let S=null,x=null;const T=[],A=[],R=new Re;let D=null;const w=new Gt;w.viewport=new Qe;const M=new Gt;M.viewport=new Qe;const P=[w,M],O=new Bp;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=T[q];return Z===void 0&&(Z=new Lr,T[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=T[q];return Z===void 0&&(Z=new Lr,T[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=T[q];return Z===void 0&&(Z=new Lr,T[q]=Z),Z.getHandSpace()};function W(q){const Z=A.indexOf(q.inputSource);if(Z===-1)return;const fe=T[Z];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||r),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<T.length;q++){const Z=A[q];Z!==null&&(A[q]=null,T[q].disconnect(Z))}B=null,X=null,m.reset();for(const q in f)delete f[q];e.setRenderTarget(S),p=null,u=null,h=null,i=null,x=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Fe=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Ys:Ks,Fe=y.stencil?$s:Ui);const Ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(Ke),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Fi(u.textureWidth,u.textureHeight,{format:_n,type:kn,depthTexture:new jd(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Fi(p.framebufferWidth,p.framebufferHeight,{format:_n,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let Z=0;Z<q.removed.length;Z++){const fe=q.removed[Z],Fe=A.indexOf(fe);Fe>=0&&(A[Fe]=null,T[Fe].disconnect(fe))}for(let Z=0;Z<q.added.length;Z++){const fe=q.added[Z];let Fe=A.indexOf(fe);if(Fe===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=A.length){A.push(fe),Fe=Ke;break}else if(A[Ke]===null){A[Ke]=fe,Fe=Ke;break}if(Fe===-1)break}const Se=T[Fe];Se&&Se.connect(fe)}}const H=new L,re=new L;function de(q,Z,fe){H.setFromMatrixPosition(Z.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const Fe=H.distanceTo(re),Se=Z.projectionMatrix.elements,Ke=fe.projectionMatrix.elements,kt=Se[14]/(Se[10]-1),C=Se[14]/(Se[10]+1),pt=(Se[9]+1)/Se[5],ze=(Se[9]-1)/Se[5],Ie=(Se[8]-1)/Se[0],ge=(Ke[8]+1)/Ke[0],mt=kt*Ie,be=kt*ge,Ge=Fe/(-Ie+ge),Dt=Ge*-Ie;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(Ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Mt=kt+Ge,E=C+Ge,_=mt-Dt,N=be+(Fe-Dt),V=pt*C/E*Mt,K=ze*C/E*Mt;q.projectionMatrix.makePerspective(_,N,V,K,Mt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function we(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),O.near=M.near=w.near=Z,O.far=M.far=w.far=fe,(B!==O.near||X!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,X=O.far),O.layers.mask=q.layers.mask|6,w.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Fe=q.parent,Se=O.cameras;we(O,Fe);for(let Ke=0;Ke<Se.length;Ke++)we(Se[Ke],Fe);Se.length===2?de(O,w,M):O.projectionMatrix.copy(w.projectionMatrix),Xe(q,O,Fe)};function Xe(q,Z,fe){fe===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return f[q]};let lt=null;function ft(q,Z){if(d=Z.getViewerPose(c||r),g=Z,d!==null){const fe=d.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Fe=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let C=0;C<fe.length;C++){const pt=fe[C];let ze=null;if(p!==null)ze=p.getViewport(pt);else{const ge=h.getViewSubImage(u,pt);ze=ge.viewport,C===0&&(e.setRenderTargetTextures(x,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(x))}let Ie=P[C];Ie===void 0&&(Ie=new Gt,Ie.layers.enable(C),Ie.viewport=new Qe,P[C]=Ie),Ie.matrix.fromArray(pt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(pt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ze.x,ze.y,ze.width,ze.height),C===0&&(O.matrix.copy(Ie.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(Ie)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const C=h.getDepthInformation(fe[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<fe.length;C++){const pt=fe[C].camera;if(pt){let ze=f[pt];ze||(ze=new Xd,f[pt]=ze);const Ie=h.getCameraImage(pt);ze.sourceTexture=Ie}}}}for(let fe=0;fe<T.length;fe++){const Fe=A[fe],Se=T[fe];Fe!==null&&Se!==void 0&&Se.update(Fe,Z,c||r)}lt&&lt(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const et=new Jd;et.setAnimationLoop(ft),this.setAnimationLoop=function(q){lt=q},this.dispose=function(){}}}const Ti=new vn,D_=new Oe;function I_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),h(m,f)):f.isMeshPhongMaterial?(a(m,f),d(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),b(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,Ti.copy(x),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ti)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function U_(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function c(y,S){let x=i[y.id];x===void 0&&(g(y),x=d(y),i[y.id]=x,y.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(y,T);const A=e.render.frame;a[y.id]!==A&&(u(y),a[y.id]=A)}function d(y){const S=h();y.__bindingPointIndex=S;const x=s.createBuffer(),T=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function h(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const S=i[y.id],x=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,R=x.length;A<R;A++){const D=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,M=D.length;w<M;w++){const P=D[w];if(p(P,A,w,T)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let W=0;W<B.length;W++){const j=B[W],Y=b(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,O+X,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,S,x,T){const A=y.value,R=S+"_"+x;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const D=T[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return T[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(y){const S=y.uniforms;let x=0;const T=16;for(let R=0,D=S.length;R<D;R++){const w=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,P=w.length;M<P;M++){const O=w[M],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,W=B.length;X<W;X++){const j=B[X],Y=b(j),H=x%T,re=H%Y.boundary,de=H+re;x+=re,de!==0&&T-de<Y.storage&&(x+=T-de),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Y.storage}}}const A=x%T;return A>0&&(x+=T-A),y.__size=x,y.__cache={},this}function b(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=r.indexOf(S.__bindingPointIndex);r.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete a[S.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}class Kc{constructor(e={}){const{canvas:t=Nf(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,f=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=Ct;let A=0,R=0,D=null,w=-1,M=null;const P=new Qe,O=new Qe;let B=null;const X=new Ce(0);let W=0,j=t.width,Y=t.height,H=1,re=null,de=null;const we=new Qe(0,0,j,Y),Xe=new Qe(0,0,j,Y);let lt=!1;const ft=new dl;let et=!1,q=!1;const Z=new Oe,fe=new L,Fe=new Qe,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function kt(){return D===null?H:1}let C=n;function pt(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const U="webgl2";if(C=pt(U,v),C===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ze,Ie,ge,mt,be,Ge,Dt,Mt,E,_,N,V,K,G,ye,ne,_e,xe,ee,ce,De,ve,oe,Be;function I(){ze=new j0(C),ze.init(),ve=new A_(C,ze),Ie=new k0(C,ze,e,ve),ge=new E_(C,ze),Ie.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),mt=new $0(C),be=new u_,Ge=new T_(C,ze,ge,be,Ie,ve,mt),Dt=new B0(x),Mt=new W0(x),E=new em(C),oe=new N0(C,E),_=new X0(C,E,mt,oe),N=new Y0(C,_,E,mt),ee=new K0(C,Ie,Ge),ne=new z0(be),V=new h_(x,Dt,Mt,ze,Ie,oe,ne),K=new I_(x,be),G=new p_,ye=new v_(ze),xe=new F0(x,Dt,Mt,ge,N,p,l),_e=new S_(x,N,Ie),Be=new U_(C,mt,Ie,ge),ce=new O0(C,ze,mt),De=new q0(C,ze,mt),mt.programs=V.programs,x.capabilities=Ie,x.extensions=ze,x.properties=be,x.renderLists=G,x.shadowMap=_e,x.state=ge,x.info=mt}I();const te=new L_(x,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=ze.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ze.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(j,Y,!1))},this.getSize=function(v){return v.set(j,Y)},this.setSize=function(v,U,k=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=v,Y=U,t.width=Math.floor(v*H),t.height=Math.floor(U*H),k===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(j*H,Y*H).floor()},this.setDrawingBufferSize=function(v,U,k){j=v,Y=U,H=k,t.width=Math.floor(v*k),t.height=Math.floor(U*k),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,U,k,z){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,U,k,z),ge.viewport(P.copy(we).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Xe)},this.setScissor=function(v,U,k,z){v.isVector4?Xe.set(v.x,v.y,v.z,v.w):Xe.set(v,U,k,z),ge.scissor(O.copy(Xe).multiplyScalar(H).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(v){ge.setScissorTest(lt=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,k=!0){let z=0;if(v){let F=!1;if(D!==null){const Q=D.texture.format;F=Q===nl||Q===tl||Q===el}if(F){const Q=D.texture.type,le=Q===kn||Q===Ui||Q===qs||Q===$s||Q===Zo||Q===Jo,pe=xe.getClearColor(),he=xe.getClearAlpha(),Pe=pe.r,Ue=pe.g,Ee=pe.b;le?(g[0]=Pe,g[1]=Ue,g[2]=Ee,g[3]=he,C.clearBufferuiv(C.COLOR,0,g)):(b[0]=Pe,b[1]=Ue,b[2]=Ee,b[3]=he,C.clearBufferiv(C.COLOR,0,b))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT),k&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),xe.dispose(),G.dispose(),ye.dispose(),be.dispose(),Dt.dispose(),Mt.dispose(),N.dispose(),oe.dispose(),Be.dispose(),V.dispose(),te.dispose(),te.removeEventListener("sessionstart",Dn),te.removeEventListener("sessionend",Ml),xi.stop()};function se(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const v=mt.autoReset,U=_e.enabled,k=_e.autoUpdate,z=_e.needsUpdate,F=_e.type;I(),mt.autoReset=v,_e.enabled=U,_e.autoUpdate=k,_e.needsUpdate=z,_e.type=F}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $(v){const U=v.target;U.removeEventListener("dispose",$),me(U)}function me(v){ke(v),be.remove(v)}function ke(v){const U=be.get(v).programs;U!==void 0&&(U.forEach(function(k){V.releaseProgram(k)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,k,z,F,Q){U===null&&(U=Se);const le=F.isMesh&&F.matrixWorld.determinant()<0,pe=_h(v,U,k,z,F);ge.setMaterial(z,le);let he=k.index,Pe=1;if(z.wireframe===!0){if(he=_.getWireframeAttribute(k),he===void 0)return;Pe=2}const Ue=k.drawRange,Ee=k.attributes.position;let $e=Ue.start*Pe,st=(Ue.start+Ue.count)*Pe;Q!==null&&($e=Math.max($e,Q.start*Pe),st=Math.min(st,(Q.start+Q.count)*Pe)),he!==null?($e=Math.max($e,0),st=Math.min(st,he.count)):Ee!=null&&($e=Math.max($e,0),st=Math.min(st,Ee.count));const xt=st-$e;if(xt<0||xt===1/0)return;oe.setup(F,z,pe,k,he);let ut,ot=ce;if(he!==null&&(ut=E.get(he),ot=De,ot.setIndex(ut)),F.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*kt()),ot.setMode(C.LINES)):ot.setMode(C.TRIANGLES);else if(F.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*kt()),F.isLineSegments?ot.setMode(C.LINES):F.isLineLoop?ot.setMode(C.LINE_LOOP):ot.setMode(C.LINE_STRIP)}else F.isPoints?ot.setMode(C.POINTS):F.isSprite&&ot.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ea("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,bt=F._multiDrawCounts,Ze=F._multiDrawCount,nn=he?E.get(he).bytesPerElement:1,Bi=be.get(z).currentProgram.getUniforms();for(let sn=0;sn<Ze;sn++)Bi.setValue(C,"_gl_DrawID",sn),ot.render(Ae[sn]/nn,bt[sn])}else if(F.isInstancedMesh)ot.renderInstances($e,xt,F.count);else if(k.isInstancedBufferGeometry){const Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bt=Math.min(k.instanceCount,Ae);ot.renderInstances($e,xt,bt)}else ot.render($e,xt)};function ct(v,U,k){v.transparent===!0&&v.side===bn&&v.forceSinglePass===!1?(v.side=Kt,v.needsUpdate=!0,ra(v,U,k),v.side=ei,v.needsUpdate=!0,ra(v,U,k),v.side=bn):ra(v,U,k)}this.compile=function(v,U,k=null){k===null&&(k=v),f=ye.get(k),f.init(U),S.push(f),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),v!==k&&v.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const z=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const pe=Q[le];ct(pe,k,F),z.add(pe)}else ct(Q,k,F),z.add(Q)}),f=S.pop(),z},this.compileAsync=function(v,U,k=null){const z=this.compile(v,U,k);return new Promise(F=>{function Q(){if(z.forEach(function(le){be.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){F(v);return}setTimeout(Q,10)}ze.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let tt=null;function Bn(v){tt&&tt(v)}function Dn(){xi.stop()}function Ml(){xi.start()}const xi=new Jd;xi.setAnimationLoop(Bn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(v){tt=v,te.setAnimationLoop(v),v===null?xi.stop():xi.start()},te.addEventListener("sessionstart",Dn),te.addEventListener("sessionend",Ml),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,U,D),f=ye.get(v,S.length),f.init(U),S.push(f),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ft.setFromProjectionMatrix(Z,On,U.reversedDepth),q=this.localClippingEnabled,et=ne.init(this.clippingPlanes,q),m=G.get(v,y.length),m.init(),y.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&lr(Q,U,-1/0,x.sortObjects)}lr(v,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,de),Ke=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ke&&xe.addToRenderList(m,v),this.info.render.frame++,et===!0&&ne.beginShadows();const k=f.state.shadowsArray;_e.render(k,v,U),et===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(F.length>0)for(let le=0,pe=Q.length;le<pe;le++){const he=Q[le];wl(z,F,v,he)}Ke&&xe.render(v);for(let le=0,pe=Q.length;le<pe;le++){const he=Q[le];Sl(m,v,he,he.viewport)}}else F.length>0&&wl(z,F,v,U),Ke&&xe.render(v),Sl(m,v,U);D!==null&&R===0&&(Ge.updateMultisampleRenderTarget(D),Ge.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(x,v,U),oe.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],et===!0&&ne.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function lr(v,U,k,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ft.intersectsSprite(v)){z&&Fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const le=N.update(v),pe=v.material;pe.visible&&m.push(v,le,pe,k,Fe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ft.intersectsObject(v))){const le=N.update(v),pe=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fe.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Fe.copy(le.boundingSphere.center)),Fe.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(pe)){const he=le.groups;for(let Pe=0,Ue=he.length;Pe<Ue;Pe++){const Ee=he[Pe],$e=pe[Ee.materialIndex];$e&&$e.visible&&m.push(v,le,$e,k,Fe.z,Ee)}}else pe.visible&&m.push(v,le,pe,k,Fe.z,null)}}const Q=v.children;for(let le=0,pe=Q.length;le<pe;le++)lr(Q[le],U,k,z)}function Sl(v,U,k,z){const F=v.opaque,Q=v.transmissive,le=v.transparent;f.setupLightsView(k),et===!0&&ne.setGlobalState(x.clippingPlanes,k),z&&ge.viewport(P.copy(z)),F.length>0&&aa(F,U,k),Q.length>0&&aa(Q,U,k),le.length>0&&aa(le,U,k),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function wl(v,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Fi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?na:kn,minFilter:Kn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=f.state.transmissionRenderTarget[z.id],le=z.viewport||P;Q.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);const pe=x.getRenderTarget(),he=x.getActiveCubeFace(),Pe=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(X),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&xe.render(k);const Ue=x.toneMapping;x.toneMapping=mi;const Ee=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),et===!0&&ne.setGlobalState(x.clippingPlanes,z),aa(v,k,z),Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q),ze.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let st=0,xt=U.length;st<xt;st++){const ut=U[st],ot=ut.object,Ae=ut.geometry,bt=ut.material,Ze=ut.group;if(bt.side===bn&&ot.layers.test(z.layers)){const nn=bt.side;bt.side=Kt,bt.needsUpdate=!0,El(ot,k,z,Ae,bt,Ze),bt.side=nn,bt.needsUpdate=!0,$e=!0}}$e===!0&&(Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q))}x.setRenderTarget(pe,he,Pe),x.setClearColor(X,W),Ee!==void 0&&(z.viewport=Ee),x.toneMapping=Ue}function aa(v,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,Q=v.length;F<Q;F++){const le=v[F],pe=le.object,he=le.geometry,Pe=le.group;let Ue=le.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),pe.layers.test(k.layers)&&El(pe,U,k,he,Ue,Pe)}}function El(v,U,k,z,F,Q){v.onBeforeRender(x,U,k,z,F,Q),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(x,U,k,z,v,Q),F.transparent===!0&&F.side===bn&&F.forceSinglePass===!1?(F.side=Kt,F.needsUpdate=!0,x.renderBufferDirect(k,U,z,F,v,Q),F.side=ei,F.needsUpdate=!0,x.renderBufferDirect(k,U,z,F,v,Q),F.side=bn):x.renderBufferDirect(k,U,z,F,v,Q),v.onAfterRender(x,U,k,z,F,Q)}function ra(v,U,k){U.isScene!==!0&&(U=Se);const z=be.get(v),F=f.state.lights,Q=f.state.shadowsArray,le=F.state.version,pe=V.getParameters(v,F.state,Q,U,k),he=V.getProgramCacheKey(pe);let Pe=z.programs;z.environment=v.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(v.isMeshStandardMaterial?Mt:Dt).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",$),Pe=new Map,z.programs=Pe);let Ue=Pe.get(he);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===le)return Al(v,pe),Ue}else pe.uniforms=V.getUniforms(v),v.onBeforeCompile(pe,x),Ue=V.acquireProgram(pe,he),Pe.set(he,Ue),z.uniforms=pe.uniforms;const Ee=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Al(v,pe),z.needsLights=vh(v),z.lightsStateVersion=le,z.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function Tl(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Wa.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Al(v,U){const k=be.get(v);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function _h(v,U,k,z,F){U.isScene!==!0&&(U=Se),Ge.resetTextureUnits();const Q=U.fog,le=z.isMeshStandardMaterial?U.environment:null,pe=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Jt,he=(z.isMeshStandardMaterial?Mt:Dt).get(z.envMap||le),Pe=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let xt=mi;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xt=x.toneMapping);const ut=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ot=ut!==void 0?ut.length:0,Ae=be.get(z),bt=f.state.lights;if(et===!0&&(q===!0||v!==M)){const jt=v===M&&z.id===w;ne.setState(z,v,jt)}let Ze=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==bt.state.version||Ae.outputColorSpace!==pe||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==he||z.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ne.numPlanes||Ae.numIntersection!==ne.numIntersection)||Ae.vertexAlphas!==Pe||Ae.vertexTangents!==Ue||Ae.morphTargets!==Ee||Ae.morphNormals!==$e||Ae.morphColors!==st||Ae.toneMapping!==xt||Ae.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Ae.__version=z.version);let nn=Ae.currentProgram;Ze===!0&&(nn=ra(z,U,F));let Bi=!1,sn=!1,Rs=!1;const _t=nn.getUniforms(),hn=Ae.uniforms;if(ge.useProgram(nn.program)&&(Bi=!0,sn=!0,Rs=!0),z.id!==w&&(w=z.id,sn=!0),Bi||M!==v){ge.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),_t.setValue(C,"projectionMatrix",v.projectionMatrix),_t.setValue(C,"viewMatrix",v.matrixWorldInverse);const Qt=_t.map.cameraPosition;Qt!==void 0&&Qt.setValue(C,fe.setFromMatrixPosition(v.matrixWorld)),Ie.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,sn=!0,Rs=!0)}if(F.isSkinnedMesh){_t.setOptional(C,F,"bindMatrix"),_t.setOptional(C,F,"bindMatrixInverse");const jt=F.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),_t.setValue(C,"boneTexture",jt.boneTexture,Ge))}F.isBatchedMesh&&(_t.setOptional(C,F,"batchingTexture"),_t.setValue(C,"batchingTexture",F._matricesTexture,Ge),_t.setOptional(C,F,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",F._indirectTexture,Ge),_t.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",F._colorsTexture,Ge));const un=k.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&ee.update(F,k,nn),(sn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,_t.setValue(C,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hn.envMap.value=he,hn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),sn&&(_t.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&xh(hn,Rs),Q&&z.fog===!0&&K.refreshFogUniforms(hn,Q),K.refreshMaterialUniforms(hn,z,H,Y,f.state.transmissionRenderTarget[v.id]),Wa.upload(C,Tl(Ae),hn,Ge)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Wa.upload(C,Tl(Ae),hn,Ge),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(C,"center",F.center),_t.setValue(C,"modelViewMatrix",F.modelViewMatrix),_t.setValue(C,"normalMatrix",F.normalMatrix),_t.setValue(C,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const jt=z.uniformsGroups;for(let Qt=0,cr=jt.length;Qt<cr;Qt++){const vi=jt[Qt];Be.update(vi,nn),Be.bind(vi,nn)}}return nn}function xh(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function vh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,U,k){const z=be.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),be.get(v.texture).__webglTexture=U,be.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const k=be.get(v);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const yh=C.createFramebuffer();this.setRenderTarget=function(v,U=0,k=0){D=v,A=U,R=k;let z=!0,F=null,Q=!1,le=!1;if(v){const he=be.get(v);if(he.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(he.__webglFramebuffer===void 0)Ge.setupRenderTarget(v);else if(he.__hasExternalTextures)Ge.rebindTextures(v,be.get(v.texture).__webglTexture,be.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ee=v.depthTexture;if(he.__boundDepthTexture!==Ee){if(Ee!==null&&be.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(v)}}const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const Ue=be.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?F=Ue[U][k]:F=Ue[U],Q=!0):v.samples>0&&Ge.useMultisampledRTT(v)===!1?F=be.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[k]:F=Ue,P.copy(v.viewport),O.copy(v.scissor),B=v.scissorTest}else P.copy(we).multiplyScalar(H).floor(),O.copy(Xe).multiplyScalar(H).floor(),B=lt;if(k!==0&&(F=yh),ge.bindFramebuffer(C.FRAMEBUFFER,F)&&z&&ge.drawBuffers(v,F),ge.viewport(P),ge.scissor(O),ge.setScissorTest(B),Q){const he=be.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,k)}else if(le){const he=U;for(let Pe=0;Pe<v.textures.length;Pe++){const Ue=be.get(v.textures[Pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,k,he)}}else if(v!==null&&k!==0){const he=be.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,he.__webglTexture,k)}w=-1},this.readRenderTargetPixels=function(v,U,k,z,F,Q,le,pe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he){ge.bindFramebuffer(C.FRAMEBUFFER,he);try{const Pe=v.textures[pe],Ue=Pe.format,Ee=Pe.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-z&&k>=0&&k<=v.height-F&&(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(U,k,z,F,ve.convert(Ue),ve.convert(Ee),Q))}finally{const Pe=D!==null?be.get(D).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,U,k,z,F,Q,le,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he)if(U>=0&&U<=v.width-z&&k>=0&&k<=v.height-F){ge.bindFramebuffer(C.FRAMEBUFFER,he);const Pe=v.textures[pe],Ue=Pe.format,Ee=Pe.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(U,k,z,F,ve.convert(Ue),ve.convert(Ee),0);const st=D!==null?be.get(D).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,st);const xt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Of(C,xt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer($e),C.deleteSync(xt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,k=0){const z=Math.pow(2,-k),F=Math.floor(v.image.width*z),Q=Math.floor(v.image.height*z),le=U!==null?U.x:0,pe=U!==null?U.y:0;Ge.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,le,pe,F,Q),ge.unbindTexture()};const Mh=C.createFramebuffer(),Sh=C.createFramebuffer();this.copyTextureToTexture=function(v,U,k=null,z=null,F=0,Q=null){Q===null&&(F!==0?(ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let le,pe,he,Pe,Ue,Ee,$e,st,xt;const ut=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(k!==null)le=k.max.x-k.min.x,pe=k.max.y-k.min.y,he=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ue=k.min.y,Ee=k.isBox3?k.min.z:0;else{const un=Math.pow(2,-F);le=Math.floor(ut.width*un),pe=Math.floor(ut.height*un),v.isDataArrayTexture?he=ut.depth:v.isData3DTexture?he=Math.floor(ut.depth*un):he=1,Pe=0,Ue=0,Ee=0}z!==null?($e=z.x,st=z.y,xt=z.z):($e=0,st=0,xt=0);const ot=ve.convert(U.format),Ae=ve.convert(U.type);let bt;U.isData3DTexture?(Ge.setTexture3D(U,0),bt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ge.setTexture2DArray(U,0),bt=C.TEXTURE_2D_ARRAY):(Ge.setTexture2D(U,0),bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=C.getParameter(C.UNPACK_ROW_LENGTH),nn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Bi=C.getParameter(C.UNPACK_SKIP_PIXELS),sn=C.getParameter(C.UNPACK_SKIP_ROWS),Rs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee);const _t=v.isDataArrayTexture||v.isData3DTexture,hn=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const un=be.get(v),jt=be.get(U),Qt=be.get(un.__renderTarget),cr=be.get(jt.__renderTarget);ge.bindFramebuffer(C.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let vi=0;vi<he;vi++)_t&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(v).__webglTexture,F,Ee+vi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(U).__webglTexture,Q,xt+vi)),C.blitFramebuffer(Pe,Ue,le,pe,$e,st,le,pe,C.DEPTH_BUFFER_BIT,C.NEAREST);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||be.has(v)){const un=be.get(v),jt=be.get(U);ge.bindFramebuffer(C.READ_FRAMEBUFFER,Mh),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,Sh);for(let Qt=0;Qt<he;Qt++)_t?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,un.__webglTexture,F,Ee+Qt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,un.__webglTexture,F),hn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,jt.__webglTexture,Q,xt+Qt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,jt.__webglTexture,Q),F!==0?C.blitFramebuffer(Pe,Ue,le,pe,$e,st,le,pe,C.COLOR_BUFFER_BIT,C.NEAREST):hn?C.copyTexSubImage3D(bt,Q,$e,st,xt+Qt,Pe,Ue,le,pe):C.copyTexSubImage2D(bt,Q,$e,st,Pe,Ue,le,pe);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else hn?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(bt,Q,$e,st,xt,le,pe,he,ot,Ae,ut.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(bt,Q,$e,st,xt,le,pe,he,ot,ut.data):C.texSubImage3D(bt,Q,$e,st,xt,le,pe,he,ot,Ae,ut):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,$e,st,le,pe,ot,Ae,ut.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,$e,st,ut.width,ut.height,ot,ut.data):C.texSubImage2D(C.TEXTURE_2D,Q,$e,st,le,pe,ot,Ae,ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bi),C.pixelStorei(C.UNPACK_SKIP_ROWS,sn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rs),Q===0&&U.generateMipmaps&&C.generateMipmap(bt),ge.unbindTexture()},this.initRenderTarget=function(v){be.get(v).__webglFramebuffer===void 0&&Ge.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ge.setTextureCube(v,0):v.isData3DTexture?Ge.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ge.setTexture2DArray(v,0):Ge.setTexture2D(v,0),ge.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Yc={type:"change"},gl={type:"start"},ih={type:"end"},Ua=new Ms,Zc=new $n,F_=Math.cos(70*Dd.DEG2RAD),At=new L,en=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jr=1e-6;class Jc extends Jp{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Pn,this._lastTargetPosition=new L,this._quat=new Pn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wc,this._sphericalDelta=new wc,this._scale=1,this._panOffset=new L,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new L,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O_.bind(this),this._onPointerDown=N_.bind(this),this._onPointerUp=k_.bind(this),this._onContextMenu=j_.bind(this),this._onMouseWheel=H_.bind(this),this._onKeyDown=G_.bind(this),this._onTouchStart=V_.bind(this),this._onTouchMove=W_.bind(this),this._onMouseDown=z_.bind(this),this._onMouseMove=B_.bind(this),this._interceptControlDown=X_.bind(this),this._interceptControlUp=q_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yc),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),i<-Math.PI?i+=en:i>Math.PI&&(i-=en),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=At.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ua.origin.copy(this.object.position),Ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ua.direction))<F_?this.object.lookAt(this.target):(Zc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ua.intersectPlane(Zc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>jr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jr||this._lastTargetPosition.distanceToSquared(this.target)>jr?(this.dispatchEvent(Yc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;At.copy(i).sub(this.target);let a=At.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(n*n+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function N_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function O_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function k_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ih),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function z_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=rt.DOLLY;break;case fi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=rt.ROTATE}break;case fi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(gl)}function B_(s){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function H_(s){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(s.preventDefault(),this.dispatchEvent(gl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ih))}function G_(s){this.enabled!==!1&&this._handleKeyDown(s)}function V_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=rt.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=rt.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(gl)}function W_(s){switch(this._trackPointer(s),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=rt.NONE}}function j_(s){this.enabled!==!1&&s.preventDefault()}function X_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qc(s,e){if(e===cf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===No||e===Pd){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===No)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class $_ extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Q_(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new fx(t)})}load(e,t,n,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=js.extractUrlBase(e);r=js.resolveURL(c,this.path)}else r=js.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new Kd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,r,function(d){t(d),a.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const r={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sh){try{r[qe.KHR_BINARY_GLTF]=new px(e)}catch(h){i&&i(h);return}a=JSON.parse(r[qe.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ax(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const h=a.extensionsUsed[d],u=a.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:r[h]=new Z_;break;case qe.KHR_DRACO_MESH_COMPRESSION:r[h]=new mx(a,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:r[h]=new gx;break;case qe.KHR_MESH_QUANTIZATION:r[h]=new bx;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function K_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Y_{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let c;const d=new Ce(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Jt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Va(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zd(d),c.distance=h;break;case"spot":c=new Np(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Un(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Z_{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Li}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Jt),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,Ct))}return Promise.all(i)}}class J_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(o,o)}return Promise.all(a)}}class ex{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class nx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Jt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ct)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class ix{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class sx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(o[0],o[1],o[2],Jt),Promise.all(a)}}class ax{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class rx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(o[0],o[1],o[2],Jt),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ct)),Promise.all(a)}}class ox{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class lx{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class cx{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class dx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}}class hx{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}}class ux{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(d*h);return r.decodeGltfBuffer(new Uint8Array(p),d,h,u,i.mode,i.filter),p})})}else return null}}class fx{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const g of h){const b=new Oe,m=new L,f=new Pn,y=new L(1,1,1),S=new cl(g.geometry,g.material,u);for(let x=0;x<u;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,b.compose(m,f,y));for(const x in l)if(x==="_COLOR_0"){const T=l[x];S.instanceColor=new zo(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const sh="glTF",Os=12,ed={JSON:1313821514,BIN:5130562};class px{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Os),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Os,a=new DataView(e,Os);let r=0;for(;r<i;){const o=a.getUint32(r,!0);r+=4;const l=a.getUint32(r,!0);if(r+=4,l===ed.JSON){const c=new Uint8Array(e,Os+r,o);this.content=n.decode(c)}else if(l===ed.BIN){const c=Os+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const d in r){const h=Wo[d]||d.toLowerCase();o[h]=r[d]}for(const d in e.attributes){const h=Wo[d]||d.toLowerCase();if(r[d]!==void 0){const u=n.accessors[e.attributes[d]],p=hs[u.componentType];c[h]=p.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",a).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(p){for(const g in p.attributes){const b=p.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}h(p)},o,c,Jt,u)})})}}class gx{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bx{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class ah extends ia{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=i-t,h=(n-t)/d,u=h*h,p=u*h,g=e*c,b=g-c,m=-2*p+3*u,f=p-u,y=1-m,S=f-u+h;for(let x=0;x!==o;x++){const T=r[b+x+o],A=r[b+x+l]*d,R=r[g+x+o],D=r[g+x]*d;a[x]=y*T+S*A+m*R+f*D}return a}}const _x=new Pn;class xx extends ah{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return _x.fromArray(a).normalize().toArray(a),a}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},td={9728:Yt,9729:ln,9984:Md,9985:ka,9986:Bs,9987:Kn},nd={33071:di,33648:ja,10497:Ii},Xr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vx={CUBICSPLINE:void 0,LINEAR:Js,STEP:Zs},qr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ni({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),s.DefaultMaterial}function Ai(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mx(s,e,t){let n=!1,i=!1,a=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(s);const r=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;r.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(u)}if(a){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),a&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Sx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wx(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$r(t.attributes):e=s.indices+":"+$r(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$r(s.targets[n]);return e}function $r(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function jo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ex(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Tx=new Oe;class Ax{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new K_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,a=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||a&&r<98?this.textureLoader=new Yd(this.options.manager):this.textureLoader=new zp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ai(a,o,i),Un(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,d]of r.children.entries())a(d,o.children[c])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){n.load(js.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Xr[i.type],o=hs[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new Zt(c,r,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],l=Xr[i.type],c=hs[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(p&&p!==h){const f=Math.floor(u/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(y);S||(b=new c(o,f*p,i.count*p/d),S=new lp(b,p/d),t.cache.add(y,S)),m=new ol(S,l,u%p/d,g)}else o===null?b=new c(i.count*l):b=new c(o,u,i.count*l),m=new Zt(b,l,g);if(i.sparse!==void 0){const f=Xr.SCALAR,y=hs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new y(r[1],S,i.sparse.count*f),A=new c(r[2],x,i.sparse.count*l);o!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=T.length;R<D;R++){const w=T[R];if(m.setX(w,A[R*l]),l>=2&&m.setY(w,A[R*l+1]),l>=3&&m.setZ(w,A[R*l+2]),l>=4&&m.setW(w,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const i=this,a=this.json,r=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=r.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(a.samplers||{})[r.sampler]||{};return d.magFilter=td[u.magFilter]||ln,d.minFilter=td[u.minFilter]||Kn,d.wrapS=nd[u.wrapS]||Ii,d.wrapT=nd[u.wrapT]||Ii,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Yt&&d.minFilter!==ln,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Ft(b);m.needsUpdate=!0,u(m)}),t.load(js.resolveURL(h,a.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Un(h,r),h.userData.mimeType=r.mimeType||Ex(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(r);r=a.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wd,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bs,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||a||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),a&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ni}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let r;const o={},l=a.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=i[qe.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,a,t))}else{const h=a.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Jt),o.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ct)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=bn);const d=a.alphaMode||qr.OPAQUE;if(d===qr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===qr.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Li&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Re(1,1),a.normalTexture.scale!==void 0)){const h=a.normalTexture.scale;o.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&r!==Li&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Li){const h=a.emissiveFactor;o.emissive=new Ce().setRGB(h[0],h[1],h[2],Jt)}return a.emissiveTexture!==void 0&&r!==Li&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Ct)),Promise.all(c).then(function(){const h=new r(o);return a.name&&(h.name=a.name),Un(h,a),t.associations.set(h,{materials:e}),a.extensions&&Ai(i,h,a),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return id(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],d=wx(c),h=i[d];if(h)r.push(h.promise);else{let u;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?u=a(c):u=id(new Wt,c,t),i[d]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const d=r[l].material===void 0?yx(this.cache):this.getDependency("material",r[l].material);o.push(d)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let p=0,g=d.length;p<g;p++){const b=d[p],m=r[p];let f;const y=c[p];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)f=a.isSkinnedMesh===!0?new dp(b,y):new gt(b,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?f.geometry=Qc(f.geometry,Pd):m.mode===mn.TRIANGLE_FAN&&(f.geometry=Qc(f.geometry,No));else if(m.mode===mn.LINES)f=new Vd(b,y);else if(m.mode===mn.LINE_STRIP)f=new ds(b,y);else if(m.mode===mn.LINE_LOOP)f=new gp(b,y);else if(m.mode===mn.POINTS)f=new bp(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Sx(f,a),f.name=t.createUniqueName(a.name||"mesh_"+e),Un(f,a),m.extensions&&Ai(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return a.extensions&&Ai(i,h[0],a),h[0];const u=new wt;a.extensions&&Ai(i,u,a),t.associations.set(u,{meshes:e});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Dd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new rr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),r=i,o=[],l=[];for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h){o.push(h);const u=new Oe;a!==null&&u.fromArray(a.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ll(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const p=i.channels[h],g=i.samplers[p.sampler],b=p.target,m=b.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(g),d.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],p=h[1],g=h[2],b=h[3],m=h[4],f=[];for(let S=0,x=u.length;S<x;S++){const T=u[S],A=p[S],R=g[S],D=b[S],w=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const M=n._createAnimationTracks(T,A,R,D,w);if(M)for(let P=0;P<M.length;P++)f.push(M[P])}const y=new Rp(a,void 0,f);return Un(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=i.children||[];for(let c=0,d=o.length;c<d;c++)r.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,Tx)});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(c){return i._getNodeRef(i.cameraCache,a.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(a.isBone===!0?d=new Hd:c.length>1?d=new wt:c.length===1?d=c[0]:d=new ht,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(a.name&&(d.userData.name=a.name,d.name=r),Un(d,a),a.extensions&&Ai(n,d,a),a.matrix!==void 0){const h=new Oe;h.fromArray(a.matrix),d.applyMatrix4(h)}else a.translation!==void 0&&d.position.fromArray(a.translation),a.rotation!==void 0&&d.quaternion.fromArray(a.rotation),a.scale!==void 0&&d.scale.fromArray(a.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(a.mesh!==void 0&&i.meshCache.refs[a.mesh]>1){const h=i.associations.get(d);i.associations.set(d,{...h})}return i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new wt;n.name&&(a.name=i.createUniqueName(n.name)),Un(a,n),n.extensions&&Ai(t,a,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let d=0,h=l.length;d<h;d++)a.add(l[d]);const c=d=>{const h=new Map;for(const[u,p]of i.associations)(u instanceof Cn||u instanceof Ft)&&h.set(u,p);return d.traverse(u=>{const p=i.associations.get(u);p!=null&&h.set(u,p)}),h};return i.associations=c(a),a})}_createAnimationTracks(e,t,n,i,a){const r=[],o=e.name?e.name:e.uuid,l=[];oi[a.path]===oi.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(oi[a.path]){case oi.weights:c=_s;break;case oi.rotation:c=xs;break;case oi.translation:case oi.scale:c=vs;break;default:switch(n.itemSize){case 1:c=_s;break;case 2:case 3:default:c=vs;break}break}const d=i.interpolation!==void 0?vx[i.interpolation]:Js,h=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+oi[a.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jo(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof xs?xx:ah;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rx(s,e,t){const n=e.attributes,i=new cn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const d=jo(hs[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new L,l=new L;for(let c=0,d=a.length;c<d;c++){const h=a[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const b=jo(hs[u.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const r=new zn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=r}function id(s,e,t){const n=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(l){s.setAttribute(o,l)})}for(const r in n){const o=Wo[r]||r.toLowerCase();o in s.attributes||i.push(a(n[r],o))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(r)}return Ye.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Un(s,e),Rx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Mx(s,e.targets,t):s})}var Cx=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),a,r=WebAssembly.instantiate(i,{}).then(function(f){a=f.instance,a.exports.__wasm_call_ctors()});function o(f){for(var y=new Uint8Array(f.length),S=0;S<f.length;++S){var x=f.charCodeAt(S);y[S]=x>96?x-97:x>64?x-39:x+4}for(var T=0,S=0;S<f.length;++S)y[T++]=y[S]<60?n[y[S]]:(y[S]-60)*64+y[++S];return y.buffer.slice(0,T)}function l(f,y,S,x,T,A,R){var D=f.exports.sbrk,w=x+3&-4,M=D(w*T),P=D(A.length),O=new Uint8Array(f.exports.memory.buffer);O.set(A,P);var B=y(M,x,T,P,A.length);if(B==0&&R&&R(M,w,T),S.set(O.subarray(M,M+x*T)),D(M-D(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],u=0;function p(f){var y={object:new Worker(f),pending:0,requests:{}};return y.object.onmessage=function(S){var x=S.data;y.pending-=x.count,y.requests[x.id][x.action](x.value),delete y.requests[x.id]},y}function g(f){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),S=new Blob([y],{type:"text/javascript"}),x=URL.createObjectURL(S),T=h.length;T<f;++T)h[T]=p(x);for(var T=f;T<h.length;++T)h[T].object.postMessage({});h.length=f,URL.revokeObjectURL(x)}function b(f,y,S,x,T){for(var A=h[0],R=1;R<h.length;++R)h[R].pending<A.pending&&(A=h[R]);return new Promise(function(D,w){var M=new Uint8Array(S),P=++u;A.pending+=f,A.requests[P]={resolve:D,reject:w},A.object.postMessage({id:P,count:f,size:y,source:M,mode:x,filter:T},[M.buffer])})}function m(f){var y=f.data;if(!y.id)return self.close();self.ready.then(function(S){try{var x=new Uint8Array(y.count*y.size);l(S,S.exports[y.mode],x,y.count,y.size,y.source,S.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:x},[x.buffer])}catch(T){self.postMessage({id:y.id,count:y.count,action:"reject",value:T})}})}return{ready:r,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,y,S,x,T){l(a,a.exports.meshopt_decodeVertexBuffer,f,y,S,x,a.exports[c[T]])},decodeIndexBuffer:function(f,y,S,x){l(a,a.exports.meshopt_decodeIndexBuffer,f,y,S,x)},decodeIndexSequence:function(f,y,S,x){l(a,a.exports.meshopt_decodeIndexSequence,f,y,S,x)},decodeGltfBuffer:function(f,y,S,x,T,A){l(a,a.exports[d[T]],f,y,S,x,a.exports[c[A]])},decodeGltfBufferAsync:function(f,y,S,x,T){return h.length>0?b(f,y,S,d[x],c[T]):r.then(function(){var A=new Uint8Array(f*y);return l(a,a.exports[d[x]],A,f,y,S,a.exports[c[T]]),A})}}})();class Px extends ht{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Re(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const is=new L,sd=new Oe,ad=new Oe,rd=new L,od=new L;class Lx{constructor(e={}){const t=this;let n,i,a,r;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(g,b){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),sd.copy(b.matrixWorldInverse),ad.multiplyMatrices(b.projectionMatrix,sd),d(g,g,b),p(g)},this.setSize=function(g,b){n=g,i=b,a=n/2,r=i/2,l.style.width=g+"px",l.style.height=b+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let b=0,m=g.children.length;b<m;b++)c(g.children[b])}function d(g,b,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){is.setFromMatrixPosition(g.matrixWorld),is.applyMatrix4(ad);const f=is.z>=-1&&is.z<=1&&g.layers.test(m.layers)===!0,y=g.element;y.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(t,b,m),y.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(is.x*a+a)+"px,"+(-is.y*r+r)+"px)",y.parentNode!==l&&l.appendChild(y),g.onAfterRender(t,b,m));const S={distanceToCameraSquared:h(m,g)};o.objects.set(g,S)}for(let f=0,y=g.children.length;f<y;f++)d(g.children[f],b,m)}function h(g,b){return rd.setFromMatrixPosition(g.matrixWorld),od.setFromMatrixPosition(b.matrixWorld),rd.distanceToSquared(od)}function u(g){const b=[];return g.traverseVisible(function(m){m.isCSS2DObject&&b.push(m)}),b}function p(g){const b=u(g).sort(function(f,y){if(f.renderOrder!==y.renderOrder)return y.renderOrder-f.renderOrder;const S=o.objects.get(f).distanceToCameraSquared,x=o.objects.get(y).distanceToCameraSquared;return S-x}),m=b.length;for(let f=0,y=b.length;f<y;f++)b[f].element.style.zIndex=m-f}}}const ks=new L;function pn(s,e,t,n,i,a){const r=2*Math.PI*i/4,o=Math.max(a-2*i,0),l=Math.PI/4;ks.copy(e),ks[n]=0,ks.normalize();const c=.5*r/(r+o),d=1-ks.angleTo(s)/l;return Math.sign(ks[t])===1?d*c:o/(r+o)+c+c*(1-d)}class bl extends _i{constructor(e=1,t=1,n=1,i=2,a=.1){const r=i*2+1;if(a=Math.min(e/2,t/2,n/2,a),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:a},r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new L,c=new L,d=new L(e,t,n).divideScalar(2).subScalar(a),h=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,b=new L,m=.5/r;for(let f=0,y=0;f<h.length;f+=3,y+=2)switch(l.fromArray(h,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[f+0]=d.x*Math.sign(l.x)+c.x*a,h[f+1]=d.y*Math.sign(l.y)+c.y*a,h[f+2]=d.z*Math.sign(l.z)+c.z*a,u[f+0]=c.x,u[f+1]=c.y,u[f+2]=c.z,Math.floor(f/g)){case 0:b.set(1,0,0),p[y+0]=pn(b,c,"z","y",a,n),p[y+1]=1-pn(b,c,"y","z",a,t);break;case 1:b.set(-1,0,0),p[y+0]=1-pn(b,c,"z","y",a,n),p[y+1]=1-pn(b,c,"y","z",a,t);break;case 2:b.set(0,1,0),p[y+0]=1-pn(b,c,"x","z",a,e),p[y+1]=pn(b,c,"z","x",a,n);break;case 3:b.set(0,-1,0),p[y+0]=1-pn(b,c,"x","z",a,e),p[y+1]=1-pn(b,c,"z","x",a,n);break;case 4:b.set(0,0,1),p[y+0]=1-pn(b,c,"x","y",a,e),p[y+1]=1-pn(b,c,"y","x",a,t);break;case 5:b.set(0,0,-1),p[y+0]=pn(b,c,"x","y",a,e),p[y+1]=1-pn(b,c,"y","x",a,t);break}}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.segments,e.radius)}}class Dx extends ko{constructor(){super();const e=new _i;e.deleteAttribute("uv");const t=new Ni({side:Kt}),n=new Ni,i=new Zd(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const a=new gt(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new cl(e,n,6),o=new ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);const l=new gt(e,ss(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new gt(e,ss(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new gt(e,ss(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const h=new gt(e,ss(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const u=new gt(e,ss(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const p=new gt(e,ss(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ss(s){return new _p({color:0,emissive:16777215,emissiveIntensity:s})}const Di=(s="item")=>`${s}-${crypto.randomUUID().slice(0,10)}`,gn=s=>structuredClone(s),Et=(s,e,t)=>Math.min(t,Math.max(e,s)),In=(s,e=.1)=>e?Math.round(s/e)*e:s,As=()=>({id:"site",name:"Garden & lawn",x:-2,z:-5,w:26,d:19,color:"#73a45b"}),rh=[{name:"Chalk",color:"#e8e2d5"},{name:"Oat",color:"#c4b59c"},{name:"Camel",color:"#ac8059"},{name:"Cognac",color:"#8f513b"},{name:"Olive",color:"#6d785e"},{name:"Forest",color:"#344c40"},{name:"Ink",color:"#343c3d"},{name:"Terracotta",color:"#c46746"},{name:"Teal",color:"#327e79"},{name:"Plum",color:"#796078"},{name:"Ochre",color:"#c39543"},{name:"Walnut",color:"#684d37"}],Oi=[{id:"oak",name:"Natural oak",color:"#bb966c",texture:"wood.jpg",type:"Wood"},{id:"smoked",name:"Smoked oak",color:"#79634b",texture:"wood.jpg",type:"Wood"},{id:"walnut",name:"Warm walnut",color:"#7a5034",texture:"wood.jpg",type:"Wood"},{id:"marble",name:"Ivory marble",color:"#dfd8c8",texture:"stone.jpg",type:"Stone"},{id:"limestone",name:"Honed limestone",color:"#c9bdab",texture:"stone.jpg",type:"Stone"},{id:"concrete",name:"Soft concrete",color:"#b2b0a5",texture:null,type:"Stone"},{id:"ivory",name:"Ivory plaster",color:"#e5e0d4",texture:null,type:"Paint"},{id:"sage",name:"Sage plaster",color:"#a7b09a",texture:null,type:"Paint"},{id:"linen",name:"Natural linen",color:"#c9bea9",texture:null,type:"Textile"}],ys=[{id:"sofa",name:"Cloud sofa",subtitle:"Terracotta bouclé · walnut base",category:"Seating",w:3.9,d:1.3,h:1.2,color:"#c46746",model:"sofa",material:"Bouclé"},{id:"armchair",name:"Frame lounge chair",subtitle:"Soft leather · solid oak",category:"Seating",w:.84,d:1.02,h:1.05,color:"#684d37",model:"armchair",material:"Leather"},{id:"daybed",name:"Atelier daybed",subtitle:"Olive upholstery · low profile",category:"Seating",w:2.8,d:1.15,h:1.25,color:"#6d785e",model:"daybed",material:"Linen"},{id:"dining-chair",name:"Forma dining chair",subtitle:"Teal linen · bronze legs",category:"Seating",w:.64,d:.64,h:1.07,color:"#327e79",model:"dining-chair",material:"Linen"},{id:"stool",name:"Linea counter stool",subtitle:"Olive leather · bronze",category:"Seating",w:.58,d:.58,h:1.05,color:"#6d785e",model:"stool",material:"Leather"},{id:"dining-table",name:"Monolith dining table",subtitle:"Honed stone · seats eight",category:"Tables",w:1.4,d:2.9,h:.89,color:"#e8e2d5",model:"dining-table",material:"Stone"},{id:"coffee-table",name:"Pebble coffee table",subtitle:"Solid stone · circular",category:"Tables",w:1.72,d:1.72,h:.53,color:"#e8e2d5",model:"coffee-table",material:"Stone"},{id:"side-table",name:"Orbit side table",subtitle:"Warm walnut · sculptural",category:"Tables",w:1.06,d:1.06,h:.39,color:"#684d37",model:"side-table",material:"Wood"},{id:"desk",name:"Atelier writing desk",subtitle:"Walnut · leather writing pad",category:"Tables",w:2.8,d:.75,h:.85,color:"#684d37",model:"desk",material:"Wood"},{id:"bed",name:"Haven king bed",subtitle:"Ochre linen · upholstered headboard",category:"Bedroom",w:2.55,d:2.42,h:1.73,color:"#c39543",model:"bed",material:"Linen"},{id:"nightstand",name:"Column bedside table",subtitle:"Honed marble · cylindrical",category:"Bedroom",w:.6,d:.6,h:.76,color:"#e8e2d5",model:"nightstand",material:"Stone"},{id:"island",name:"Waterfall kitchen island",subtitle:"Continuous stone · oak drawers",category:"Kitchen",w:1.6,d:3.8,h:1.06,color:"#e8e2d5",model:"island",material:"Stone"},{id:"cabinet",name:"Full-height cabinet",subtitle:"Oak doors · bronze pulls",category:"Kitchen",w:.87,d:.66,h:2.73,color:"#ac8059",model:"cabinet",material:"Wood"},{id:"credenza",name:"Gallery sideboard",subtitle:"Satin walnut · fitted storage",category:"Storage",w:2.7,d:.55,h:.88,color:"#684d37",model:"credenza",material:"Wood"},{id:"shelf",name:"Open library",subtitle:"Walnut shelves · art volumes",category:"Storage",w:2.6,d:.35,h:2.4,color:"#684d37",material:"Wood"},{id:"plant",name:"Ficus in terracotta",subtitle:"Detailed foliage · earthen pot",category:"Decor",w:.85,d:.85,h:1.9,color:"#ac8059",model:"plant",material:"Ceramic"},{id:"vase",name:"Hand-thrown vessel",subtitle:"Textured stoneware",category:"Decor",w:.3,d:.3,h:.42,color:"#c4b59c",model:"vase",material:"Ceramic"},{id:"rug",name:"Woven wool rug",subtitle:"Terracotta wool · natural pile",category:"Decor",w:4.6,d:3.4,h:.035,color:"#b6795d",material:"Wool"},{id:"art",name:"Abstract canvas",subtitle:"Original composition · bronze",category:"Decor",w:1.65,d:.08,h:1.25,color:"#ac8059",material:"Canvas"},{id:"pendant",name:"Opal pendant",subtitle:"Warm glow · brushed bronze",category:"Lighting",w:.4,d:.4,h:1.2,color:"#e8e2d5",material:"Opal"},{id:"floor-lamp",name:"Arc floor lamp",subtitle:"Bronze stem · linen shade",category:"Lighting",w:.55,d:.55,h:1.75,color:"#c4b59c",material:"Linen"},{id:"chaise",name:"Terrace lounger",subtitle:"Saffron outdoor linen · low lounge",category:"Outdoor",w:.85,d:1.7,h:.72,color:"#c39543",model:"chaise",material:"Linen"},{id:"garden-tree",name:"Garden olive tree",subtitle:"Silver-green canopy · natural trunk",category:"Outdoor",w:2.8,d:2.8,h:4.4,color:"#65794c",material:"Foliage"},{id:"vanity",name:"Floating stone vanity",subtitle:"Stone basin · walnut joinery",category:"Bathroom",w:.75,d:.6,h:.95,color:"#e8e2d5",material:"Stone"},{id:"toilet",name:"Wall-hung porcelain",subtitle:"Compact concealed profile",category:"Bathroom",w:.46,d:.64,h:.58,color:"#e8e2d5",material:"Porcelain"},{id:"shower",name:"Walk-in rain shower",subtitle:"Clear glass · bronze fittings",category:"Bathroom",w:1.15,d:1.15,h:2.35,color:"#ac8059",material:"Stone"}],$t=s=>ys.find(e=>e.id===s),on=(s,e,t,n,i,a,r=[],o="oak",l=!1)=>({id:s,name:e,x:t,z:n,w:i,d:a,height:3.15,thickness:.16,floor:o,wallColor:"#d5bea2",edges:r,outdoor:l});function oh(s,e,t,n=0,i={}){const a=$t(s);return{id:Di(),catalogId:s,name:a.name,x:e,z:t,r:n,w:a.w,d:a.d,h:a.h,color:a.color,material:a.material,locked:!1,elevation:0,...i}}function Ix(){const s=[on("living","Living salon",0,0,7.4,6.4,["west","north"]),on("dining","Dining",7.4,0,4.6,6.4,["north"]),on("kitchen","Kitchen",12,0,6,5,["east","north"],"marble"),on("gallery","Gallery",0,6.4,18,1.4,["west","east"]),on("primary","Primary suite",0,7.8,7.4,4.2,["west","north","east","south"]),on("guest","Guest suite",7.4,7.8,5,4.2,["north","east","south"]),on("study","Study & guest",12.4,7.8,5.6,4.2,["north","east","south"]),on("primary-bath","Primary bath",4.8,9.7,2.6,2.3,["west","south"],"marble"),on("guest-bath","Guest bath",10.5,9.7,1.9,2.3,["west","south"],"marble"),on("powder","Powder room",12,5,2.6,1.4,["west","east"],"marble"),on("laundry","Laundry",14.6,5,1.7,1.4,["east"],"marble"),on("kitchen-entry","Kitchen entry",16.3,5,1.7,1.4,[],"oak"),on("terrace","South terrace",0,-2.4,18,2.4,[],"limestone",!0)],e=[],t=(o,l,c,d=0,h={})=>{const u=oh(o,l,c,d,h);return e.push(u),u};t("rug",3.65,3.05,0,{w:5.5,d:4.4,color:"#d1a17d"});const n=t("sofa",3.9,4.5);t("coffee-table",3.7,2.9),t("side-table",4.75,2.53),t("armchair",1.5,2.2,115),t("armchair",5.7,1.9,-115),t("credenza",6.65,4.8,90,{w:2,d:.5}),t("plant",.65,5.45),t("plant",6.7,.65),t("rug",9.55,3.2,0,{w:3.6,d:4.8,color:"#b2b997"}),t("dining-table",9.55,3);for(const o of[2,3,4])t("dining-chair",8.45,o,90),t("dining-chair",10.65,o,-90);t("dining-chair",9.55,1.12,180),t("dining-chair",9.55,4.9),t("credenza",9.4,6.07),t("island",14.55,2.75);for(const o of[.65,1.55,2.45,3.35,4.25])t("cabinet",17.65,o,90);for(const o of[1.6,2.7,3.8])t("stool",12.9,o,90);t("rug",2.35,9.8,0,{w:4.1,d:3.5,color:"#a7b6a4"}),t("bed",2.3,10.15),t("nightstand",.825,10.9),t("nightstand",3.775,10.9),t("plant",.6,8.4,20,{h:1.65,w:.74,d:.74}),t("rug",9,9.85,0,{w:2.8,d:3.6,color:"#b29282"}),t("bed",8.95,10.15,0,{w:2.2,d:2.42,color:"#796078"}),t("desk",14.2,9),t("dining-chair",14.2,8.2,180),t("daybed",16.3,10.9),t("shelf",16.1,11.76),t("plant",17.45,8.4),t("plant",11.9,8.4,40,{h:1.5,w:.65,d:.65}),t("vanity",5.15,10.35,90),t("toilet",6.97,10.22),t("shower",6.8,11.35),t("vanity",10.82,10.08,90,{w:.55,d:.55}),t("toilet",11.97,10.22),t("shower",11.8,11.35),t("vanity",12.5,5.65,90),t("toilet",14,5.65),t("sofa",3.8,-1.1,180,{w:2.7,d:.9,h:.95,color:"#327e79"}),t("coffee-table",3.8,-.25,0,{w:.86,d:.86,h:.57}),t("dining-chair",9.1,-1,90),t("dining-chair",10.6,-1,-90),t("side-table",9.85,-1,0,{w:.86,d:.86,h:.73});for(const o of[13.8,15.8])t("chaise",o,-1.15);for(const o of[1,6.7,11.8,17.1])t("plant",o,-1.75,0,{h:1.7,w:.75,d:.75});for(const o of[-1.8,5,11.4])t("garden-tree",21.5,o,20,{w:2.9,d:2.9,h:4.5});t("vase",3.95,3,0,{elevation:.53}),t("vase",9.55,3,0,{elevation:.89});for(const o of[2.8,4,5.2])t("pendant",o,3.2,0,{elevation:2.35});for(const o of[1.7,2.8,3.9])t("pendant",14.55,o,0,{elevation:2.3});const i=[],a=(o,l,c=1.1)=>i.push({id:Di("opening"),wallId:o,t:l,w:c,h:2.4,sill:0,kind:"door"});a("living:north",4/7.4,2),a("dining:north",2.5/4.6,1.8),a("kitchen:north",5.05/6,1.3),a("primary:south",2.8/7.4,1.2),a("guest:south",1.15/5,1.1),a("study:south",2.2/5.6,1.2),a("primary-bath:south",.95/2.6,.9),a("guest-bath:west",.35/2.3,.7),a("gallery:east",.5,1.1);const r=(o,l,c,d,h)=>i.push({id:Di("opening"),wallId:o,t:l,w:c,h:d,sill:h,kind:"window"});return r("primary:west",.58,2.5,1.8,1),r("guest:north",.34,2.2,.7,2.2),r("study:east",.54,2.5,1.9,.9),{version:1,paletteVersion:2,name:"Garden residence",site:As(),rooms:s,items:e,walls:[],openings:i,settings:{snap:.1,grid:!1,dimensions:!0,cutaway:!0,lighting:"day",units:"m"},initialSelection:n.id}}function Ux(){return{version:1,paletteVersion:2,name:"My new home",site:As(),rooms:[],items:[],walls:[],openings:[],settings:{snap:.1,grid:!1,dimensions:!0,cutaway:!0,lighting:"day",units:"m"}}}function Fx(s,e){const{x:t,z:n,w:i,d:a}=s,r={north:[t,n+a,t+i,n+a],south:[t,n,t+i,n],west:[t,n,t,n+a],east:[t+i,n,t+i,n+a]},[o,l,c,d]=r[e];return{id:`${s.id}:${e}`,roomId:s.id,side:e,x1:o,z1:l,x2:c,z2:d,h:s.height,t:s.thickness,color:s.wallColor}}function Jn(s){return[...s.rooms.flatMap(e=>e.edges.map(t=>Fx(e,t))),...s.walls]}function lh(s){if(!s.length)return 0;const e=[...new Set(s.flatMap(n=>[n.x,n.x+n.w]))].sort((n,i)=>n-i);let t=0;for(let n=0;n<e.length-1;n++){const i=e[n],a=e[n+1],r=(i+a)/2,o=s.filter(h=>r>=h.x&&r<h.x+h.w).map(h=>[h.z,h.z+h.d]).sort((h,u)=>h[0]-u[0]);let l=null,c=0,d=0;for(const[h,u]of o)l===null?(l=h,c=u):h>c?(d+=c-l,l=h,c=u):c=Math.max(c,u);l!==null&&(d+=c-l),t+=(a-i)*d}return Math.round(t*100)/100}const Nx=s=>lh(s.rooms.filter(e=>!e.outdoor)),ld=s=>lh(s.rooms.filter(e=>e.outdoor));function Xo(s){const e=s.r*Math.PI/180,t=Math.cos(e),n=Math.sin(e);return[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]].map(([i,a])=>({x:s.x+i*s.w*t-a*s.d*n,z:s.z+i*s.w*n+a*s.d*t}))}function cd(s,e){const t=Xo(s),n=Xo(e);for(const i of[t,n])for(let a=0;a<2;a++){const r=i[a],o=i[a+1],l={x:-(o.z-r.z),z:o.x-r.x},c=t.map(h=>h.x*l.x+h.z*l.z),d=n.map(h=>h.x*l.x+h.z*l.z);if(Math.max(...c)<=Math.min(...d)+.001||Math.max(...d)<=Math.min(...c)+.001)return!1}return!0}function Ox(s,e){var a,r,o;if(!e)return[];const t=[],n=Xo(e),i=((a=$t(e.catalogId))==null?void 0:a.category)==="Outdoor"?[...s.rooms,s.site??As()]:s.rooms;if(n.every(l=>i.some(c=>l.x>=c.x-.08&&l.x<=c.x+c.w+.08&&l.z>=c.z-.08&&l.z<=c.z+c.d+.08))||t.push("Part of this piece is outside your room floors."),e.catalogId==="rug"||e.elevation>.08||((r=$t(e.catalogId))==null?void 0:r.category)==="Lighting")return t;for(const l of Jn(s)){const c={x:(l.x1+l.x2)/2,z:(l.z1+l.z2)/2,w:Math.hypot(l.x2-l.x1,l.z2-l.z1),d:l.t,r:Math.atan2(l.z2-l.z1,l.x2-l.x1)*180/Math.PI};if(cd(e,c)){t.push("This piece overlaps a wall. Move it inward for clearance.");break}}if(!["Decor"].includes((o=$t(e.catalogId))==null?void 0:o.category)){const l=s.items.find(c=>{var d;return c.id!==e.id&&c.catalogId!=="rug"&&c.elevation<.08&&!["Decor","Lighting"].includes((d=$t(c.catalogId))==null?void 0:d.category)&&cd(e,c)});l&&t.push(`Overlaps ${l.name.toLowerCase()}. Adjust the position or size.`)}return t}function kx(s,e,t){if(!s.items.find(d=>d.id===e)||!s.settings.snap)return{...t,guides:[]};let i=t.x,a=t.z;const r=[],o=s.items.filter(d=>d.id!==e&&d.catalogId!=="rug"&&Math.hypot(d.x-i,d.z-a)<6),l=o.map(d=>d.x).find(d=>Math.abs(d-i)<.065),c=o.map(d=>d.z).find(d=>Math.abs(d-a)<.065);return l!==void 0&&(i=l,r.push({axis:"x",value:i})),c!==void 0&&(a=c,r.push({axis:"z",value:a})),{x:i,z:a,guides:r}}function zx(s,e,t){return[...s.rooms].reverse().find(n=>e>=n.x&&e<=n.x+n.w&&t>=n.z&&t<=n.z+n.d)}function Gs(s){const e=s.rooms.length?s.rooms:[{x:0,z:0,w:12,d:10}];return{minX:Math.min(...e.map(t=>t.x)),maxX:Math.max(...e.map(t=>t.x+t.w)),minZ:Math.min(...e.map(t=>t.z)),maxZ:Math.max(...e.map(t=>t.z+t.d))}}function Bx(s){const e=s.site??As(),t=Gs(s);return{minX:Math.min(e.x,t.minX),maxX:Math.max(e.x+e.w,t.maxX),minZ:Math.min(e.z,t.minZ),maxZ:Math.max(e.z+e.d,t.maxZ)}}function Ya(s,e,t,n=!1){const i=s.rooms.find(r=>r.id===e);if(!i)return;const a={...i,...t};if(a.w=Et(+a.w||1,1,50),a.d=Et(+a.d||1,1,50),n){const r=a.x-i.x,o=a.z-i.z;for(const l of s.items)l.x>=i.x&&l.x<=i.x+i.w&&l.z>=i.z&&l.z<=i.z+i.d&&(l.x+=r,l.z+=o);for(const l of s.rooms)l.id!==e&&l.x>=i.x&&l.z>=i.z&&l.x+l.w<=i.x+i.w+.001&&l.z+l.d<=i.z+i.d+.001&&(l.x+=r,l.z+=o)}Object.assign(i,a)}function ch(s,e,t){const[n,i]=e.split(":"),a=s.rooms.find(l=>l.id===n);if(!a)return;const r=gn(a);let o={};i==="east"&&(o={w:Math.max(1,a.w+t.x)}),i==="west"&&(o={x:Math.min(a.x+t.x,a.x+a.w-1),w:Math.max(1,a.w-t.x)}),i==="north"&&(o={d:Math.max(1,a.d+t.z)}),i==="south"&&(o={z:Math.min(a.z+t.z,a.z+a.d-1),d:Math.max(1,a.d-t.z)}),Ya(s,n,o);for(const l of s.rooms)if(!(l.id===n||l.outdoor)){if(i==="east"&&Math.abs(l.x-(r.x+r.w))<.01&&l.z<r.z+r.d&&l.z+l.d>r.z){const c=a.x+a.w-l.x;l.x+=c,l.w=Math.max(1,l.w-c)}if(i==="north"&&Math.abs(l.z-(r.z+r.d))<.01&&l.x<r.x+r.w&&l.x+l.w>r.x){const c=a.z+a.d-l.z;l.z+=c,l.d=Math.max(1,l.d-c)}}}const Fa=s=>/^#[0-9a-f]{6}$/i.test(s);function _l(s){const e=JSON.parse(s),t=["builtloop-studio","aurel-home-studio"].includes(e.format)?e.project:e;if(!t||t.version!==1||!Array.isArray(t.rooms)||!Array.isArray(t.items)||!Array.isArray(t.walls)||!Array.isArray(t.openings))throw new Error("Choose a Builtloop Studio project JSON file.");if(t.rooms.length>150||t.items.length>1e3||t.walls.length>500||t.openings.length>500)throw new Error("This project is too large for the editor.");const n=(c,d=-100,h=100)=>typeof c=="number"&&Number.isFinite(c)&&c>=d&&c<=h,i=c=>typeof c=="string"&&c.length<=150;t.site??(t.site=As());const a=t.site;if(!n(a.x)||!n(a.z)||!n(a.w,5,80)||!n(a.d,5,80)||!Fa(a.color))throw new Error("The garden has invalid measurements or color.");if(t.site={...a,id:"site",name:"Garden & lawn"},t.paletteVersion!==2){const c={sofa:"#e8e2d5","dining-chair":"#c4b59c",bed:"#e8e2d5",chaise:"#e8e2d5",rug:"#c4b59c"};for(const d of t.items)c[d.catalogId]===d.color&&(d.color=$t(d.catalogId).color);for(const d of t.rooms)d.wallColor==="#e5e0d4"&&(d.wallColor="#d5bea2");t.paletteVersion=2}const r=new Set;for(const c of[t.rooms,t.items,t.walls,t.openings])for(const d of c){if(!i(d.id)||r.has(d.id))throw new Error("Project IDs are invalid.");r.add(d.id)}for(const c of t.rooms)if(!i(c.name)||!n(c.x)||!n(c.z)||!n(c.w,1,50)||!n(c.d,1,50)||!n(c.height,1,8)||!n(c.thickness,.05,1)||!Fa(c.wallColor)||!Oi.some(d=>d.id===c.floor)||!Array.isArray(c.edges)||c.edges.some(d=>!["north","south","west","east"].includes(d)))throw new Error("A room has invalid measurements or finishes.");for(const c of t.items)if(!$t(c.catalogId)||!i(c.name)||!n(c.x)||!n(c.z)||!n(c.w,.05,30)||!n(c.d,.05,30)||!n(c.h,.01,10)||!n(c.r,-3600,3600)||!Fa(c.color)||!n(c.elevation,0,8))throw new Error("A furniture item is invalid.");for(const c of t.walls)if(![c.x1,c.x2,c.z1,c.z2].every(d=>n(d))||!n(c.h,1,8)||!n(c.t,.05,1)||!Fa(c.color))throw new Error("A wall has invalid measurements.");const o=new Set(Jn(t).map(c=>c.id));for(const c of t.openings)if(!o.has(c.wallId)||!n(c.t,0,1)||!n(c.w,.3,8)||!n(c.h,.3,6)||!n(c.sill,0,5)||!["door","window","glass"].includes(c.kind))throw new Error("A door or window is invalid.");const l=t.settings??{};return t.settings={snap:[0,.01,.05,.1,.25,.5].includes(l.snap)?l.snap:.1,grid:!!l.grid,dimensions:l.dimensions!==!1,cutaway:l.cutaway!==!1,lighting:["day","sunset","night"].includes(l.lighting)?l.lighting:"day",units:l.units==="ft"?"ft":"m"},t.name=i(t.name)?t.name==="AUREL residence"?"Garden residence":t.name:"My home",gn(t)}function Hx(s){let e=gn(s),t=[],n=[],i=new Set,a=null;const r=()=>i.forEach(o=>o(e));return{get:()=>e,canUndo:()=>t.length>0,canRedo:()=>n.length>0,subscribe(o){return i.add(o),()=>i.delete(o)},edit(o,{history:l=!0}={}){l&&(t.push(gn(e)),t=t.slice(-60),n=[]),o(e),r()},begin(){a||(a=gn(e))},end(){a&&JSON.stringify(a)!==JSON.stringify(e)&&(t.push(a),t=t.slice(-60),n=[]),a=null,r()},cancel(){a&&(e=a,a=null,r())},undo(){t.length&&(n.push(gn(e)),e=t.pop(),r())},redo(){n.length&&(t.push(gn(e)),e=n.pop(),r())},replace(o){t.push(gn(e)),n=[],e=gn(o),r()}}}const vt=(s,e,t)=>new L(s,e,t),dd=s=>s*Math.PI/180,St=(s,e=.75,t=0)=>new Ni({color:s,roughness:e,metalness:t}),tn=St("#a0885f",.32,.65),li=St("#806047",.55),dh=St("#e5dece",.9),Gx=St("#30352e",.5),hh=new _i(1,1,1);function Ve(s,e,t,n,i=0,a=e/2,r=0,o=0){const l=new gt(o?new bl(s,e,t,3,Math.min(o,s/4,e/4,t/4)):hh,n);return o||l.scale.set(s,e,t),l.position.set(i,a,r),l.castShadow=!0,l.receiveShadow=!0,l}function wn(s,e,t,n=0,i=e/2,a=0){const r=new gt(new nr(s,s,e,32),t);return r.position.set(n,i,a),r.castShadow=!0,r.receiveShadow=!0,r}function zs(s,e,t,n,i){const a=new gt(new sr(s,20,12),e);return a.position.set(t,n,i),a.castShadow=!0,a}function Na(s,e="scene-label"){const t=document.createElement("div");return t.className=e,t.textContent=s,new Px(t)}function as(s){s.traverse(e=>{e.isCSS2DObject&&e.element.remove(),e.geometry&&e.geometry!==hh&&e.geometry.dispose(),e.material&&!e.userData.sharedMaterial&&(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{[tn,li,dh,Gx].includes(n)||n.dispose()})}),s.clear()}class Vx{constructor(e,t){this.host=e,this.callbacks=t,this.project=null,this.selection=null,this.tool="select",this.view="3d",this.instances=new Map,this.templates=new Map,this.pending=null,this.drawing=null,this.drag=null,this.cameraTween=null,this.frame=0,this.assetCount=0,this.scene=new ko,this.scene.background=new Ce("#e8e5de"),this.renderer=new Kc({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ct,this.renderer.toneMapping=so,this.renderer.toneMappingExposure=.96,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vd,e.prepend(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-label","Interactive apartment canvas"),this.renderer.domElement.setAttribute("tabindex","0"),this.labelRenderer=new Lx,Object.assign(this.labelRenderer.domElement.style,{position:"absolute",inset:"0",pointerEvents:"none"}),e.append(this.labelRenderer.domElement);const n=new Go(this.renderer),i=new Dx;this.scene.environment=n.fromScene(i,.04).texture,i.dispose(),n.dispose(),this.scene.environmentIntensity=.42,this.perspective=new Gt(42,1,.1,2e3),this.ortho=new rr(-16,16,12,-12,.1,400),this.camera=this.perspective,this.controls=new Jc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.maxPolarAngle=Math.PI/2.05,this.controls.minDistance=3,this.controls.maxDistance=75,this.controls.target.set(9,0,-5),this.controls.addEventListener("start",()=>this.cameraTween=null),this.hemi=new _c("#fff9ec","#b1b5aa",2.4),this.scene.add(this.hemi),this.sun=new Va("#fff2d9",3.3),this.sun.position.set(-7,22,16),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:.1,far:90}),this.sun.shadow.normalBias=.025,this.sun.shadow.bias=-2e-4,this.sun.shadow.radius=4,this.scene.add(this.sun),this.fill=new Va("#e6edff",1),this.fill.position.set(20,12,-20),this.scene.add(this.fill),this.ground=Ve(2e3,.12,2e3,St("#e6e3dc",1),0,-.49,0),this.ground.castShadow=!1,this.scene.add(this.ground),this.landscape=new wt,this.arch=new wt,this.furniture=new wt,this.labels=new wt,this.selectionGroup=new wt,this.preview=new wt,this.guides=new wt,this.scene.add(this.landscape,this.arch,this.furniture,this.labels,this.selectionGroup,this.preview,this.guides),this.grid=new Zp(80,160,"#969c8b","#b5b9ae"),this.grid.position.y=.035,this.grid.material.transparent=!0,this.grid.material.opacity=.2,this.grid.visible=!1,this.scene.add(this.grid),this.ray=new Yp,this.plane=new $n(vt(0,1,0),0),this.pointer=new Re,this.loader=new $_,this.loader.setMeshoptDecoder(Cx),this.textures=new Yd,this.textureMaps={};for(const[a,r]of[["wood","wood.jpg"],["stone","stone.jpg"],["grass","grass-color.webp"],["grassNormal","grass-normal.webp"],["grassRough","grass-rough.webp"]]){const o=this.textures.load("/builtloop-garden-studio/textures/"+r,()=>{this.project&&(this.archSignature=null,this.landscapeSignature=null,this.sync(this.project))});["grassNormal","grassRough"].includes(a)||(o.colorSpace=Ct),o.wrapS=o.wrapT=Ii,o.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.textureMaps[a]=o}this.bindEvents(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.perspective.position.set(29,24,24),this.controls.update(),this.animate(),this.loadAssets()}resize(){const e=this.host.clientWidth,t=this.host.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t),this.labelRenderer.setSize(e,t),this.perspective.aspect=e/t,this.perspective.updateProjectionMatrix();const n=this.planSpan??21;this.ortho.left=-n*e/t/2,this.ortho.right=n*e/t/2,this.ortho.top=n/2,this.ortho.bottom=-n/2,this.ortho.updateProjectionMatrix(),this.dirty=!0}async loadAssets(){var t,n;const e=[...new Set(ys.filter(i=>i.model).map(i=>i.model))];await Promise.all(e.map(async i=>{var a,r,o,l;try{const c=await this.loader.loadAsync("/builtloop-garden-studio/models/"+i+".glb"),d=new wt;d.add(c.scene),c.scene.updateMatrixWorld(!0);const h=new cn().setFromObject(d),u=h.getSize(vt()),p=h.getCenter(vt());c.scene.position.sub(vt(p.x,h.min.y,p.z)),d.userData.size=u,d.traverse(g=>{if(g.isMesh){g.castShadow=!0,g.receiveShadow=!0;const b=Array.isArray(g.material)?g.material:[g.material];for(const m of b)m.envMapIntensity=.6,i==="plant"&&(m.side=bn)}}),this.templates.set(i,d),(r=(a=this.callbacks).onAsset)==null||r.call(a,i,++this.assetCount,e.length),this.project&&this.syncFurniture(!0,i)}catch(c){console.warn("Model fallback:",i,c.message),(l=(o=this.callbacks).onAsset)==null||l.call(o,i,++this.assetCount,e.length)}})),(n=(t=this.callbacks).onReady)==null||n.call(t)}makeFallback(e){const t=new wt,n=St(e.color,.85),i=a=>t.add(a);switch(e.id){case"garden-tree":{const a=St("#6f6047",.96);a.name="Olive bark";const r=St(e.color,.88);r.name="Olive foliage",r.side=bn,i(wn(.09,2.8,a,0,1.4,0));for(let g=0;g<7;g++){const b=wn(.033,1.6,a,0,2.2,0);b.rotation.z=(g%2?1:-1)*(.35+g*.08),b.rotation.y=g*2.4,i(b)}const o=new sr(.085,5,3),l=new cl(o,r,1900),c=new Oe,d=new Pn,h=vt();let u=7919;const p=()=>(u=u*16807%2147483647,(u-1)/2147483646);for(let g=0;g<1900;g++){const b=p()*Math.PI*2,m=p()*2-1,f=Math.cbrt(p()),y=Math.sqrt(1-m*m),S=Math.cos(b)*y*f*1.45,x=Math.sin(b)*y*f*1.35,T=3.05+m*f*1.22;d.setFromEuler(new vn(p()*Math.PI,p()*Math.PI,p()*Math.PI)),h.set(1.4,.28,.65),c.compose(vt(S,T,x),d,h),l.setMatrixAt(g,c),l.setColorAt(g,new Ce(e.color).multiplyScalar(.72+p()*.62))}l.castShadow=!0,l.receiveShadow=!0,i(l);break}case"sofa":case"daybed":i(Ve(e.w,.4,e.d,n,0,.43,0,.14)),i(Ve(e.w,.58,.18,n,0,.85,-e.d/2+.1,.08));for(const a of[-e.w/2+.15,e.w/2-.15])i(Ve(.3,.6,e.d,n,a,.66,0,.1));break;case"armchair":case"dining-chair":case"stool":i(Ve(e.w,.14,e.d,n,0,.52,0,.06)),i(Ve(e.w,.55,.12,n,0,.85,-e.d/2+.04,.05));for(const a of[-e.w*.35,e.w*.35])for(const r of[-e.d*.35,e.d*.35])i(wn(.022,.5,tn,a,.25,r));break;case"rug":i(Ve(e.w,e.h,e.d,n,0,e.h/2,0,.008));break;case"shelf":for(const a of[.12,.7,1.3,1.9,2.4])i(Ve(e.w,.05,e.d,li,0,a,0));for(const a of[-e.w/2,e.w/2])i(Ve(.05,e.h,e.d,li,a,e.h/2,0));for(let a=0;a<20;a++)i(Ve(.08,.3+a*7%4*.03,.2,St(["#bda585","#4b5147","#ddd3bf","#91705b"][a%4]),-e.w/2+.2+a%10*.23,.9+Math.floor(a/10)*.6,0));break;case"pendant":i(wn(.012,.95,tn,0,.7,0)),i(zs(.2,St("#fff0d4",.3),0,.2,0));break;case"floor-lamp":i(wn(.23,.04,tn)),i(wn(.016,1.4,tn,0,.72,0)),i(new gt(new hl(.28,.38,32,1,!0),n)),t.children.at(-1).position.y=1.55;break;case"vanity":i(Ve(e.w,.6,e.d,li,0,.55,0,.03)),i(Ve(e.w+.04,.09,e.d+.04,n,0,.89,0,.025)),i(zs(.2,dh,0,.94,0));break;case"toilet":i(zs(.23,n,0,.35,0)),i(Ve(.4,.1,.52,n,0,.52,.02,.05));break;case"shower":i(Ve(e.w,.05,e.d,n)),i(Ve(.015,e.h,e.d,new dn({color:"#dce8df",transparent:!0,opacity:.21,roughness:.05,metalness:.1}),-e.w/2,e.h/2,0)),i(wn(.012,2.1,tn,.35,1.1,-.4)),i(wn(.14,.02,tn,.25,2.2,-.4));break;case"art":i(Ve(e.w,e.h,e.d,tn,0,e.h/2,0,.01)),i(Ve(e.w-.06,e.h-.06,.01,n,0,e.h/2,.05));for(let a=0;a<4;a++)i(zs(.18,St(["#f0e5cf","#85694f","#4b5849","#c0b198"][a]),(a%2-.5)*.6,.4+Math.floor(a/2)*.45,.07));break;case"plant":i(wn(.2,.45,St("#a67951"))),i(wn(.025,1.4,li,0,.9,0));for(let a=0;a<18;a++){const r=a*2.4,o=zs(.16,St("#5b7047"),Math.cos(r)*.3,.8+a*.05,Math.sin(r)*.3);o.scale.set(1,.35,1),i(o)}break;case"bed":i(Ve(e.w,.3,e.d,li,0,.2,0,.08)),i(Ve(e.w,.35,e.d,n,0,.5,0,.1)),i(Ve(e.w,.95,.15,n,0,.9,-e.d/2,.07));break;default:i(Ve(e.w,.12,e.d,n,0,e.h-.06,0,.035)),i(Ve(e.w*.5,Math.max(.1,e.h-.12),e.d*.5,li,0,(e.h-.12)/2,0,.025))}return t.userData.size=new cn().setFromObject(t).getSize(vt()),t}instantiate(e){const t=$t(e.catalogId),n=this.templates.get(t.model),i=new wt;i.userData.entity={type:"item",id:e.id};const a=n?n.clone(!0):this.makeFallback(t);i.userData.asset=t.model,i.userData.loaded=!!n;const r=a.userData.size;return i.userData.size=r?vt(r.x,r.y,r.z):new cn().setFromObject(a).getSize(vt()),a.traverse(o=>{if(o.isMesh){o.material=Array.isArray(o.material)?o.material.map(l=>l.clone()):o.material.clone();for(const l of Array.isArray(o.material)?o.material:[o.material])l.userData.baseColor=l.color.clone(),l.userData.baseMap=l.map,l.userData.baseRoughness=l.roughness}}),i.add(a),i}colorize(e,t){const n=$t(t.catalogId);e.traverse(i=>{var r,o;if(!i.isMesh)return;const a=Array.isArray(i.material)?i.material:[i.material];for(const l of a){const c=l.name.toLowerCase(),d=/ivory|boucle|linen|leather|velvet|pillow|olive|cloud/.test(c),h=/wood|oak|walnut|joinery/.test(c),u=/travertine|stone|marble|limestone/.test(c),p=/pot_diff|pot_/.test(c),g=n.category==="Seating"||n.category==="Bedroom"?d:n.material==="Wood"?h:n.id==="plant"?p:n.material==="Stone"||n.material==="Ceramic"?u:!0;(n.id==="garden-tree"?!/foliage/.test(c):!(g||!e.userData.loaded))||(l.color.set(t.color),t.material==="Wood"?(l.roughness=.45,l.metalness=0,l.map=(r=this.textureMaps.wood)!=null&&r.image?this.textureMaps.wood:l.userData.baseMap):t.material==="Leather"?(l.roughness=.46,l.metalness=0,l.map=l.userData.baseMap):t.material==="Stone"?(l.roughness=.35,l.metalness=0,l.map=(o=this.textureMaps.stone)!=null&&o.image?this.textureMaps.stone:l.userData.baseMap):t.material==="Metal"?(l.roughness=.28,l.metalness=.7,l.map=null):(l.roughness=.82,l.metalness=0,l.map=l.userData.baseMap),l.needsUpdate=!0)}})}syncFurniture(e=!1,t=null){if(!this.project)return;const n=new Set(this.project.items.map(i=>i.id));for(const[i,a]of this.instances)n.has(i)||(this.furniture.remove(a),a.traverse(r=>{r.material&&(Array.isArray(r.material)?r.material:[r.material]).forEach(o=>o.dispose())}),this.instances.delete(i));for(const i of this.project.items){let a=this.instances.get(i.id);const r=$t(i.catalogId);e&&(!t||r.model===t)&&a&&(this.furniture.remove(a),this.instances.delete(i.id),a=null),a||(a=this.instantiate(i),this.instances.set(i.id,a),this.furniture.add(a));const o=a.userData.size;a.children[0].scale.set(i.w/Math.max(.01,o.x),i.h/Math.max(.01,o.y),i.d/Math.max(.01,o.z)),a.position.set(i.x,.07+i.elevation,-i.z),a.rotation.y=dd(i.r);const l=i.color+i.material;a.userData.finish!==l&&(this.colorize(a,i),a.userData.finish=l)}this.updateSelection()}floorMaterial(e){const t=Oi.find(a=>a.id===e.floor)??Oi[0],n=t.texture?t.texture==="wood.jpg"?this.textureMaps.wood:this.textureMaps.stone:null,i=St(t.color,t.type==="Stone"?.6:.88);return n!=null&&n.image&&(i.map=n.clone(),i.map.needsUpdate=!0,i.map.repeat.set(e.w/3,e.d/3),t.id==="oak"&&i.color.set("#ecd7b8"),t.id==="marble"&&i.color.set("#e1ceb0")),i}sync(e){this.project=e,this.grid.visible=e.settings.grid,this.setLighting(e.settings.lighting);const t=JSON.stringify(e.site);t!==this.landscapeSignature&&(this.landscapeSignature=t,this.buildLandscape());const n=JSON.stringify([e.rooms,e.walls,e.openings,e.settings.cutaway,this.view]);n!==this.archSignature&&(this.archSignature=n,this.buildArchitecture()),this.syncFurniture(),this.updateLabels(),this.dirty=!0,this.renderer.shadowMap.needsUpdate=!0}buildLandscape(){as(this.landscape);const e=this.project.site??As(),t=e.x+e.w/2,n=-(e.z+e.d/2),i=Ve(e.w+.24,.28,e.d+.24,St("#b8ab92",.94),t,-.23,n,.05);i.castShadow=!1,this.landscape.add(i);const a=St(e.color,1);for(const[l,c]of[["grass","map"],["grassNormal","normalMap"],["grassRough","roughnessMap"]]){const d=this.textureMaps[l];d!=null&&d.image&&(a[c]=d.clone(),a[c].repeat.set(e.w/2.2,e.d/2.2),a[c].needsUpdate=!0)}a.normalScale=new Re(.28,.28);const r=Ve(e.w,.035,e.d,a,t,-.045,n);r.castShadow=!1,r.userData.entity={type:"site",id:"site"},this.landscape.add(r);const o=St("#c5b498",.9);for(const l of[e.z,e.z+e.d])this.landscape.add(Ve(e.w+.16,.045,.09,o,t,-.043,-l));for(const l of[e.x,e.x+e.w])this.landscape.add(Ve(.09,.045,e.d+.16,o,l,-.043,n))}buildArchitecture(){as(this.arch);const e=this.project,t=Gs(e),n=t.maxX-t.minX,i=t.maxZ-t.minZ;if(e.rooms.length){const a=Ve(n+.35,.32,i+.35,St("#ccc3b1",.83),(t.maxX+t.minX)/2,-.14,-(t.maxZ+t.minZ)/2,.08);a.castShadow=!1,this.arch.add(a)}for(const a of e.rooms){const r=e.rooms.filter(l=>l.id!==a.id&&l.w*l.d>a.w*a.d+.01&&a.x>=l.x-.001&&a.z>=l.z-.001&&a.x+a.w<=l.x+l.w+.001&&a.z+a.d<=l.z+l.d+.001).length,o=Ve(a.w,.035,a.d,this.floorMaterial(a),a.x+a.w/2,.04+r*.012,-(a.z+a.d/2));if(o.userData.entity={type:"room",id:a.id},o.castShadow=!1,this.arch.add(o),a.outdoor){const l=new dn({color:"#d9e4dd",transparent:!0,opacity:.16,roughness:.08,metalness:.05,depthWrite:!1}),c=-a.z;this.arch.add(Ve(a.w,.018,.03,tn,a.x+a.w/2,1.13,c),Ve(a.w,1.06,.012,l,a.x+a.w/2,.59,c));for(let d=a.x;d<=a.x+a.w+.01;d+=3)this.arch.add(Ve(.023,1.1,.023,tn,d,.6,c))}}for(const a of Jn(e))this.buildWall(a)}buildWall(e){const t=Math.hypot(e.x2-e.x1,e.z2-e.z1);if(t<.04)return;const n=Math.atan2(e.z2-e.z1,e.x2-e.x1),i=new wt;i.position.set(e.x1,0,-e.z1),i.rotation.y=n,i.userData.entity={type:"wall",id:e.id},this.project.rooms.find(d=>d.id===e.roomId);let a=e.h;if(this.view==="plan")a=.16;else if(this.project.settings.cutaway){const d=e.side==="north"&&Math.abs(e.z1-Gs(this.project).maxZ)<.1,h=e.side==="west"&&Math.abs(e.x1-Gs(this.project).minX)<.1&&e.z1>7;a=d||h?e.h:Math.min(e.h,1.25)}const r=St(e.color,.87),o=this.project.openings.filter(d=>d.wallId===e.id).map(d=>({...d,start:Et(d.t*t-d.w/2,.04,Math.max(.04,t-.34)),end:Et(d.t*t+d.w/2,.34,t-.04)})).sort((d,h)=>d.start-h.start);let l=0;const c=(d,h,u,p)=>{h-d>.01&&p>.01&&i.add(Ve(h-d,p,e.t,r,(d+h)/2,u+p/2,0))};for(const d of o){c(l,d.start,.07,a),d.kind!=="door"&&c(d.start,d.end,.07,Math.min(d.sill,a));const h=d.sill+d.h;if(h<a&&c(d.start,d.end,h+.07,a-h),l=Math.max(l,d.end),this.view!=="plan"){const u=Math.min(d.h,Math.max(.35,a-d.sill)),p=new wt;p.userData.entity={type:"opening",id:d.id};for(const g of[d.start,d.end])p.add(Ve(.035,u,.05,tn,g,d.sill+.07+u/2,0));if(p.add(Ve(d.end-d.start,.035,.05,tn,(d.start+d.end)/2,d.sill+.07+u,0)),d.kind==="window"||d.kind==="glass")p.add(Ve(d.end-d.start,u,.012,new dn({color:"#c8d9d2",transparent:!0,opacity:.23,roughness:.12,depthWrite:!1}),(d.start+d.end)/2,d.sill+.07+u/2,0)),p.add(Ve(d.end-d.start,.03,.05,tn,(d.start+d.end)/2,d.sill+.07,0));else{const g=new wt;g.position.set(d.start,.07,0),g.rotation.y=-.68,g.add(Ve(d.end-d.start,.04,.035,tn,(d.end-d.start)/2,.1,0)),this.project.settings.cutaway||g.add(Ve(d.end-d.start,d.h,.045,St("#b99b75",.65),(d.end-d.start)/2,d.h/2,0)),p.add(g)}i.add(p)}}c(l,t,.07,a),i.add(Ve(t,.07,e.t+.014,li,t/2,.11,0)),this.arch.add(i)}updateLabels(){if(as(this.labels),!!this.project){for(const e of this.project.rooms){if(/bath|laundry|powder/i.test(e.name))continue;const t=this.view==="plan"?`${e.name} · ${(e.w*e.d).toFixed(1)} m²`:e.name,n=Na(t,"room-label "+(this.view==="plan"?"plan-label":""));n.position.set(e.x+e.w/2,.13,-(e.z+(this.view==="plan"?e.d*.45:e.d*.22))),this.labels.add(n)}this.labels.visible=this.project.settings.dimensions}}setSelection(e){this.selection=e,this.updateSelection(),this.dirty=!0}selectionData(){if(!this.selection||!this.project)return null;const{type:e,id:t}=this.selection;return e==="site"?this.project.site:e==="item"?this.project.items.find(n=>n.id===t):e==="room"?this.project.rooms.find(n=>n.id===t):e==="wall"?Jn(this.project).find(n=>n.id===t):this.project.openings.find(n=>n.id===t)}updateSelection(){as(this.selectionGroup);const e=this.selectionData();if(!e)return;let t,n,i,a,r=0;if(this.selection.type==="item")({x:t,z:n,w:i,d:a,r}=e);else if(["room","site"].includes(this.selection.type))t=e.x+e.w/2,n=e.z+e.d/2,i=e.w,a=e.d;else if(this.selection.type==="wall")t=(e.x1+e.x2)/2,n=(e.z1+e.z2)/2,i=Math.hypot(e.x2-e.x1,e.z2-e.z1),a=e.t,r=Math.atan2(e.z2-e.z1,e.x2-e.x1)*180/Math.PI;else return;const o=new wt;o.position.set(t,.105,-n),o.rotation.y=dd(r);const l=[[-i/2,0,-a/2],[i/2,0,-a/2],[i/2,0,a/2],[-i/2,0,a/2],[-i/2,0,-a/2]].map(d=>vt(...d)),c=new Wt().setFromPoints(l);o.add(new ds(c,new bs({color:"#526d50",depthTest:!1})));for(const[d,h]of[[-i/2,-a/2],[i/2,-a/2],[i/2,a/2],[-i/2,a/2]]){const u=wn(.045,.016,St("#526d50"),d,.01,h);u.material.depthTest=!1,u.renderOrder=100,o.add(u)}if(this.project.settings.dimensions){const d=this.project.settings.units==="ft"?3.28084:1,h=this.project.settings.units==="ft"?"ft":"m",u=Na((i*d).toFixed(2)+" "+h,"dimension-label");u.position.set(0,.05,a/2+.28),o.add(u);const p=Na((a*d).toFixed(2)+" "+h,"dimension-label");p.position.set(i/2+.35,.05,0),o.add(p)}this.selectionGroup.add(o)}setLighting(e){this.lighting!==e&&(this.lighting=e,e==="sunset"?(this.sun.color.set("#ffbb75"),this.sun.intensity=2.4,this.sun.position.set(-18,8,15),this.hemi.intensity=1.45,this.scene.background.set("#e8dfd1"),this.renderer.toneMappingExposure=.96):e==="night"?(this.sun.color.set("#c7d4f0"),this.sun.intensity=.9,this.sun.position.set(-7,22,16),this.hemi.intensity=1.2,this.scene.background.set("#898d86"),this.renderer.toneMappingExposure=.95):(this.sun.color.set("#fff2d9"),this.sun.intensity=2.6,this.sun.position.set(-7,22,16),this.hemi.intensity=1.65,this.scene.background.set("#e8e5de"),this.renderer.toneMappingExposure=.96))}setView(e){this.view=e;const t=this.controls.target.clone(),n=this.focusSpan;this.controls.dispose(),this.camera=e==="plan"?this.ortho:this.perspective,this.controls=new Jc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.enableRotate=e!=="plan",this.controls.maxPolarAngle=Math.PI/2.05,this.controls.minDistance=3,this.controls.maxDistance=75,this.controls.target.copy(t),this.controls.addEventListener("start",()=>this.cameraTween=null),n?this.focusPoint(t.x,-t.z,n,!1):this.fit(!1),this.archSignature=null,this.sync(this.project)}fit(e=!0){const t=Bx(this.project),n=(t.minX+t.maxX)/2,i=(t.minZ+t.maxZ)/2,a=Math.max(t.maxX-t.minX,t.maxZ-t.minZ,8);this.focusPoint(n,i,a,e)}focusRoom(e){const t=this.project.rooms.find(n=>n.id===e);t&&this.focusPoint(t.x+t.w/2,t.z+t.d/2,Math.max(t.w,t.d)*1.1,!0)}focusSelection(){const e=this.selectionData();if(!e)return this.fit();this.selection.type==="item"?this.focusPoint(e.x,e.z,Math.max(e.w,e.d)*2+3,!0):this.selection.type==="room"&&this.focusRoom(e.id)}focusPoint(e,t,n,i=!0){this.focusSpan=n;const a=vt(e,0,-t),r=this.host.clientWidth/Math.max(1,this.host.clientHeight);this.planSpan=Math.max(n*.85+2,(n+2)/r),this.ortho.zoom=1,this.resize();let o;if(this.view==="plan")this.camera.up.set(0,0,-1),o=vt(e,45,-t+.001);else{this.camera.up.set(0,1,0);const l=Math.max(7,n)*Math.max(1,1.16/r);o=a.clone().add(vt(l*.94,l*1.12,l*1.22))}this.controls.maxDistance=Math.max(75,o.distanceTo(a)*1.35),i&&!matchMedia("(prefers-reduced-motion: reduce)").matches?this.cameraTween={from:this.camera.position.clone(),to:o,fromTarget:this.controls.target.clone(),target:a,t:performance.now()}:(this.camera.position.copy(o),this.controls.target.copy(a),this.controls.update()),this.dirty=!0}zoom(e){this.view==="plan"?(this.ortho.zoom=Et(this.ortho.zoom*e,.4,5),this.ortho.updateProjectionMatrix()):(this.camera.position.sub(this.controls.target).multiplyScalar(1/e).add(this.controls.target),this.controls.update())}setTool(e,t=null){this.tool=e,this.pending=t,this.drawing=null,this.clearPreview(),this.controls.mouseButtons.LEFT=e==="pan"?fi.PAN:fi.ROTATE,this.renderer.domElement.style.cursor=e==="select"?"default":e==="pan"?"grab":"crosshair"}point(e){const t=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const n=vt();return this.ray.ray.intersectPlane(this.plane,n)?{x:n.x,z:-n.z}:null}hit(e){this.point(e);const t=this.ray.intersectObjects([this.furniture,this.arch,this.landscape],!0);for(const n of t){let i=n.object;for(;i&&!i.userData.entity;)i=i.parent;if(i!=null&&i.userData.entity)return{...i.userData.entity,point:n.point}}return null}nearestWall(e){let t=null;for(const n of Jn(this.project)){const i=n.x2-n.x1,a=n.z2-n.z1,r=i*i+a*a;if(!r)continue;const o=Et(((e.x-n.x1)*i+(e.z-n.z1)*a)/r,0,1),l=Math.hypot(e.x-(n.x1+o*i),e.z-(n.z1+o*a));(!t||l<t.distance)&&(t={wall:n,t:o,distance:l})}return t}bindEvents(){const e=this.renderer.domElement;e.addEventListener("pointerdown",n=>{var o,l,c,d,h,u,p,g,b,m,f,y,S,x,T,A,R;if(n.button!==0||this.tool==="pan")return;const i=this.point(n);if(!i)return;this.down={x:n.clientX,y:n.clientY};const a={x:In(i.x,this.project.settings.snap),z:In(i.z,this.project.settings.snap)};if(["room","wall"].includes(this.tool)){this.controls.enabled=!1,this.drawing=this.drawing??{start:a},this.drawing.down=a,e.setPointerCapture(n.pointerId),n.stopImmediatePropagation();return}if(this.tool==="place"){this.controls.enabled=!1,this.ignoreClickUp=!0,(l=(o=this.callbacks).onPlace)==null||l.call(o,a),n.stopImmediatePropagation();return}if(this.tool==="door"||this.tool==="window"){this.controls.enabled=!1,this.ignoreClickUp=!0;const D=this.nearestWall(i);D&&D.distance<1.4?(d=(c=this.callbacks).onOpening)==null||d.call(c,D.wall.id,D.t,this.tool):(u=(h=this.callbacks).onNotice)==null||u.call(h,"Click an existing wall to add an opening."),n.stopImmediatePropagation();return}const r=this.hit(n);if(this.tool==="material"){r&&((g=(p=this.callbacks).onFinish)==null||g.call(p,r)),this.controls.enabled=!1,n.stopImmediatePropagation();return}if((r==null?void 0:r.type)==="item"){(m=(b=this.callbacks).onSelect)==null||m.call(b,{type:"item",id:r.id});const D=this.project.items.find(w=>w.id===r.id);D!=null&&D.locked||(this.drag={type:"item",id:r.id,start:i,base:{x:D.x,z:D.z}},(y=(f=this.callbacks).onGestureStart)==null||y.call(f),this.controls.enabled=!1,e.setPointerCapture(n.pointerId),n.stopImmediatePropagation())}else(r==null?void 0:r.type)==="wall"&&((S=this.selection)==null?void 0:S.id)===r.id?(this.drag={type:"wall",id:r.id,start:i,last:{x:0,z:0}},(T=(x=this.callbacks).onGestureStart)==null||T.call(x),this.controls.enabled=!1,e.setPointerCapture(n.pointerId),n.stopImmediatePropagation()):(r==null?void 0:r.type)==="room"&&this.tool==="move-room"&&(this.drag={type:"room",id:r.id,start:i,base:{...this.project.rooms.find(D=>D.id===r.id)}},(R=(A=this.callbacks).onGestureStart)==null||R.call(A),this.controls.enabled=!1,e.setPointerCapture(n.pointerId),n.stopImmediatePropagation())},!0),e.addEventListener("pointermove",n=>{var r,o,l;const i=this.point(n);if(!i)return;const a=((r=this.project)==null?void 0:r.settings.snap)??.1;if(this.drag){const c=In(i.x-this.drag.start.x,a),d=In(i.z-this.drag.start.z,a);(l=(o=this.callbacks).onDrag)==null||l.call(o,this.drag,c,d);return}if(this.drawing){const c={x:In(i.x,a),z:In(i.z,a)};this.drawing.end=c,this.drawPreview(this.drawing.start,c,this.tool);return}if(this.tool==="place"&&this.pending){this.drawGhost(In(i.x,a),In(i.z,a));return}});const t=n=>{var i,a,r,o,l,c,d,h;if(this.ignoreClickUp){this.ignoreClickUp=!1,this.controls.enabled=!0,this.down=null;return}if(this.drag)(a=(i=this.callbacks).onGestureEnd)==null||a.call(i),this.drag=null;else if(this.drawing){const u=this.drawing,p=this.point(n)??u.start,g={x:In(p.x,this.project.settings.snap),z:In(p.z,this.project.settings.snap)};Math.hypot(g.x-u.start.x,g.z-u.start.z)>=(this.tool==="room"?1:.3)?((o=(r=this.callbacks).onDraw)==null||o.call(r,this.tool,u.start,g),this.drawing=null,this.clearPreview()):(c=(l=this.callbacks).onNotice)==null||c.call(l,"Choose the opposite corner"+(this.tool==="wall"?" or the wall end.":"."))}else if(this.tool==="select"&&this.down&&Math.hypot(n.clientX-this.down.x,n.clientY-this.down.y)<5){const u=this.hit(n);(h=(d=this.callbacks).onSelect)==null||h.call(d,u?{type:u.type,id:u.id}:null)}this.controls.enabled=!0,this.down=null};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",()=>{var n,i;this.drag=null,this.drawing=null,this.clearPreview(),this.controls.enabled=!0,(i=(n=this.callbacks).onCancel)==null||i.call(n)})}clearPreview(){as(this.preview),this.ghost=null,this.dirty=!0}drawPreview(e,t,n){this.clearPreview();const i=n==="room"?[[e.x,0,-e.z],[t.x,0,-e.z],[t.x,0,-t.z],[e.x,0,-t.z],[e.x,0,-e.z]]:[[e.x,0,-e.z],[t.x,0,-t.z]],a=new Wt().setFromPoints(i.map(h=>vt(...h))),r=new ds(a,new bs({color:"#426347"}));r.position.y=.12,this.preview.add(r);const o=Math.abs(t.x-e.x),l=Math.abs(t.z-e.z),c=n==="room"?`${o.toFixed(2)} × ${l.toFixed(2)} m`:Math.hypot(o,l).toFixed(2)+" m",d=Na(c,"dimension-label drawing-label");d.position.set((e.x+t.x)/2,.2,-(e.z+t.z)/2),this.preview.add(d)}drawGhost(e,t){if(!this.ghost){this.clearPreview();const n=$t(this.pending),i=new Ni({color:"#748a6b",transparent:!0,opacity:.45,depthWrite:!1});this.ghost=Ve(n.w,.15,n.d,i),this.preview.add(this.ghost)}this.ghost.position.set(e,.13,-t),this.dirty=!0}showGuides(e=[]){as(this.guides),this.dirty=!0;const t=Gs(this.project);for(const n of e){const i=n.axis==="x"?[vt(n.value,.09,-t.minZ-1),vt(n.value,.09,-t.maxZ+1)]:[vt(t.minX-1,.09,-n.value),vt(t.maxX+1,.09,-n.value)],a=new Wt().setFromPoints(i);this.guides.add(new ds(a,new yp({color:"#7f926d",dashSize:.16,gapSize:.12,transparent:!0,opacity:.8}))),this.guides.children.at(-1).computeLineDistances()}}screenshot(){const e=this.selectionGroup.visible;this.selectionGroup.visible=!1,this.renderer.render(this.scene,this.camera);const t=this.renderer.domElement.toDataURL("image/png");return this.selectionGroup.visible=e,t}async thumbnail(e){if(!this.thumbRenderer){this.thumbRenderer=new Kc({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.thumbRenderer.setSize(240,174),this.thumbRenderer.setPixelRatio(1),this.thumbRenderer.toneMapping=so,this.thumbRenderer.toneMappingExposure=1.25,this.thumbScene=new ko,this.thumbScene.environment=this.scene.environment,this.thumbScene.add(new _c("#ffffff","#b9b3a4",3));const d=new Va("#fff4df",3);d.position.set(-4,7,5),this.thumbScene.add(d),this.thumbCamera=new Gt(34,240/174,.01,100)}const t={...e,id:"thumb",catalogId:e.id},n=this.instantiate(t),i=n.userData.size;n.children[0].scale.set(e.w/i.x,e.h/i.y,e.d/i.z),this.colorize(n,t),this.thumbScene.add(n);const a=new cn().setFromObject(n),r=a.getSize(vt()),o=a.getCenter(vt()),l=Math.max(r.x,r.y,r.z);this.thumbCamera.position.copy(o).add(vt(l*1.45,l*.95,l*1.55)),this.thumbCamera.lookAt(o),this.thumbRenderer.render(this.thumbScene,this.thumbCamera);const c=this.thumbRenderer.domElement.toDataURL("image/png");return this.thumbScene.remove(n),n.traverse(d=>{d.material&&(Array.isArray(d.material)?d.material:[d.material]).forEach(h=>h.dispose())}),c}animate(){this.frame=requestAnimationFrame(()=>this.animate());const e=performance.now();if(e-(this.lastFrame??0)<30)return;if(this.lastFrame=e,this.cameraTween){const n=Et((e-this.cameraTween.t)/650,0,1),i=1-Math.pow(1-n,4);this.camera.position.lerpVectors(this.cameraTween.from,this.cameraTween.to,i),this.controls.target.lerpVectors(this.cameraTween.fromTarget,this.cameraTween.target,i),this.dirty=!0,n===1&&(this.cameraTween=null)}const t=this.controls.update();(this.dirty||t)&&(this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera),this.dirty=!1)}destroy(){cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.labelRenderer.domElement.remove(),this.renderer.domElement.remove()}}const Te=s=>document.querySelector(s),Qn=s=>[...document.querySelectorAll(s)],xl={ChevronDown:Wh,Armchair:Oh,BrickWall:Hh,SwatchBook:Eu,LayoutTemplate:su,CircleHelp:Xh,Download:Kh,Undo2:Ru,Redo2:bu,CircleCheck:jh,Pencil:mu,FilePlus2:Yh,House:tu,FolderOpen:Qh,Scan:yu,Box:Bh,Layers2:iu,Camera:Gh,X:Pu,Plus:gu,Minus:cu,Focus:Jh,Ruler:vu,Grid2X2:_d,Magnet:lu,Check:Vh,Sun:wu,MousePointer2:du,Hand:eu,SlidersHorizontal:Su,Search:Mu,BedDouble:zh,Lamp:nu,Flower2:Zh,RotateCcw:_u,RotateCw:xu,CopyPlus:qh,LockKeyhole:ou,LockKeyholeOpen:ru,Trash2:Tu,Link:au,Unlink:Cu,Move:uu,Trees:Au,Bath:kh,Paintbrush:fu,PanelsTopLeft:pu,MoveHorizontal:hu};xl.DoorOpen=$h;xl.Grid2x2=_d;const Vt=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Me=(s,e="")=>`<i data-lucide="${s}" ${e}></i>`,Ut=(s,e,t,n="")=>`<button class="icon-button" type="button" data-action="${t}" aria-label="${e}" title="${e}" ${n}>${Me(s)}</button>`,uh=new URLSearchParams(location.search).get("design")==="garden"?"garden":"studio",fh="builtloop-garden-studio-v1-"+uh;let Wx=!1,hi;try{const s=localStorage.getItem(fh);s&&(hi=_l(s),Wx=!0)}catch{}hi||(hi=_l(JSON.stringify(uh==="garden"?Lh:Ah)));const Je=Hx(hi);var gd;const ie={panel:"furniture",category:"Seating",query:"",tool:"select",view:"3d",selection:hi.items[0]?{type:"item",id:hi.initialSelection??((gd=hi.items.find(s=>s.catalogId==="sofa"))==null?void 0:gd.id)??hi.items[0].id}:null,pending:null,finish:"oak",libraryOpen:innerWidth>760,inspectorOpen:innerWidth>1100,aspect:!1,saved:!0};let Ne,hd,ud,ta=new Map,Za=!1;Te("#app").innerHTML=`
 <header class="topbar">
  <a class="brand" href="#" aria-label="Builtloop Studio"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M10 28V8h9a5 5 0 0 1 0 10H10m9 0a5 5 0 0 1 0 10H10M7 28h20"/></svg><span>Builtloop Studio</span></a>
  <div class="project-menu-wrap"><button class="project-name" data-action="project-menu"><h1 id="project-name"></h1>${Me("chevron-down")}</button><span class="project-type">Your design, your way</span><div id="project-menu" class="popover project-menu" hidden><button data-action="rename">${Me("pencil")} Rename project</button><button data-action="new">${Me("file-plus-2")} Start a blank plan</button><button data-action="example">${Me("house")} Open Garden residence</button><button data-action="import">${Me("folder-open")} Open project file</button><button data-action="export">${Me("download")} Download project</button></div></div>
  <div class="history-actions">${Ut("undo-2","Undo (⌘Z)","undo")}${Ut("redo-2","Redo (⌘⇧Z)","redo")}</div>
  <div class="topbar-right"><span id="save-status" class="save-status">${Me("circle-check")} Saved on this device</span><button class="text-button help-top" data-action="help">${Me("circle-help")} Help</button><button class="primary-button" data-action="export">${Me("download")}<span>Export project</span></button></div>
 </header>
 <div class="editor-body has-inspector">
  <nav class="tool-rail" aria-label="Design tools">
   ${[["furniture","armchair","Furnish"],["build","brick-wall","Build"],["materials","swatch-book","Finishes"],["rooms","layout-template","Spaces"]].map(([s,e,t])=>`<button class="rail-button ${ie.panel===s?"active":""}" data-panel="${s}" aria-label="${t}" aria-pressed="${ie.panel===s}">${Me(e)}<span>${t}</span></button>`).join("")}
   <div class="rail-spacer"></div><button class="rail-button rail-help" data-action="help" aria-label="Help and shortcuts">${Me("circle-help")}<span>Guide</span></button>
  </nav>
  <aside class="library ${ie.libraryOpen?"is-open":""}" aria-label="Design library"><div id="library-content"></div></aside>
  <main class="workspace" aria-label="Home design workspace">
   <div id="scene-host"></div>
   <div class="canvas-top"><div class="view-switch" role="group" aria-label="View"><button data-view="plan" aria-pressed="false">${Me("scan")}<span>2D plan</span></button><button data-view="3d" class="active" aria-pressed="true">${Me("box")}<span>3D view</span></button></div><div class="canvas-options"><button class="surface-button" data-action="cutaway" id="cutaway-btn" aria-pressed="true">${Me("layers-2")}<span>Cutaway</span></button>${Ut("camera","Export a PNG image","photo")}</div></div>
   <div id="canvas-mode" class="canvas-mode" hidden></div>
   <div class="project-summary"><span class="summary-name">Garden residence</span><span id="area-label"></span></div>
   <div id="asset-loading" class="asset-loading"><span class="loading-dot"></span>Preparing your furniture<span id="asset-progress"></span></div>
   <div class="canvas-right"><div class="navigation-controls">${Ut("plus","Zoom in","zoom-in")}${Ut("minus","Zoom out","zoom-out")}<span></span>${Ut("focus","Fit your home in view (F)","fit")}</div><button class="compass" data-action="fit" aria-label="Reset view to north">N<svg viewBox="0 0 24 24"><path d="m12 2 6 18-6-4-6 4z"/></svg></button></div>
   <div class="canvas-bottom"><div class="editing-tools" role="toolbar" aria-label="Canvas tools">${Ut("mouse-pointer-2","Select and move (V)","select",'class="active"')}${Ut("hand","Pan the canvas","pan")}${Ut("ruler","Toggle measurements","dimensions")}${Ut("grid-2x2","Toggle grid (G)","grid")}<span class="toolbar-rule"></span><button class="snap-toggle" data-action="snap-menu" id="snap-button">${Me("magnet")}<span>10 cm</span></button><div id="snap-menu" class="popover snap-menu" hidden><strong>Snap to grid</strong>${[[0,"Off"],[.01,"1 cm"],[.05,"5 cm"],[.1,"10 cm"],[.25,"25 cm"],[.5,"50 cm"]].map(([s,e])=>`<button data-snap="${s}">${e}${Me("check")}</button>`).join("")}</div></div><div class="light-switch"><label for="lighting">${Me("sun")}<span class="sr-only">Lighting</span></label><select id="lighting" aria-label="Lighting"><option value="day">Daylight</option><option value="sunset">Golden hour</option><option value="night">Evening</option></select></div></div>
   <div class="room-focus-strip" id="room-focus-strip"></div>
   <div class="canvas-footer"><span id="canvas-hint">Click to select · drag furniture to move · scroll to zoom</span><button data-action="units" id="units-button">Metres ${Me("chevron-down")}</button></div>
   <button class="mobile-inspector surface-button" data-action="inspector">${Me("sliders-horizontal")} Edit selection</button>
   <div id="webgl-error" class="webgl-error" hidden></div>
  </main>
  <aside class="inspector ${ie.inspectorOpen?"is-open":""}" aria-label="Selection properties"><div id="inspector-content"></div></aside>
 </div>
 <div id="toast" role="status" class="toast" hidden></div>
 <dialog id="dialog" class="dialog"></dialog>
 <input id="project-file" type="file" accept=".json,application/json" hidden/>
`;function bi(){Lu({icons:xl,attrs:{"stroke-width":1.65}})}function Nn(){const s=Je.get(),e=ie.selection;return e?e.type==="site"?s.site:e.type==="item"?s.items.find(t=>t.id===e.id):e.type==="room"?s.rooms.find(t=>t.id===e.id):e.type==="wall"?Jn(s).find(t=>t.id===e.id):s.openings.find(t=>t.id===e.id):null}function Rt(s){const e=Te("#toast");e.textContent=s,e.hidden=!1,clearTimeout(hd),hd=setTimeout(()=>e.hidden=!0,3400)}function Ht(s,{open:e=!0}={}){ie.selection=s,Ne==null||Ne.setSelection(s),s&&e&&(ie.inspectorOpen=!0),ki(),xn()}function Nt(s,e=null){var i,a;ie.tool=s,ie.pending=e,Ne==null||Ne.setTool(s,e);const t={room:"Draw a room: drag between two corners, or click each corner.",wall:"Draw a wall: choose its start and end.",door:"Add a door: click an existing wall.",window:"Add a window: click an existing wall.",place:`Place ${((i=$t(e))==null?void 0:i.name)??"furniture"}: click a spot in your home.`,material:`Apply ${(a=Oi.find(r=>r.id===ie.finish))==null?void 0:a.name}: click a floor or wall.`,pan:"Drag to pan. Scroll or pinch to zoom.","move-room":"Drag a room floor to move the room and its furnishings."},n=Te("#canvas-mode");n.hidden=!t[s],n.innerHTML=t[s]?`${Vt(t[s])}<button data-action="select" aria-label="Cancel tool">${Me("x")}</button>`:"",Qn('[data-action="select"],[data-action="pan"]').forEach(r=>r.classList.toggle("active",r.dataset.action===s)),bi()}function yt(s,e){Je.edit(s,e)}function Ja(s){ie.panel=s,ie.libraryOpen=!0,Qn("[data-panel]").forEach(e=>{e.classList.toggle("active",e.dataset.panel===s),e.setAttribute("aria-pressed",e.dataset.panel===s)}),sa(),xn()}function xn(){const s=ie.inspectorOpen&&!!ie.selection;Te(".editor-body").classList.toggle("has-inspector",s),Te(".library").classList.toggle("is-open",ie.libraryOpen),Te(".library").inert=innerWidth<=760&&!ie.libraryOpen,Te(".inspector").classList.toggle("is-open",s),Te(".inspector").inert=!s,Te(".mobile-inspector").classList.toggle("available",!!ie.selection&&!s)}function ph(){const s=Je.get();Te("#project-name").textContent=s.name,Te(".summary-name").textContent=s.name;const e=s.settings.units==="ft"?10.7639:1;Te("#area-label").textContent=`${(Nx(s)*e).toFixed(1)} ${s.settings.units==="ft"?"ft²":"m²"} indoors${ld(s)?` · ${(ld(s)*e).toFixed(1)} ${s.settings.units==="ft"?"ft²":"m²"} terrace`:""}`,Te("#lighting").value=s.settings.lighting,Te("#units-button").innerHTML=(s.settings.units==="ft"?"Feet":"Metres")+Me("chevron-down"),Te("#snap-button span").textContent=s.settings.snap?`${Math.round(s.settings.snap*100)} cm`:"Snap off",Te("#cutaway-btn").classList.toggle("active",s.settings.cutaway),Te("#cutaway-btn").setAttribute("aria-pressed",s.settings.cutaway),Qn('[data-action="grid"]').forEach(t=>t.classList.toggle("active",s.settings.grid)),Qn('[data-action="dimensions"]').forEach(t=>t.classList.toggle("active",s.settings.dimensions)),Te('[data-action="undo"]').disabled=!Je.canUndo(),Te('[data-action="redo"]').disabled=!Je.canRedo(),Qn("[data-snap]").forEach(t=>{t.classList.toggle("chosen",+t.dataset.snap===s.settings.snap)}),jx()}function jx(){const s=Je.get().rooms.filter(e=>!/bath|powder|laundry|gallery|entry/i.test(e.name));Te("#room-focus-strip").innerHTML=`<button data-action="fit" class="all-spaces">${Me("house")}<span>Whole home</span></button>${s.slice(0,8).map(e=>`<button data-focus="${Vt(e.id)}">${Vt(e.name.replace(" & guest","").replace(" suite",""))}</button>`).join("")}`}function sa(){const s=Te("#library-content"),e=Je.get(),t=Ut("x","Close library","close-library");if(ie.panel==="furniture"){const n=["All",...new Set(ys.map(i=>i.category))];s.innerHTML=`<div class="panel-title"><div><h2>Make it yours.</h2><p>Considered pieces. Endless possibilities.</p></div>${t}</div><div class="search-field">${Me("search")}<input id="catalog-search" type="search" placeholder="Find your perfect piece" aria-label="Search furniture" value="${Vt(ie.query)}"/><kbd>⌕</kbd></div><div class="category-tabs" role="group" aria-label="Furniture category">${n.map(i=>`<button data-category="${i}" class="${ie.category===i?"active":""}" aria-pressed="${ie.category===i}">${i}</button>`).join("")}</div><div class="catalog-section-title"><h3>${Vt(ie.query?"Search results":ie.category==="All"?"The collection":ie.category)}</h3><span id="catalog-count"></span></div><div id="catalog-grid" class="catalog-grid"></div><div class="library-note">${Me("mouse-pointer-2")}Choose a piece, then click to place it.</div>`,Qa()}else ie.panel==="build"?s.innerHTML=`<div class="panel-title"><div><h2>Shape your space.</h2><p>From your first room to the final detail.</p></div>${t}</div><button class="build-option garden-option" data-action="garden">${Me("trees")}<span><strong>Garden & lawn</strong><small>Size your grass plot. Build on top.</small></span></button><h3 class="section-heading">Draw & arrange</h3><div class="build-options">${[["room","layout-template","Draw a room","Drag out a space. Exact dimensions follow.","B"],["wall","brick-wall","Draw a wall","Choose two points. Snap keeps it precise.","W"],["move-room","move","Move a room","Move the room and everything inside.",""]].map(([n,i,a,r,o])=>`<button class="build-option" data-tool="${n}">${Me(i)}<span><strong>${a}</strong><small>${r}</small></span>${o?`<kbd>${o}</kbd>`:""}</button>`).join("")}</div><h3 class="section-heading">Doors & windows</h3><div class="build-options">${[["door","door-open","Add a door","Place into any wall."],["window","panels-top-left","Add a window","Set width, height and sill."]].map(([n,i,a,r])=>`<button class="build-option" data-tool="${n}">${Me(i)}<span><strong>${a}</strong><small>${r}</small></span>${Me("plus")}</button>`).join("")}</div><div class="build-tip">${Me("ruler")}<strong>Built to your measurements.</strong><p>Use the plan view for precise drawing. Select any room or wall to adjust its dimensions.</p></div><button class="secondary-button full" data-action="new">${Me("file-plus-2")} Start a blank plan</button>`:ie.panel==="materials"?s.innerHTML=`<div class="panel-title"><div><h2>A sense of material.</h2><p>Natural finishes, thoughtfully paired.</p></div>${t}</div><div class="material-grid">${Oi.map(n=>`<button class="finish-card ${ie.finish===n.id?"chosen":""}" data-finish="${n.id}" aria-label="Apply ${n.name}"><span class="material-preview ${n.id}" style="--swatch:${n.color}">${ie.finish===n.id?Me("check"):""}</span><strong>${n.name}</strong><small>${n.type}</small></button>`).join("")}</div><div class="build-tip">${Me("paintbrush")}<strong>See it in your space.</strong><p>Choose a finish, then click a floor or wall. Furniture colors live in the selection panel.</p></div>`:s.innerHTML=`<div class="panel-title"><div><h2>Your spaces.</h2><p>${e.rooms.length} ${e.rooms.length===1?"space":"spaces"}, one home.</p></div>${t}</div><div class="spaces-list">${e.rooms.map(n=>{var i;return`<button class="space-row ${((i=ie.selection)==null?void 0:i.id)===n.id?"active":""}" data-room="${Vt(n.id)}">${Me(n.outdoor?"trees":n.id.includes("bath")?"bath":"layout-template")}<span><strong>${Vt(n.name)}</strong><small>${n.w.toFixed(1)} × ${n.d.toFixed(1)} m</small></span><b>${(n.w*n.d).toFixed(1)}<small>m²</small></b></button>`}).join("")||`<div class="empty-library">${Me("layout-template")}<h3>Room for a beginning.</h3><p>Draw your first room to start shaping your home.</p><button class="primary-button" data-tool="room">Draw a room</button></div>`}</div><button class="secondary-button full" data-tool="room">${Me("plus")} Add a room</button>`;bi()}function Qa(){const s={sofa:"couch lounge",armchair:"chair easy chair",vase:"vase pottery ceramic pot",credenza:"cabinet storage dresser",daybed:"couch sofa guest bed",rug:"carpet mat",island:"counter kitchen sink",pendant:"lamp hanging light"},e=ys.filter(t=>(ie.category==="All"||t.category===ie.category)&&(!ie.query||`${t.id} ${t.name} ${t.subtitle} ${t.category} ${s[t.id]??""}`.toLowerCase().includes(ie.query.toLowerCase())));Te("#catalog-count").textContent=`${e.length} pieces`,Te("#catalog-grid").innerHTML=e.map(t=>`<button class="catalog-card ${ie.pending===t.id?"chosen":""}" data-add="${t.id}" aria-label="Place ${t.name}"><span class="catalog-image" data-thumb="${t.id}">${ta.has(t.id)?`<img src="${ta.get(t.id)}" alt="${t.name}"/>`:`<span class="thumbnail-placeholder">${Me(t.category==="Seating"?"armchair":t.category==="Bedroom"?"bed-double":t.category==="Lighting"?"lamp":t.category==="Decor"?"flower-2":"box")}</span>`}<span class="add-piece">${Me("plus")}</span></span><span class="catalog-name">${t.name}</span><span class="catalog-meta">${t.material} · ${Math.round(t.w*100)} cm</span></button>`).join("")||'<div class="empty-library"><h3>No matching pieces.</h3><p>Try a different name or category.</p><button class="text-button" data-action="clear-search">Clear search</button></div>',bi()}function dt(s,e,t,n,{min:i=-100,max:a=100,step:r=.01,disabled:o=!1,reason:l=""}={}){return`<label class="number-field"><span>${s}</span><div><input type="number" data-prop="${e}" aria-label="${s}${n?" ("+n+")":""}" value="${Number(t.toFixed(3))}" min="${i}" max="${a}" step="${r}" ${o?`disabled title="${Vt(l)}"`:""}/><small>${n}</small></div></label>`}function Oa(s){return`<div class="color-swatches">${rh.map(e=>`<button class="color-swatch ${e.color.toLowerCase()===s.toLowerCase()?"chosen":""}" style="--swatch:${e.color}" data-color="${e.color}" aria-label="${e.name} color" title="${e.name}" aria-pressed="${e.color.toLowerCase()===s.toLowerCase()}">${e.color.toLowerCase()===s.toLowerCase()?Me("check"):""}</button>`).join("")}</div><div class="custom-color"><label class="color-picker-label"><input type="color" aria-label="Custom color" data-custom-color value="${s}"/><span>Custom color</span></label><code>${s.toUpperCase()}</code></div>`}function ki(){var l,c;const s=Te("#inspector-content"),e=Nn(),t=ie.selection,n=Je.get();if(!e){s.innerHTML="",xn();return}const i=Ut("x","Close selection panel","close-inspector"),a=n.settings.units==="ft"?"in":"cm",r=n.settings.units==="ft"?39.3701:100,o=(d,h)=>`<div class="inspector-heading"><div><span class="selection-type">${t.type==="item"?"Selected furniture":t.type==="room"?"Selected space":t.type==="wall"?"Selected wall":t.type==="site"?"Garden site":"Selected opening"}</span><h2>${Vt(d)}</h2><p>${Vt(h)}</p></div>${i}</div>`;if(t.type==="item"){const d=$t(e.catalogId),h=zx(n,e.x,e.z);s.innerHTML=o(e.name,`${(h==null?void 0:h.name)??"Unassigned space"} · ${d.material}`)+`<div class="selection-preview" data-thumb="${d.id}">${ta.has(d.id)?`<img src="${ta.get(d.id)}" alt="${Vt(d.name)}"/>`:Me("armchair")}</div><div class="selection-actions">${Ut("rotate-ccw","Rotate 90° left","rotate-left")}${Ut("rotate-cw","Rotate 90° right","rotate-right")}${Ut("copy-plus","Duplicate (⌘D)","duplicate")}${Ut(e.locked?"lock-keyhole":"lock-keyhole-open",e.locked?"Unlock position":"Lock position","lock")}<span></span>${Ut("trash-2","Delete selection","delete")}</div><section class="inspector-section"><div class="section-line"><h3>Dimensions</h3><button class="link-dimensions ${ie.aspect?"active":""}" data-action="aspect" aria-label="Lock aspect ratio" aria-pressed="${ie.aspect}">${Me(ie.aspect?"link":"unlink")}</button></div><div class="field-grid three">${dt("Width","w",e.w*r,a,{min:5,max:3e3,step:1})}${dt("Depth","d",e.d*r,a,{min:5,max:3e3,step:1})}${dt("Height","h",e.h*r,a,{min:1,max:1e3,step:1})}</div><div class="field-grid two position-fields">${dt("Position X","x",e.x,"m")}${dt("Position Y","z",e.z,"m")}</div><div class="rotation-control"><label for="rotation">Rotation</label><input id="rotation" type="range" min="-180" max="180" step="1" value="${((e.r+180)%360+360)%360-180}"/><div class="rotation-number"><input type="number" data-prop="r" aria-label="Rotation (degrees)" value="${Math.round(e.r*10)/10}" step="1" min="-3600" max="3600"/><span>°</span></div></div><details class="elevation-details"><summary>Height above floor ${Me("chevron-down")}</summary>${dt("Elevation","elevation",e.elevation*r,a,{min:0,max:800,step:1})}</details></section><section class="inspector-section"><div class="section-line"><h3>Color & material</h3><span class="finish-name">${((l=rh.find(u=>u.color===e.color))==null?void 0:l.name)??"Custom"}</span></div>${Oa(e.color)}<label class="select-field"><span>Surface</span><select data-prop="material" aria-label="Furniture material">${["Bouclé","Linen","Leather","Wood","Stone","Metal","Ceramic","Foliage","Wool","Opal","Porcelain","Canvas"].map(u=>`<option ${e.material===u?"selected":""}>${u}</option>`).join("")}</select></label></section><div class="inspector-footnote">${Me("move")}Drag this piece to move it. Use the arrow keys for a precise nudge.</div>`}else if(t.type==="site")s.innerHTML=o("Garden & lawn",`${(e.w*e.d).toFixed(0)} m² site · grass & limestone edging`)+`<section class="inspector-section first"><div class="field-grid two">${dt("Plot width","w",e.w,"m",{min:5,max:80,step:.5})}${dt("Plot depth","d",e.d,"m",{min:5,max:80,step:.5})}${dt("Position X","x",e.x,"m")}${dt("Position Y","z",e.z,"m")}</div><p class="field-help">Your home sits on this grass plot. Leave a little space around the rooms for a garden.</p></section><section class="inspector-section"><h3>Grass tone</h3>${Oa(e.color)}</section><div class="inspector-footnote">${Me("trees")}Add olive trees and outdoor furniture from the Outdoor collection.</div>`;else if(t.type==="room")s.innerHTML=o(e.name,`${(e.w*e.d).toFixed(2)} m² · ${e.outdoor?"Outdoor space":"Interior space"}`)+`<section class="inspector-section first"><label class="text-field"><span>Room name</span><input data-prop="name" aria-label="Room name" value="${Vt(e.name)}" maxlength="60"/></label><div class="field-grid two">${dt("Width","w",e.w,"m",{min:1,max:50,step:.1})}${dt("Depth","d",e.d,"m",{min:1,max:50,step:.1})}${dt("Position X","x",e.x,"m")}${dt("Position Y","z",e.z,"m")}</div><div class="field-grid two">${dt("Wall height","height",e.height,"m",{min:1,max:8,step:.1})}${dt("Wall thickness","thickness",e.thickness*100,"cm",{min:5,max:100,step:1})}</div></section><section class="inspector-section"><label class="select-field"><span>Space type</span><select data-prop="outdoor" aria-label="Space type"><option value="false" ${e.outdoor?"":"selected"}>Interior room</option><option value="true" ${e.outdoor?"selected":""}>Outdoor terrace</option></select></label><h3 class="subsection-title">Room edges</h3><div class="edge-toggles">${["north","east","south","west"].map(d=>`<label><input type="checkbox" data-edge="${d}" ${e.edges.includes(d)?"checked":""}/><span>${d.charAt(0).toUpperCase()+d.slice(1)}</span></label>`).join("")}</div><button class="secondary-button full" data-tool="move-room">${Me("move")} Move room & furniture</button></section><section class="inspector-section"><h3>Floor finish</h3><div class="compact-finishes">${Oi.map(d=>`<button data-room-finish="${d.id}" class="${e.floor===d.id?"chosen":""}" title="${d.name}" aria-label="${d.name} floor" style="--swatch:${d.color}">${e.floor===d.id?Me("check"):""}</button>`).join("")}</div><h3 class="subsection-title">Wall color</h3>${Oa(e.wallColor)}</section><button class="text-button danger delete-room" data-action="delete">${Me("trash-2")} Delete room</button>`;else if(t.type==="wall"){const d=Math.hypot(e.x2-e.x1,e.z2-e.z1);s.innerHTML=o("Wall",`${((c=n.rooms.find(h=>h.id===e.roomId))==null?void 0:c.name)??"Custom wall"} · ${d.toFixed(2)} m`)+`<section class="inspector-section first"><div class="field-grid two">${dt("Length","length",d,"m",{min:.3,max:50,step:.1})}${dt("Height","h",e.h,"m",{min:1,max:8,step:.1})}${dt("Thickness","t",e.t*100,"cm",{min:5,max:100,step:1})}${dt("Rotation","wallRotation",Math.atan2(e.z2-e.z1,e.x2-e.x1)*180/Math.PI,"°",{min:-360,max:360,step:1,disabled:!!e.roomId,reason:"Room walls stay square. Draw a custom wall for any angle."})}</div><div class="field-grid two">${dt("Start X","x1",e.x1,"m",{disabled:!!e.roomId&&["north","south"].includes(e.side),reason:"Move the room to adjust this coordinate."})}${dt("Start Y","z1",e.z1,"m",{disabled:!!e.roomId&&["east","west"].includes(e.side),reason:"Move the room to adjust this coordinate."})}</div><p class="field-help">Select a wall, then drag it to reshape the room. Shared room boundaries follow.</p></section><section class="inspector-section"><h3>Wall color</h3>${Oa(e.color)}</section><div class="opening-actions"><button class="secondary-button" data-tool="door">${Me("door-open")} Door</button><button class="secondary-button" data-tool="window">${Me("panels-top-left")} Window</button></div><button class="text-button danger delete-room" data-action="delete">${Me("trash-2")} Remove wall</button>`}else s.innerHTML=o(e.kind==="door"?"Door":"Window","Fitted to the selected wall")+`<section class="inspector-section first"><div class="field-grid two">${dt("Width","w",e.w,"m",{min:.3,max:8,step:.05})}${dt("Height","h",e.h,"m",{min:.3,max:6,step:.05})}${dt("Sill height","sill",e.sill,"m",{min:0,max:5,step:.05})}${dt("Along wall","t",e.t*100,"%",{min:0,max:100,step:1})}</div><label class="select-field"><span>Opening</span><select data-prop="kind" aria-label="Opening type"><option value="door" ${e.kind==="door"?"selected":""}>Door</option><option value="window" ${e.kind==="window"?"selected":""}>Window</option><option value="glass" ${e.kind==="glass"?"selected":""}>Glass panel</option></select></label></section><button class="text-button danger delete-room" data-action="delete">${Me("trash-2")} Remove opening</button>`;if(t.type==="item"){const d=Ox(n,e);if(d.length&&s.insertAdjacentHTML("beforeend",`<div class="placement-warning">${Me("move-horizontal")}<span>${Vt(d[0])}</span></div>`),Ne){const h=$t(e.catalogId);Ne.thumbnail({...h,color:e.color,material:e.material,w:e.w,d:e.d,h:e.h}).then(u=>{var p;if(((p=ie.selection)==null?void 0:p.id)===e.id){const g=Te(".selection-preview");g&&(g.innerHTML=`<img src="${u}" alt="${Vt(e.name)} in the selected finish"/>`)}}).catch(()=>{})}}bi(),xn()}async function fd(s){const e=$t(s);if(!e||!Ne)return;const t=await Ne.thumbnail(e);ta.set(s,t),Qn(`[data-thumb="${s}"]`).forEach(n=>{const i=n.querySelector(".add-piece");n.innerHTML=`<img src="${t}" alt="${Vt(e.name)}"/>`,i&&n.append(i)})}function ui(s){ie.view!==s&&(ie.view=s,Ne.setView(s),Qn("[data-view]").forEach(e=>{e.classList.toggle("active",e.dataset.view===s),e.setAttribute("aria-pressed",e.dataset.view===s)}))}function er(s,e){const t=ie.selection,n=Nn();!t||!n||yt(i=>{if(t.type==="item"){const a=i.items.find(o=>o.id===t.id);let r=e;if(["w","d","h","elevation"].includes(s)){const o=i.settings.units==="ft"?39.3701:100;if(r=e/o,r=Et(r,s==="elevation"?0:s==="h"?.01:.05,s==="elevation"?8:s==="h"?10:30),ie.aspect&&s!=="elevation"){const l=r/a[s];for(const c of["w","d","h"])c!==s&&(a[c]=Et(a[c]*l,.01,30))}}["x","z"].includes(s)&&(r=Et(r,-100,100)),s==="r"&&(r=Et(r,-3600,3600)),a[s]=r}else if(t.type==="site")i.site[s]=e;else if(t.type==="room"){let a=e;if(s==="thickness"&&(a=Et(e/100,.05,1)),s==="height"&&(a=Et(a,1,8)),s==="outdoor"&&(a=e==="true",a)){const r=i.rooms.find(o=>o.id===t.id);r.edges=[],r.floor="limestone",i.openings=i.openings.filter(o=>!o.wallId.startsWith(t.id+":"))}Ya(i,t.id,{[s]:a},["x","z"].includes(s))}else if(t.type==="wall")if(n.roomId){const a=i.rooms.find(r=>r.id===n.roomId);if(s==="h")a.height=Et(e,1,8);else if(s==="t")a.thickness=Et(e/100,.05,1);else if(s==="length")Ya(i,a.id,{[n.side==="north"||n.side==="south"?"w":"d"]:e});else if(s==="x1"||s==="z1"){const r={x:s==="x1"?e-n.x1:0,z:s==="z1"?e-n.z1:0};ch(i,n.id,r)}else s==="wallRotation"&&Rt("Room walls stay square. Draw a custom wall for any angle.")}else{const a=i.walls.find(r=>r.id===n.id);if(s==="t")a.t=Et(e/100,.05,1);else if(s==="length"||s==="wallRotation"){const r=s==="length"?e:Math.hypot(a.x2-a.x1,a.z2-a.z1),o=s==="wallRotation"?e*Math.PI/180:Math.atan2(a.z2-a.z1,a.x2-a.x1);a.x2=a.x1+Math.cos(o)*r,a.z2=a.z1+Math.sin(o)*r}else if(s==="x1"||s==="z1"){const r=e-a[s];a[s]=e,a[s==="x1"?"x2":"z2"]+=r}else a[s]=e}else{const a=i.openings.find(r=>r.id===t.id);a[s]=s==="t"?Et(e/100,0,1):e}})}function vl(s){if(!/^#[0-9a-f]{6}$/i.test(s))return;const e=ie.selection;e&&yt(t=>{if(e.type==="site")t.site.color=s;else if(e.type==="item")t.items.find(n=>n.id===e.id).color=s;else if(e.type==="room")t.rooms.find(n=>n.id===e.id).wallColor=s;else if(e.type==="wall"){const n=Jn(t).find(i=>i.id===e.id);n.roomId?t.rooms.find(i=>i.id===n.roomId).wallColor=s:t.walls.find(i=>i.id===e.id).color=s}})}function mh(){const s=ie.selection;!s||s.type==="site"||(yt(e=>{if(s.type==="item")e.items=e.items.filter(t=>t.id!==s.id);else if(s.type==="room")e.rooms=e.rooms.filter(t=>t.id!==s.id),e.openings=e.openings.filter(t=>!t.wallId.startsWith(s.id+":"));else if(s.type==="wall"){const t=Jn(e).find(n=>n.id===s.id);t.roomId?e.rooms.find(n=>n.id===t.roomId).edges=e.rooms.find(n=>n.id===t.roomId).edges.filter(n=>n!==t.side):e.walls=e.walls.filter(n=>n.id!==s.id),e.openings=e.openings.filter(n=>n.wallId!==s.id)}else e.openings=e.openings.filter(t=>t.id!==s.id)}),Ht(null),Rt("Removed. You can undo this change."))}function gh(){var t;const s=Nn();if(((t=ie.selection)==null?void 0:t.type)!=="item"||!s)return;const e={...gn(s),id:Di(),x:s.x+.4,z:s.z+.4,locked:!1};yt(n=>n.items.push(e)),Ht({type:"item",id:e.id}),Rt("Piece duplicated. Drag it into place.")}function bh(s,e){const t=URL.createObjectURL(s),n=document.createElement("a");n.href=t,n.download=e,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function qo(){const s=Je.get(),e={format:"builtloop-studio",version:1,savedAt:new Date().toISOString(),project:s};bh(new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s.name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+".builtloop.json"),Rt("Project downloaded. Open it here anytime.")}function yl(s,e,t){const n=Te("#dialog");n.innerHTML=`<div class="dialog-heading"><h2>${s}</h2>${Ut("x","Close dialog","close-dialog")}</div>${e}<div class="dialog-actions">${t}</div>`,bi(),n.showModal()}function pd(s=!1){yl(s?"Open the Garden residence?":"Start with a blank plan?",`<p>${s?"This opens the original furnished apartment.":"A fresh canvas for your own home."} Download a copy of your current project first if you want to keep it. You can undo this change during this session.</p>`,`<button class="secondary-button" data-action="backup">Download current project</button><button class="primary-button" data-action="${s?"confirm-example":"confirm-new"}">${s?"Open Garden residence":"Start a new plan"}</button>`)}function Xx(){yl("A little guidance. A lot of possibility.",`<div class="help-steps"><div>${Me("mouse-pointer-2")}<span><strong>Arrange your home</strong>Click furniture to select it. Drag to move, or enter exact measurements in the right panel.</span></div><div>${Me("brick-wall")}<span><strong>Make a room of your own</strong>Open Build. Draw a room or a wall in 2D, then select it to change the dimensions. Add doors and windows by clicking a wall.</span></div><div>${Me("swatch-book")}<span><strong>Find your finish</strong>Change each piece’s color and surface, or choose a floor finish and paint your walls.</span></div></div><div class="shortcuts">${[["V","Select"],["B","Draw room"],["W","Draw wall"],["R","Rotate 15°"],["F","Focus selection"],["G","Show grid"],["1 / 2","Plan / 3D"],["Arrow keys","Nudge 10 cm"],["Shift + arrows","Nudge 1 m"],["⌘Z / ⌘⇧Z","Undo / redo"],["⌘D","Duplicate"],["Delete","Remove selection"]].map(([s,e])=>`<div><kbd>${s}</kbd><span>${e}</span></div>`).join("")}</div><p class="help-save">Projects save automatically on this device. Export a project file to back it up or move it to another device. Room drawing creates rectangular spaces; custom walls can be drawn at any angle.</p>`,'<button class="primary-button" data-action="close-dialog">Make yourself at home</button>')}const Xs={"project-menu":()=>Te("#project-menu").hidden=!Te("#project-menu").hidden,"snap-menu":()=>Te("#snap-menu").hidden=!Te("#snap-menu").hidden,select:()=>Nt("select"),pan:()=>Nt("pan"),undo:()=>{Je.undo(),Nt("select"),Nn()||Ht(null)},redo:()=>{Je.redo(),Nn()||Ht(null)},"zoom-in":()=>Ne.zoom(1.2),"zoom-out":()=>Ne.zoom(1/1.2),fit:()=>Ne.fit(),garden:()=>{Ht({type:"site",id:"site"})},grid:()=>yt(s=>s.settings.grid=!s.settings.grid),dimensions:()=>yt(s=>s.settings.dimensions=!s.settings.dimensions),cutaway:()=>yt(s=>s.settings.cutaway=!s.settings.cutaway),"rotate-left":()=>{var e;const s=Nn();((e=ie.selection)==null?void 0:e.type)==="item"&&er("r",s.r-90)},"rotate-right":()=>{var e;const s=Nn();((e=ie.selection)==null?void 0:e.type)==="item"&&er("r",s.r+90)},duplicate:gh,delete:mh,lock:()=>{var e;const s=Nn();((e=ie.selection)==null?void 0:e.type)==="item"&&yt(t=>t.items.find(n=>n.id===s.id).locked=!s.locked)},aspect:()=>{ie.aspect=!ie.aspect,ki()},"close-inspector":()=>{ie.inspectorOpen=!1,xn()},inspector:()=>{ie.inspectorOpen=!ie.inspectorOpen,xn()},"close-library":()=>{ie.libraryOpen=!1,xn()},help:Xx,"close-dialog":()=>Te("#dialog").close(),new:()=>pd(),example:()=>pd(!0),backup:qo,"confirm-new":()=>{Je.replace(Ux()),Ht(null),Nt("select"),ui("plan"),Ja("build"),Ne.fit(),Te("#dialog").close(),Rt("Your new home starts here. Draw your first room.")},"confirm-example":()=>{const s=Ix();Je.replace(s),Ht({type:"item",id:s.initialSelection}),Nt("select"),ui("3d"),Ne.fit(),Te("#dialog").close()},import:()=>Te("#project-file").click(),export:qo,photo:()=>{bh(qx(Ne.screenshot()),Je.get().name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+".png"),Rt("Your view has been downloaded as a PNG.")},units:()=>yt(s=>s.settings.units=s.settings.units==="m"?"ft":"m"),rename:()=>{yl("Name your home.",`<label class="text-field"><span>Project name</span><input id="rename-project" maxlength="60" value="${Vt(Je.get().name)}"/></label>`,'<button class="secondary-button" data-action="close-dialog">Cancel</button><button class="primary-button" data-action="confirm-rename">Save name</button>'),Te("#rename-project").focus()},"confirm-rename":()=>{const s=Te("#rename-project").value.trim();s&&yt(e=>e.name=s),Te("#dialog").close()},"clear-search":()=>{ie.query="",ie.category="All",sa()}};function qx(s){const[e,t]=s.split(","),n=Uint8Array.from(atob(t),i=>i.charCodeAt(0));return new Blob([n],{type:"image/png"})}document.addEventListener("click",s=>{var t;const e=s.target.closest("button,[data-panel]");if(e){if(e.dataset.action){(t=Xs[e.dataset.action])==null||t.call(Xs),e.dataset.action!=="project-menu"&&(Te("#project-menu").hidden=!0);return}if(e.dataset.panel&&(ie.panel===e.dataset.panel&&innerWidth<760?(ie.libraryOpen=!ie.libraryOpen,xn()):Ja(e.dataset.panel)),e.dataset.category&&(ie.category=e.dataset.category,Qn("[data-category]").forEach(n=>{n.classList.toggle("active",n===e),n.setAttribute("aria-pressed",n===e)}),Qa()),e.dataset.add&&(Nt("place",e.dataset.add),innerWidth<760&&(ie.libraryOpen=!1,xn()),Qa()),e.dataset.tool&&(["room","wall"].includes(e.dataset.tool)&&ui("plan"),Nt(e.dataset.tool),innerWidth<760&&(ie.libraryOpen=!1,xn())),e.dataset.view&&ui(e.dataset.view),e.dataset.color&&vl(e.dataset.color),e.dataset.finish&&(ie.finish=e.dataset.finish,Nt("material"),sa()),e.dataset.roomFinish){const n=ie.selection.id;yt(i=>i.rooms.find(a=>a.id===n).floor=e.dataset.roomFinish)}e.dataset.room&&(Ht({type:"room",id:e.dataset.room}),Ne.focusRoom(e.dataset.room)),e.dataset.focus&&Ne.focusRoom(e.dataset.focus),e.dataset.snap!==void 0&&(yt(n=>n.settings.snap=+e.dataset.snap),Te("#snap-menu").hidden=!0)}});document.addEventListener("input",s=>{var e;if(s.target.id==="catalog-search"&&(ie.query=s.target.value,ie.query&&(ie.category="All",Qn("[data-category]").forEach(t=>{t.classList.toggle("active",t.dataset.category==="All"),t.setAttribute("aria-pressed",t.dataset.category==="All")})),Qa()),s.target.id==="rotation"){Za||(Je.begin(),Za=!0);const t=(e=ie.selection)==null?void 0:e.id;yt(n=>{const i=n.items.find(a=>a.id===t);i&&(i.r=+s.target.value)},{history:!1})}});document.addEventListener("change",s=>{if(s.target.id==="rotation"){Je.end(),Za=!1,ki();return}if(s.target.dataset.prop){let e=s.target.value;if(s.target.type==="number"){if(e.trim()===""||!Number.isFinite(+e)){ki();return}e=Et(+e,s.target.min===""?-1/0:+s.target.min,s.target.max===""?1/0:+s.target.max)}er(s.target.dataset.prop,e)}if(s.target.matches("[data-custom-color]")&&vl(s.target.value),s.target.dataset.edge){const e=ie.selection.id,t=s.target.dataset.edge;yt(n=>{const i=n.rooms.find(a=>a.id===e);i.edges=s.target.checked?[...new Set([...i.edges,t])]:i.edges.filter(a=>a!==t),s.target.checked||(n.openings=n.openings.filter(a=>a.wallId!==`${e}:${t}`))})}s.target.id==="lighting"&&yt(e=>e.settings.lighting=s.target.value)});Te("#project-file").addEventListener("change",async s=>{var t;const e=(t=s.target.files)==null?void 0:t[0];if(e){try{if(e.size>5e6)throw new Error("Choose a project smaller than 5 MB.");const n=_l(await e.text());Je.replace(n),Ht(n.items[0]?{type:"item",id:n.items[0].id}:null),Nt("select"),Ne.fit(),Rt("Your project is open.")}catch(n){Rt(n.message||"The project could not be opened.")}s.target.value=""}});document.addEventListener("keydown",s=>{var i,a;const e=s.target.closest("input,select,textarea,[contenteditable]");if(Te("#dialog").open){s.key==="Enter"&&Te("#rename-project")&&Xs["confirm-rename"]();return}if(e)return;const t=s.metaKey||s.ctrlKey,n=s.key.toLowerCase();if(t&&n==="z"){s.preventDefault(),s.shiftKey?Je.redo():Je.undo();return}if(t&&n==="y"){s.preventDefault(),Je.redo();return}if(t&&n==="d"){s.preventDefault(),gh();return}if(t&&n==="s"){s.preventDefault(),qo();return}if(n==="escape"){Nt("select"),Te("#snap-menu").hidden=!0,Te("#project-menu").hidden=!0;return}if(n==="delete"||n==="backspace"){s.preventDefault(),mh();return}if(n==="r"){const r=Nn();((i=ie.selection)==null?void 0:i.type)==="item"&&er("r",r.r+(s.shiftKey?-15:15))}if(n==="v"&&Nt("select"),n==="b"&&(ui("plan"),Nt("room"),Ja("build")),n==="w"&&(ui("plan"),Nt("wall"),Ja("build")),n==="g"&&Xs.grid(),n==="f"&&Ne.focusSelection(),n==="1"&&ui("plan"),n==="2"&&ui("3d"),["arrowleft","arrowright","arrowup","arrowdown"].includes(n)&&((a=ie.selection)==null?void 0:a.type)==="item"){s.preventDefault();const r=Nn();if(r.locked)return Rt("Unlock this piece before moving it.");const o=s.altKey?.01:s.shiftKey?1:Je.get().settings.snap||.1;yt(l=>{const c=l.items.find(d=>d.id===r.id);c.x+=n==="arrowright"?o:n==="arrowleft"?-o:0,c.z+=n==="arrowup"?o:n==="arrowdown"?-o:0})}});document.addEventListener("pointerdown",s=>{s.target.closest(".project-menu-wrap")||(Te("#project-menu").hidden=!0),s.target.closest(".editing-tools")||(Te("#snap-menu").hidden=!0)});Je.subscribe(s=>{ie.saved=!1,clearTimeout(ud),ud=setTimeout(()=>{try{localStorage.setItem(fh,JSON.stringify(s)),ie.saved=!0,Te("#save-status").innerHTML=Me("circle-check")+" Saved on this device",bi()}catch{Te("#save-status").textContent="Export a file to save this design"}},350),Ne==null||Ne.sync(s),ph(),!Za&&!(Ne!=null&&Ne.drag)&&ki(),ie.panel==="rooms"&&!(Ne!=null&&Ne.drag)&&sa(),bi()});sa();ki();ph();bi();try{Ne=new Vx(Te("#scene-host"),{onSelect:s=>Ht(s),onNotice:Rt,onPlace:({x:s,z:e})=>{if(!ie.pending)return;const t=oh(ie.pending,s,e);yt(n=>n.items.push(t)),Ht({type:"item",id:t.id}),Nt("select"),Rt(`${t.name} placed. Drag to adjust.`)},onDraw:(s,e,t)=>{if(s==="room"){const n={id:Di("room"),name:`Room ${Je.get().rooms.filter(i=>!i.outdoor).length+1}`,x:Math.min(e.x,t.x),z:Math.min(e.z,t.z),w:Math.max(1,Math.abs(e.x-t.x)),d:Math.max(1,Math.abs(e.z-t.z)),height:3.15,thickness:.16,floor:"oak",wallColor:"#d5bea2",edges:["north","east","south","west"],outdoor:!1};yt(i=>i.rooms.push(n)),Ht({type:"room",id:n.id}),Rt(`Room created · ${(n.w*n.d).toFixed(1)} m².`)}else{const n={id:Di("wall"),x1:e.x,z1:e.z,x2:t.x,z2:t.z,h:3.15,t:.16,color:"#d5bea2"};yt(i=>i.walls.push(n)),Ht({type:"wall",id:n.id}),Rt("Wall created. Select it for precise measurements.")}Nt("select")},onOpening:(s,e,t)=>{const n=Jn(Je.get()).find(l=>l.id===s),i=Math.hypot(n.x2-n.x1,n.z2-n.z1);if(i<.5)return Rt("This wall is too short for an opening.");const a=Math.min(t==="door"?.95:1.4,i-.12),r=Et(e,a/(2*i)+.02,1-a/(2*i)-.02);if(Je.get().openings.some(l=>l.wallId===s&&Math.abs(l.t-r)*i<(l.w+a)/2+.08))return Rt("That opening overlaps another. Choose a clear part of the wall.");const o={id:Di("opening"),wallId:s,t:r,w:a,h:t==="door"?Math.min(2.35,n.h-.1):Math.min(1.3,n.h-.9),sill:t==="door"?0:.8,kind:t};yt(l=>l.openings.push(o)),Ht({type:"opening",id:o.id}),Nt("select"),Rt(`${t==="door"?"Door":"Window"} added.`)},onFinish:s=>{const e=Oi.find(t=>t.id===ie.finish);s.type==="room"?(yt(t=>t.rooms.find(n=>n.id===s.id).floor=e.id),Ht({type:"room",id:s.id}),Rt(e.name+" applied to the floor.")):s.type==="wall"?(Ht(s),vl(e.color),Rt(e.name+" applied to the wall.")):Rt("Choose a floor or wall. Edit furniture colors in the selection panel.")},onGestureStart:()=>Je.begin(),onGestureEnd:()=>{Je.end(),Ne.showGuides(),ki()},onCancel:()=>{Je.cancel(),Ne.showGuides()},onDrag:(s,e,t)=>{yt(n=>{if(s.type==="item"){const i=n.items.find(r=>r.id===s.id),a=kx(n,i.id,{x:Et(s.base.x+e,-100,100),z:Et(s.base.z+t,-100,100)});i.x=a.x,i.z=a.z,Ne.showGuides(a.guides)}else if(s.type==="room")Ya(n,s.id,{x:s.base.x+e,z:s.base.z+t},!0);else{const i={x:e-s.last.x,z:t-s.last.z};if(s.id.includes(":"))ch(n,s.id,i);else{const a=n.walls.find(r=>r.id===s.id);a.x1+=i.x,a.x2+=i.x,a.z1+=i.z,a.z2+=i.z}s.last={x:e,z:t}}},{history:!1})},onAsset:(s,e,t)=>{Te("#asset-progress").textContent=` ${e}/${t}`;for(const n of ys.filter(i=>i.model===s))fd(n.id)},onReady:()=>{Te("#asset-loading").hidden=!0,document.documentElement.dataset.ready="true"}}),Ne.sync(Je.get()),Ne.setSelection(ie.selection),Ne.fit(!1),Nt("select");for(const s of ys)fd(s.id);window.builtloop=window.aurel={getProject:()=>gn(Je.get()),getSelection:()=>gn(ie.selection),getCamera:()=>({view:ie.view,position:Ne.camera.position.toArray(),target:Ne.controls.target.toArray()}),projectPoint:(s,e,t=0)=>{const n=new Ne.camera.position.constructor(s,t,-e).project(Ne.camera),i=Ne.renderer.domElement.getBoundingClientRect();return{x:i.left+(n.x+1)/2*i.width,y:i.top+(1-n.y)/2*i.height}}}}catch(s){console.error(s),Te("#asset-loading").hidden=!0;const e=Te("#webgl-error");e.hidden=!1,e.innerHTML='<h2>The 3D canvas couldn’t start.</h2><p>Enable hardware acceleration in your browser, then reload. Your project data is safe on this device.</p><button class="primary-button" onclick="location.reload()">Reload editor</button>'}xn();let md;window.addEventListener("resize",()=>{requestAnimationFrame(xn),clearTimeout(md),md=setTimeout(()=>Ne==null?void 0:Ne.fit(!1),150)});
