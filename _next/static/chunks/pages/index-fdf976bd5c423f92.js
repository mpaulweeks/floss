(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9265)}])},9265:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var n,i,l,r,o,a=s(5893),c=s(9008),u=s.n(c),h=s(7294),d=s(9457),f=s.n(d);function m(e){let t=[];for(let s=0;s<e;s++)t.push(s);return t}(n=l||(l={}))[n.Still=1]="Still",n[n.Row=2]="Row",n[n.Column=3]="Column",n[n.Twirl=4]="Twirl",(i=r||(r={}))[i.Floss=1]="Floss",i[i.Shuffle=2]="Shuffle";let p={[r.Floss]:m(6).map(e=>"/assets/frames/a".concat(e,".png")),[r.Shuffle]:m(2).map(e=>"/assets/frames/s".concat(e,".png"))},v=()=>({count:1,danceSpeed:3,moveSpeed:3,layout:l.Still,dance:r.Floss});(o||(o={})).Vengaboys="assets/party.mp3";var w=s(5747),g=s.n(w);function x(e){let t=p[e.settings.dance],s=e.tick+e.offset,n=t[s%t.length],i=5/e.settings.moveSpeed;return(0,a.jsx)("div",{className:[g().dancer,...e.moreClassNames].join(" "),style:{width:e.size+"px",height:e.size+"px"},children:(0,a.jsx)("img",{src:n,style:{animationDuration:"".concat(i,"s")}})})}function _(e){let t=[e.rows,e.cols].join("x");return(0,a.jsx)("section",{className:[g().party,e.className].join(" "),children:m(e.rows).map((s,n)=>(0,a.jsx)("div",{children:m(e.cols).map((s,i)=>(0,a.jsx)(x,{settings:e.settings,size:e.size,tick:e.tick,offset:e.getOffset({ri:n,ci:i}),moreClassNames:e.isReverse({ri:n,ci:i})?[g().reverse]:[]},"grid-".concat(t,"-row-").concat(n,"-col-").concat(i)))},"grid-".concat(t,"-row-").concat(n)))})}function b(e){let t=e.settings.count,s=Math.floor(e.rect.height/e.settings.count),n=Math.floor(e.rect.width/s)+2;return(0,a.jsx)(_,{...e,size:s,rows:t,cols:n,className:g().horizontal,getOffset:e=>e.ri,isReverse:e=>e.ri%2==0})}function j(e){let t=e.settings.count,s=Math.floor(e.rect.width/e.settings.count),n=Math.floor(e.rect.height/s)+2;return(0,a.jsx)(_,{...e,size:s,rows:n,cols:t,className:g().vertical,getOffset:e=>e.ci,isReverse:e=>e.ci%2==0})}function y(e){let t=Math.min(e.rect.width,e.rect.height),s=Math.floor(t/e.settings.count),n=Math.floor(e.rect.height/s),i=Math.floor(e.rect.width/s);return(0,a.jsx)(_,{...e,size:s,rows:n,cols:i,className:g().twirl,getOffset:e=>e.ri+e.ci,isReverse:e=>(e.ri+e.ci)%2==0})}function S(e){let t=Math.min(e.rect.width,e.rect.height),s=Math.floor(t/e.settings.count),n=Math.floor(e.rect.height/s),i=Math.floor(e.rect.width/s);return(0,a.jsx)(_,{...e,size:s,rows:n,cols:i,className:"",getOffset:e=>e.ri+e.ci,isReverse:()=>!1})}function k(e){let{element:t,settings:s}=e,[n,i]=(0,h.useState)({width:800,height:600}),{tick:r}=function(e){let[t,s]=(0,h.useState)(0),n=(0,h.useRef)();return(0,h.useEffect)(()=>{if(clearInterval(n.current),e.settings.danceSpeed>0){let t=Math.floor(1e3/e.settings.danceSpeed);n.current=setInterval(()=>s(e=>e+1),t)}},[e.settings.danceSpeed]),{tick:t}}({settings:s});(0,h.useEffect)(()=>{i(t.getBoundingClientRect()),window.addEventListener("resize",()=>{i(t.getBoundingClientRect())})},[t]);let o={settings:s,rect:n,tick:r};return(0,a.jsxs)(a.Fragment,{children:[s.layout===l.Still&&(0,a.jsx)(S,{...o}),s.layout===l.Row&&(0,a.jsx)(b,{...o}),s.layout===l.Column&&(0,a.jsx)(j,{...o}),s.layout===l.Twirl&&(0,a.jsx)(y,{...o})]})}function C(){let e=(0,h.useRef)(null),[t,s]=(0,h.useState)();return(0,h.useEffect)(()=>{e.current&&s(e.current)},[s]),{element:t,ref:e}}function N(e){let{element:t,ref:s}=C();return(0,a.jsx)("div",{ref:s,style:{width:"300px",height:"300px"},children:t&&(0,a.jsx)(k,{element:t,settings:e.settings})})}var M=s(9387),O=s.n(M);function R(e){return(0,a.jsx)("div",{className:[f().welcome,O().rainbow].join(" "),onClick:()=>e.setShowOverlay(!1),children:(0,a.jsxs)("main",{className:f().instructions,children:[(0,a.jsx)("div",{onClick:t=>{t.stopPropagation(),e.setShowOverlay(e=>!e)},children:(0,a.jsx)(N,{settings:e.settings})}),(0,a.jsx)("div",{className:"desktop",children:"click the man for options"}),(0,a.jsx)("div",{className:"mobile",children:"tap the man for options"}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:O().hoverbow,onClick:e.onConfirm,children:"PARTY TIME"})}),(0,a.jsxs)("div",{style:{fontStyle:"italic"},children:[(0,a.jsxs)("div",{children:[" a silly thing made by ",(0,a.jsx)("a",{href:"https://twitter.com/mpaulweeks",children:"@mpaulweeks"})]}),(0,a.jsxs)("div",{children:[" with artwork by ",(0,a.jsx)("a",{href:"http://instagram.com/amyjxu",children:"@amyjxu"})]})]})]})})}var E=s(63),P=s.n(E);let z=new class{get src(){var e;return null===(e=this.current)||void 0===e?void 0:e.src}init(){let e=window.localStorage.getItem("audio");e&&this.play(e)}load(e){var t,s;if(e===(null===(t=this.current)||void 0===t?void 0:t.src))return;let n=null!==(s=this.cache.get(e))&&void 0!==s?s:new Audio(e);this.cache.set(e,n),this.current={src:e,elm:n}}play(e){this.load(e),this.current&&(this.current.elm.play(),localStorage.setItem("audio",this.current.src)),this.broadcast()}stop(){var e;null===(e=this.current)||void 0===e||e.elm.pause(),this.current=void 0,localStorage.removeItem("audio"),this.broadcast()}broadcast(){Array.from(this.subscribers.values()).forEach(e=>{e.setIsPlaying(!!this.current)})}sub(e){let t=this.counter++;return this.subscribers.set(t,e),this.broadcast(),()=>this.subscribers.delete(t)}constructor(){this.cache=new Map,this.subscribers=new Map,this.counter=0}};function F(e){return(0,a.jsxs)("section",{className:P().row,children:[(0,a.jsx)("div",{className:P().rowLabel,children:e.data.label}),e.data.opts.map((t,s)=>(0,a.jsx)("div",{className:P().rowButtons,children:t.map((t,s)=>(0,a.jsx)("button",{onClick:()=>e.setSettings(e=>({...e,...t.onClick(e)})),children:t.label},s))},s))]})}function B(e){let{isPlaying:t,play:s,stop:n}=function(){let[e,t]=(0,h.useState)(!1);(0,h.useEffect)(()=>{z.init()},[]),(0,h.useEffect)(()=>{let e=z.sub({setIsPlaying:t});return e},[t]);let s=(0,h.useCallback)(e=>{z.play(e)},[]),n=(0,h.useCallback)(()=>{z.stop()},[]);return{isPlaying:e,play:s,stop:n}}(),i=o.Vengaboys,c=()=>t?n():s(i),u=(e.settings,[{label:"dance",opts:[[{label:"floss",onClick:()=>({dance:r.Floss})},{label:"shuffle",onClick:()=>({dance:r.Shuffle})}],[{label:"slow",onClick:e=>({danceSpeed:Math.max(0,e.danceSpeed-1)})},{label:"reset",onClick:()=>({danceSpeed:v().danceSpeed})},{label:"fast",onClick:e=>({danceSpeed:Math.min(10,e.danceSpeed+1)})}]]},{label:"movement",opts:[[{label:"still",onClick:()=>({layout:l.Still})},{label:"hori",onClick:()=>({layout:l.Row})},{label:"vert",onClick:()=>({layout:l.Column})},{label:"twirl",onClick:()=>({layout:l.Twirl})}],[{label:"slow",onClick:e=>({moveSpeed:Math.max(1,e.moveSpeed-1)})},{label:"reset",onClick:()=>({moveSpeed:v().moveSpeed})},{label:"fast",onClick:e=>({moveSpeed:Math.min(10,e.moveSpeed+1)})}]]},{label:"count",opts:[[{label:"fewer",onClick:e=>({count:Math.max(1,e.count-1)})},{label:"reset",onClick:()=>({count:v().count})},{label:"more",onClick:e=>({count:Math.min(10,e.count+1)})}]]}]),d=[P().overlay,e.visible?P().visible:P().hidden].join(" ");return(0,a.jsxs)("aside",{className:d,children:[(0,a.jsxs)("section",{className:P().row,children:[(0,a.jsx)("div",{className:P().rowLabel,children:"music"}),(0,a.jsx)("div",{className:P().rowButtons,children:(0,a.jsx)("button",{onClick:c,children:t?"ON":"OFF"})})]}),u.map((t,s)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:P().gap}),(0,a.jsx)(F,{...e,data:t},s)]},s))]})}var T=s(8712),I=s.n(T);function A(e){let{element:t,ref:s}=C();return(0,a.jsx)("div",{ref:s,className:[I().fullscreen,O().rainbow].join(" "),onClick:()=>e.setShowOverlay(e=>!e),children:t&&(0,a.jsx)(k,{element:t,settings:e.settings})})}function L(){let[e,t]=(0,h.useState)(v()),[s,n]=(0,h.useState)(!1),[i,l]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{window.location.search.includes("skip")&&l(!0)},[l]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u(),{children:[(0,a.jsx)("title",{children:"Floss"}),(0,a.jsx)("link",{rel:"shortcut icon",href:"favicon.png"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{property:"og:url",content:"https://floss.mpaulweeks.com"}),(0,a.jsx)("meta",{property:"og:type",content:"video.other"}),(0,a.jsx)("meta",{property:"og:title",content:"floss"}),(0,a.jsx)("meta",{property:"og:description",content:"dead meme"}),(0,a.jsx)("meta",{property:"og:image",content:"https://floss.mpaulweeks.com/favicon.png"})]}),(0,a.jsxs)("main",{className:O().rainbow,children:[i?(0,a.jsx)(A,{settings:e,setShowOverlay:n}):(0,a.jsx)(R,{settings:e,setShowOverlay:n,onConfirm:()=>l(!0)}),(0,a.jsx)(B,{visible:s,setVisible:n,settings:e,setSettings:t})]})]})}},8712:function(e){e.exports={fullscreen:"Fullscreen_fullscreen__fBgZV"}},63:function(e){e.exports={overlay:"Overlay_overlay__vCPt_",visible:"Overlay_visible__1tU03",hidden:"Overlay_hidden__f0kKa",gap:"Overlay_gap__HSvDy",row:"Overlay_row__pE4fg",rowLabel:"Overlay_rowLabel__Bu0Yl",rowButtons:"Overlay_rowButtons__u4ofv"}},5747:function(e){e.exports={party:"Party_party__xfzBt",dancer:"Party_dancer__XfhFA",horizontal:"Party_horizontal__VgdKx",slideRight:"Party_slideRight__AAU1n",vertical:"Party_vertical__rCfp2",slideDown:"Party_slideDown__XFPcS",twirl:"Party_twirl__DsLoK",reverse:"Party_reverse__SyEV3"}},9387:function(e){e.exports={rainbow:"Rainbow_rainbow___kbQ2",hoverbow:"Rainbow_hoverbow__C5l71"}},9457:function(e){e.exports={welcome:"Splash_welcome__tlKW7",instructions:"Splash_instructions__7E5hJ"}},9008:function(e,t,s){e.exports=s(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);