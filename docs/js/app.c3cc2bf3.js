(()=>{"use strict";var e={6618:(e,t,r)=>{r(8964),r(702);var o=r(1957),n=r(1947),a=r(499),s=r(9835);function i(e,t,r,o,n,a){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}const l=(0,s.aZ)({name:"App"});var u=r(1639);const c=(0,u.Z)(l,[["render",i]]),d=c;var p=r(3340),f=r(1809);const h=(0,p.h)((()=>{const e=(0,f.WB)({});return e}));var b=r(8339);const v=[{path:"/reset-password",component:()=>Promise.all([r.e(736),r.e(913)]).then(r.bind(r,6913))},{path:"/unsubscribe-newsletter",component:()=>Promise.all([r.e(736),r.e(423)]).then(r.bind(r,143))},{path:"/",component:()=>Promise.all([r.e(736),r.e(712)]).then(r.bind(r,6712)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(944)]).then(r.bind(r,1944))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=v,g=(0,p.BC)((function(){const e=b.r5,t=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function y(e,t){const r=e(d);r.use(n.Z,t);const o="function"===typeof h?await h({}):h;r.use(o);const s=(0,a.Xl)("function"===typeof g?await g({store:o}):g);return o.use((({store:e})=>{e.router=s})),{app:r,store:o,router:s}}var w=r(6950),P=r(4328);const _={config:{loading:{},notify:{position:"top-right",progress:!1,color:"red-2",textColor:"black",timeout:2e3}},plugins:{Loading:w.Z,Notify:P.Z}},j="";async function C({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:i,publicPath:j})}catch(l){return l&&l.url?void s(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}y(o.ri,_).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1354)),Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));C(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>s,default:()=>i});var o=r(3340),n=r(9981),a=r.n(n);const s=a().create({baseURL:"https://api.app-session.com/api/web/",crossdomain:!0,headers:{"Content-Type":"application/json",Accept:"application/json"}}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=s}))},1354:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(3340),n=r(7712);const a={failed:"Action failed",success:"Action was successful",header:{title:"Session"},auth:{reset_password:"Mot de passe oublié",reset_password_explanation:"Indique ton nouveau mot de passe :",new_password:"Nouveau mot de passe",password_changed:"Ton mot de passe a été changé avec succès ! Tu peux désormais te reconnecter."},email:{unsubscribing:"Désabonnement...",unsubscribe:"Se désabonner",do_you_want_unsubscribe:"Voulez-vous vraiment vous désabonner de nos emails ?"},others:{send:"Envoyer",error_happened:"Une erreur est survenue"}},s={fr:a},i=(0,o.xr)((({app:e})=>{const t=(0,n.o)({locale:"fr",globalInjection:!0,messages:s});e.use(t)}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var s=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{423:"33b4da3d",712:"4bf2ab67",862:"d945d10c",913:"330b12c7",944:"801b0add"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"ecf0a5f6",423:"6f21cb18",712:"d3e904f1",736:"cac961fa",913:"714cbc2f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="session-web:";r.l=(o,n,a,s)=>{if(e[o])e[o].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[n];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var s=r.miniCssF(o),i=r.p+s;if(t(s,i))return n();e(o,i,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={423:1,712:1,913:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var s=r.p+r.u(t),i=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,n[1](i)}};r.l(s,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[s,i,l]=o,u=0;if(s.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var c=l(r)}for(t&&t(o);u<s.length;u++)a=s[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=globalThis["webpackChunksession_web"]=globalThis["webpackChunksession_web"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(6618)));o=r.O(o)})();