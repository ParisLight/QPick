import{f as P,o as t,c as i,a as s,u as o,t as a,h as _,d as m,w as p,_ as k,i as h,F as f,j as w,T as b,k as y}from"./index.ce798182.js";import{_ as L,a as C,b as F,c as $,d as x,e as B,f as j,g as A,h as S,i as E,j as N,k as Q,l as R,m as U}from"./star.50a98910.js";import{a as V}from"./Footer.01cf9030.js";const G="/QPick/assets/star.f1fcb8fe.svg";const O={class:"item"},T={key:0,class:"item__wrapper"},D={href:"#",class:"link item__link"},I={class:"img-wrapper"},Y=["src"],Z={class:"item__description item__covers"},q={key:0,class:"description"},z={key:1,class:"item__wrapper"},H=["src"],J=["src"],K={class:"item__description"},M={key:0,class:"description"},W={key:1,class:"price"},X={key:2,class:"newPrice"},ee={class:"newPrice-count price"},se={class:"newPrice__price"},te={key:3,class:"sale"},ie={class:"newPrice sale__newPrice"},ae={class:"newPrice-count sale__newPrice-count"},_e={class:"newPrice__price sale__newPrice-wrapper"},ne={class:"sale__newPrice-inner"},oe={class:"sale-percent"},ce={class:"grade"},re=s("img",{src:G,class:"star",alt:"star"},null,-1),le={class:"rate item__rate"},de={__name:"Card",props:{item:{type:Object},functions:{type:Function}},setup(c){const e=c,l=V(),d=new URL(Object.assign({"../assets/mainPage/Airpods.png":L,"../assets/mainPage/Apple BYZ S8521.png":C,"../assets/mainPage/Apple EarPods.png":F,"../assets/mainPage/Apple EarPods2.png":$,"../assets/mainPage/Backgroundcard.jpg":x,"../assets/mainPage/Gerlax gh-04.png":B,"../assets/mainPage/borofone bo4.png":j,"../assets/mainPage/glasses.png":A,"../assets/mainPage/iPhone-13-Banner.png":S,"../assets/mainPage/leather.png":E,"../assets/mainPage/like.svg":N,"../assets/mainPage/liked.svg":Q,"../assets/mainPage/silicone.png":R,"../assets/mainPage/star.svg":U})[`../assets/mainPage/${e.item.img}`],self.location),r=new URL("/QPick/assets/like.30e1d8c2.svg",self.location),u=new URL("/QPick/assets/liked.4b5ce0b2.svg",self.location);return(ue,n)=>{const g=P("router-link");return t(),i("div",O,[e.item.price?_("",!0):(t(),i("div",T,[s("a",D,[s("div",I,[s("img",{src:o(d),alt:"item",class:"item-img"},null,8,Y)]),s("div",Z,[e.item.name?(t(),i("div",q,a(e.item.name),1)):_("",!0)])])])),e.item.price?(t(),i("div",z,[s("div",{class:"like item__like",onClick:n[1]||(n[1]=v=>o(l).addProduct(e.item,e.item.addFavorites))},[s("img",{onClick:n[0]||(n[0]=v=>e.item.addFavorites=!e.item.addFavorites),src:e.item.addFavorites?o(u):o(r),alt:"like"},null,8,H)]),m(g,{onClick:n[2]||(n[2]=v=>e.functions(c.item)),to:"/Product",class:"img-wrapper link"},{default:p(()=>[s("img",{src:o(d),alt:"item",class:"item-img"},null,8,J)]),_:1}),m(g,{to:"/Product",class:"item-bottom link"},{default:p(()=>[s("div",K,[e.item.name?(t(),i("div",M,a(e.item.name),1)):_("",!0),e.item.price&&!e.item.newPrice?(t(),i("div",W,a(e.item.price)+" \u20B8 ",1)):_("",!0),e.item.newPrice&&!e.item.sale?(t(),i("div",X,[s("div",ee,a(e.item.newPrice)+"\u20B8 ",1),s("div",se,a(e.item.price)+" \u20B8 ",1)])):_("",!0),e.item.sale?(t(),i("div",te,[s("div",ie,[s("span",ae,a(e.item.newPrice)+"\u20B8 ",1),s("div",_e,[s("div",ne,a(e.item.price)+" \u20B8",1)])]),s("div",oe,"-"+a(e.item.sale)+"%",1)])):_("",!0)]),s("div",ce,[re,s("span",le,a(e.item.grade),1)])]),_:1})])):_("",!0)])}}};const me={class:"list"},pe={class:"title"},ge={class:"list__wrapper"},ve={__name:"ListCards",props:{itemsList:{type:Array},functions:{type:Function}},setup(c){const e=c;return(l,d)=>(t(),i("section",me,[s("h3",pe,[h(l.$slots,"default",{},void 0,!0)]),s("div",ge,[m(b,{name:"list"},{default:p(()=>[(t(!0),i(f,null,w(e.itemsList,r=>(t(),y(de,{key:r.id,item:r,functions:e.functions,class:"list-item"},null,8,["item","functions"]))),128))]),_:1})])]))}},fe=k(ve,[["__scopeId","data-v-06dcdcf3"]]);export{fe as L};
