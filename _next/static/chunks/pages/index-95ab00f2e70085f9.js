(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9265)}])},9265:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var n,r,i,l,o,a=s(5893),c=s(9008),u=s.n(c),h=s(7294),d=s(9457),f=s.n(d);function m(e){let t=[];for(let s=0;s<e;s++)t.push(s);return t}(n=i||(i={}))[n.Still=1]="Still",n[n.Row=2]="Row",n[n.Column=3]="Column",n[n.Twirl=4]="Twirl",(r=l||(l={}))[r.Floss=1]="Floss",r[r.Shuffle=2]="Shuffle";let p={[l.Floss]:m(6).map(e=>"/assets/frames/a".concat(e,".png")),[l.Shuffle]:m(2).map(e=>"/assets/frames/s".concat(e,".png"))},w=()=>({count:1,danceSpeed:3,moveSpeed:3,layout:i.Still,dance:l.Floss});(o||(o={})).Vengaboys="assets/party.mp3";var g=s(5747),v=s.n(g);function x(e){let t=p[e.settings.dance],s=e.tick+e.offset,n=t[s%t.length],r=5/e.settings.moveSpeed;return(0,a.jsx)("div",{className:[v().dancer,...e.moreClassNames].join(" "),style:{width:e.size+"px",height:e.size+"px"},children:(0,a.jsx)("img",{src:n,style:{animationDuration:"".concat(r,"s")}})})}function _(e){let t=[e.rows,e.cols].join("x");return(0,a.jsx)("section",{className:[v().party,e.className].join(" "),children:m(e.rows).map((s,n)=>(0,a.jsx)("div",{children:m(e.cols).map((s,r)=>(0,a.jsx)(x,{settings:e.settings,size:e.size,tick:e.tick,offset:e.getOffset({ri:n,ci:r}),moreClassNames:e.isReverse({ri:n,ci:r})?[v().reverse]:[]},"grid-".concat(t,"-row-").concat(n,"-col-").concat(r)))},"grid-".concat(t,"-row-").concat(n)))})}function j(e){let t=e.settings.count,s=Math.floor(e.rect.height/e.settings.count),n=Math.floor(e.rect.width/s)+2;return(0,a.jsx)(_,{...e,size:s,rows:t,cols:n,className:v().horizontal,getOffset:e=>e.ri,isReverse:e=>e.ri%2==0})}function b(e){let t=e.settings.count,s=Math.floor(e.rect.width/e.settings.count),n=Math.floor(e.rect.height/s)+2;return(0,a.jsx)(_,{...e,size:s,rows:n,cols:t,className:v().vertical,getOffset:e=>e.ci,isReverse:e=>e.ci%2==0})}function y(e){let t=Math.min(e.rect.width,e.rect.height),s=Math.floor(t/e.settings.count),n=Math.floor(e.rect.height/s),r=Math.floor(e.rect.width/s);return(0,a.jsx)(_,{...e,size:s,rows:n,cols:r,className:v().twirl,getOffset:e=>e.ri+e.ci,isReverse:e=>(e.ri+e.ci)%2==0})}function S(e){let t=Math.min(e.rect.width,e.rect.height),s=Math.floor(t/e.settings.count),n=Math.floor(e.rect.height/s),r=Math.floor(e.rect.width/s);return(0,a.jsx)(_,{...e,size:s,rows:n,cols:r,className:"",getOffset:e=>e.ri+e.ci,isReverse:()=>!1})}function k(e){let{element:t,settings:s}=e,[n,r]=(0,h.useState)({width:800,height:600}),{tick:l}=function(e){let[t,s]=(0,h.useState)(0),n=(0,h.useRef)();return(0,h.useEffect)(()=>{if(clearInterval(n.current),e.settings.danceSpeed>0){let t=Math.floor(1e3/e.settings.danceSpeed);n.current=setInterval(()=>s(e=>e+1),t)}},[e.settings.danceSpeed]),{tick:t}}({settings:s});(0,h.useEffect)(()=>{r(t.getBoundingClientRect()),window.addEventListener("resize",()=>{r(t.getBoundingClientRect())})},[t]);let o={settings:s,rect:n,tick:l};return(0,a.jsxs)(a.Fragment,{children:[s.layout===i.Still&&(0,a.jsx)(S,{...o}),s.layout===i.Row&&(0,a.jsx)(j,{...o}),s.layout===i.Column&&(0,a.jsx)(b,{...o}),s.layout===i.Twirl&&(0,a.jsx)(y,{...o})]})}function C(){let e=(0,h.useRef)(null),[t,s]=(0,h.useState)();return(0,h.useEffect)(()=>{e.current&&s(e.current)},[s]),{element:t,ref:e}}function N(e){let{element:t,ref:s}=C();return(0,a.jsx)("div",{ref:s,style:{width:"300px",height:"300px"},children:t&&(0,a.jsx)(k,{element:t,settings:e.settings})})}var M=s(9387),E=s.n(M);function O(e){return(0,a.jsx)("div",{className:[f().welcome,E().rainbow].join(" "),children:(0,a.jsxs)("main",{className:f().instructions,children:[(0,a.jsx)("div",{children:(0,a.jsx)(N,{settings:e.settings})}),(0,a.jsx)("div",{children:"move your mouse to the right for options"}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:E().hoverbow,onClick:e.onConfirm,children:"LET THE PARTY BEGIN"})}),(0,a.jsxs)("div",{style:{fontStyle:"italic"},children:[(0,a.jsxs)("div",{children:[" a silly thing made by ",(0,a.jsx)("a",{href:"https://twitter.com/mpaulweeks",children:"@mpaulweeks"})]}),(0,a.jsxs)("div",{children:[" with artwork by ",(0,a.jsx)("a",{href:"http://instagram.com/amyjxu",children:"@amyjxu"})]})]})]})})}var R=s(63),F=s.n(R);let z=new class{get src(){var e;return null===(e=this.current)||void 0===e?void 0:e.src}init(){let e=window.localStorage.getItem("audio");e&&this.play(e)}load(e){var t,s;if(e===(null===(t=this.current)||void 0===t?void 0:t.src))return;let n=null!==(s=this.cache.get(e))&&void 0!==s?s:new Audio(e);this.cache.set(e,n),this.current={src:e,elm:n}}play(e){this.load(e),this.current&&(this.current.elm.play(),localStorage.setItem("audio",this.current.src)),this.broadcast()}stop(){var e;null===(e=this.current)||void 0===e||e.elm.pause(),this.current=void 0,localStorage.removeItem("audio"),this.broadcast()}broadcast(){Array.from(this.subscribers.values()).forEach(e=>{e.setIsPlaying(!!this.current)})}sub(e){let t=this.counter++;return this.subscribers.set(t,e),this.broadcast(),()=>this.subscribers.delete(t)}constructor(){this.cache=new Map,this.subscribers=new Map,this.counter=0}};function P(e){return(0,a.jsxs)("section",{className:F().row,children:[(0,a.jsx)("div",{className:F().rowLabel,children:e.data.label}),e.data.opts.map((t,s)=>(0,a.jsx)("div",{className:F().rowButtons,children:t.map((t,s)=>(0,a.jsx)("button",{onClick:()=>e.setSettings(e=>({...e,...t.onClick(e)})),children:t.label},s))},s))]})}function B(e){let t=o.Vengaboys,{isPlaying:s,play:n,stop:r}=function(){let[e,t]=(0,h.useState)(!1);(0,h.useEffect)(()=>{z.init()},[]),(0,h.useEffect)(()=>{let e=z.sub({setIsPlaying:t});return e},[t]);let s=(0,h.useCallback)(e=>{z.play(e)},[]),n=(0,h.useCallback)(()=>{z.stop()},[]);return{isPlaying:e,play:s,stop:n}}(),c=()=>s?r():n(t),u=(e.settings,[{label:"dance",opts:[[{label:"floss",onClick:()=>({dance:l.Floss})},{label:"shuffle",onClick:()=>({dance:l.Shuffle})}],[{label:"slow",onClick:e=>({danceSpeed:Math.max(0,e.danceSpeed-1)})},{label:"reset",onClick:()=>({danceSpeed:w().danceSpeed})},{label:"fast",onClick:e=>({danceSpeed:Math.min(10,e.danceSpeed+1)})}]]},{label:"movement",opts:[[{label:"still",onClick:()=>({layout:i.Still})},{label:"row",onClick:()=>({layout:i.Row})},{label:"col",onClick:()=>({layout:i.Column})},{label:"twirl",onClick:()=>({layout:i.Twirl})}],[{label:"slow",onClick:e=>({moveSpeed:Math.max(1,e.moveSpeed-1)})},{label:"reset",onClick:()=>({moveSpeed:w().moveSpeed})},{label:"fast",onClick:e=>({moveSpeed:Math.min(10,e.moveSpeed+1)})}]]},{label:"count",opts:[[{label:"fewer",onClick:e=>({count:Math.max(1,e.count-1)})},{label:"reset",onClick:()=>({count:w().count})},{label:"more",onClick:e=>({count:Math.min(10,e.count+1)})}]]}]);return(0,a.jsx)("aside",{className:F().overlayOuter,children:(0,a.jsxs)("section",{className:F().overlayInner,children:[(0,a.jsxs)("section",{className:F().row,children:[(0,a.jsx)("div",{className:F().rowLabel,children:"audio"}),(0,a.jsx)("div",{className:F().rowButtons,children:(0,a.jsx)("button",{onClick:c,children:s?"ON":"OFF"})})]}),u.map((t,s)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:F().gap}),(0,a.jsx)(P,{...e,data:t},s)]}))]})})}var I=s(8712),T=s.n(I);function L(e){let{element:t,ref:s}=C();return(0,a.jsx)("div",{ref:s,className:[T().fullscreen,E().rainbow].join(" "),children:t&&(0,a.jsx)(k,{element:t,settings:e.settings})})}function A(){let[e,t]=(0,h.useState)(w()),[s,n]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{window.location.search.includes("skip")&&n(!0)},[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u(),{children:[(0,a.jsx)("title",{children:"Floss"}),(0,a.jsx)("link",{rel:"shortcut icon",href:"favicon.png"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{property:"og:url",content:"https://floss.mpaulweeks.com"}),(0,a.jsx)("meta",{property:"og:type",content:"video.other"}),(0,a.jsx)("meta",{property:"og:title",content:"floss"}),(0,a.jsx)("meta",{property:"og:description",content:"dead meme"}),(0,a.jsx)("meta",{property:"og:image",content:"https://floss.mpaulweeks.com/favicon.png"})]}),(0,a.jsxs)("main",{className:E().rainbow,children:[s?(0,a.jsx)(L,{settings:e}):(0,a.jsx)(O,{settings:e,onConfirm:()=>n(!0)}),(0,a.jsx)(B,{settings:e,setSettings:t})]})]})}},8712:function(e){e.exports={fullscreen:"Fullscreen_fullscreen__fBgZV"}},63:function(e){e.exports={overlayOuter:"Overlay_overlayOuter__GxEOW",overlayInner:"Overlay_overlayInner__TUvY2",gap:"Overlay_gap__HSvDy",row:"Overlay_row__pE4fg",rowLabel:"Overlay_rowLabel__Bu0Yl",rowButtons:"Overlay_rowButtons__u4ofv"}},5747:function(e){e.exports={party:"Party_party__xfzBt",dancer:"Party_dancer__XfhFA",horizontal:"Party_horizontal__VgdKx",slideRight:"Party_slideRight__AAU1n",vertical:"Party_vertical__rCfp2",slideDown:"Party_slideDown__XFPcS",twirl:"Party_twirl__DsLoK",reverse:"Party_reverse__SyEV3"}},9387:function(e){e.exports={rainbow:"Rainbow_rainbow___kbQ2",hoverbow:"Rainbow_hoverbow__C5l71"}},9457:function(e){e.exports={welcome:"Splash_welcome__tlKW7",instructions:"Splash_instructions__7E5hJ"}},9008:function(e,t,s){e.exports=s(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);