(function(){"use strict";var e={555:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(947),s=e([r]);r=(s.then?(await s)():s)[0];const a=r.Z;t.Z=a,o()}catch(a){o(a)}}))},112:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(252),s=n(262),a=n(577),i=n(605),l=n(305),c=n(787),u=n(869),d=n(161),f=n(614),v=e([i,u,f]);[i,u,f]=v.then?(await v)():v;const g={class:"flex w-screen h-screen overflow-y-hidden"},w={class:"ml-4 prose lg:prose-xl w-3/4 flex overflow-y-auto text-clip break-all"},h=(0,r._)("div",{class:"flex-grow"},null,-1),p={class:"btns flex space-x-4"},m=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-16 h-16 p-2"},[(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),y=[m],b=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-16 h-16 p-2"},[(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1),k=[b],_=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-16 h-16 p-2"},[(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),x=[_],C=(0,r._)("div",{class:"z-20 text-gray-400 p-2 absolute bottom-0 right-0 text-sm"},"Notes are Auto-saved",-1);t.Z={__name:"App",setup(e){const{deleteNote:t,currentNote:n,showSuccess:o,saveSuccess:v,storeNote:m}=(0,f.Z)(),b=(0,s.iH)(!1),_=(0,s.iH)(!1),S=()=>{b.value=!0},Z=()=>{b.value=!1},j=async()=>{await t(n),b.value=!1};return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,s.SU)(o)?((0,r.wg)(),(0,r.j4)(l.Z,{key:0,message:"Success",type:"success"})):(0,r.kq)("",!0),(0,s.SU)(v)?((0,r.wg)(),(0,r.j4)(l.Z,{key:1,message:"Saving...",type:"info"})):(0,r.kq)("",!0),(0,r._)("div",g,[(0,r._)("div",{class:(0,a.C_)(["py-4 border-r-2 border-gray-300 bg-gray-200 flex flex-col flex-shrink-0 md:w-1/4",{"w-[42%]":_.value,"md:w-1/4":_.value,hidden:!_.value}])},[(0,r.Wm)(u.Z)],2),(0,r.Wm)(c.Z),(0,r._)("article",w,[(0,r.Wm)(i.Z),h,(0,r._)("div",p,[(0,r._)("button",{class:"absolute bottom-9 right-2 text-white rounded-full bg-green-500 outline-none hover:scale-110",onClick:t[0]||(t[0]=e=>(0,s.SU)(m)("",null))},y),(0,r._)("button",{class:"absolute top-2 right-2 text-white rounded-full bg-blue-500 outline-none hover:scale-110",onClick:t[1]||(t[1]=e=>_.value=!_.value)},k),(0,s.SU)(n)?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:S,class:"absolute bottom-9 right-24 text-white rounded-full bg-red-500 outline-none hover:scale-110"},x)):(0,r.kq)("",!0)]),C])]),(0,r.Wm)(d.Z,{isOpen:b.value,title:"Really Delete?",message:"Once done, there's no going back!",onConfirm:j,onClose:Z,yesText:"Shred away!",noText:"Keep Note"},null,8,["isOpen"])],64))}},o()}catch(g){o(g)}}))},305:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(252),r=n(963),s=n(577),a=n(262),i={__name:"Blinkr",props:{message:String,type:{type:String,default:"info"},duration:{type:Number,default:3e3}},setup(e){const t=e,n=(0,a.iH)(!1);return(0,o.m0)((()=>{n.value=!0,setTimeout((()=>{n.value=!1}),t.duration)})),(t,a)=>((0,o.wg)(),(0,o.j4)(r.uT,{name:"fade"},{default:(0,o.w5)((()=>[n.value?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,s.C_)(["binkr-flash-message",e.type])},(0,s.zw)(e.message),3)):(0,o.kq)("",!0)])),_:1}))}},l=n(744);const c=(0,l.Z)(i,[["__scopeId","data-v-2720d452"]]);var u=c},869:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(685),s=e([r]);r=(s.then?(await s)():s)[0];const a=r.Z;t.Z=a,o()}catch(a){o(a)}}))},795:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(252),s=n(577),a=n(262),i=n(614),l=e([i]);i=(l.then?(await l)():l)[0];const c={class:"sidebar-content overflow-y-auto"},u=(0,r._)("div",{class:"flex justify-between m-2 p-2"},[(0,r._)("button",{class:"text-gray-bg-gray-500 p-2"},"All Notes ")],-1),d=["onClick"],f={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},v=(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1),g=[v],w={class:"p-2 block hover:bg-gray-300 cursor-pointer"},h={key:0,class:"justify-center text-center text-black text-md"};t.Z={__name:"Sidebar",setup(e){const{storeNote:t,isCurrentNote:n,setCurrentNote:o,notes:l,currentNote:v}=(0,i.Z)(),p=(0,r.Fl)((()=>(console.log("notes reformatted for sidebar"),l.value.map((e=>({...e,formattedDate:new Date(e.date).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}))))));return(e,t)=>((0,r.wg)(),(0,r.iD)("div",c,[u,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(p.value,(e=>((0,r.wg)(),(0,r.iD)("div",{class:(0,s.C_)(["flex justify-center items-center justify-items-center space-x-2",{"bg-gray-200":(0,a.SU)(n)(e)}]),onClick:t=>(0,a.SU)(o)(e),key:e.date},[(0,a.SU)(n)(e)?((0,r.wg)(),(0,r.iD)("svg",f,g)):(0,r.kq)("",!0),(0,r._)("a",w,(0,s.zw)(e.formattedDate),1)],10,d)))),128)),Object.keys(p.value).length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",h," No Notes to show "))]))}},o()}catch(c){o(c)}}))},161:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(252),r=n(577),s={__name:"SimplerConfirm",props:{isOpen:Boolean,title:String,message:String,onConfirm:Function,onClose:Function,yesText:String,noText:String,containerClasses:{type:String,default:"sc-container"},overlayClasses:{type:String,default:"sc-overlay"},dialogClasses:{type:String,default:"sc-dialog"},buttonContainerClasses:{type:String,default:"sc-btn-container"},titleClasses:{type:String,default:"sc-title"},messageClasses:{type:String,default:"sc-msg"},yesClasses:{type:String,default:"sc-yes"},noClasses:{type:String,default:"sc-no"}},setup(e){const t=e,n=()=>{t.onClose()},s=()=>{t.onConfirm()};return(t,a)=>e.isOpen?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,r.C_)(e.containerClasses)},[(0,o._)("div",{class:(0,r.C_)(e.overlayClasses)},[(0,o._)("div",{class:(0,r.C_)(e.dialogClasses)},[(0,o._)("div",{class:(0,r.C_)(e.titleClasses)},(0,r.zw)(e.title),3),(0,o._)("div",{class:(0,r.C_)(e.messageClasses)},(0,r.zw)(e.message),3),(0,o._)("div",{class:(0,r.C_)(e.buttonContainerClasses)},[(0,o._)("button",{class:(0,r.C_)(e.yesClasses),onClick:s},(0,r.zw)(e.yesText),3),(0,o._)("button",{class:(0,r.C_)(e.noClasses),onClick:n},(0,r.zw)(e.noText),3)],2)],2)],2)],2)):(0,o.kq)("",!0)}},a=n(744);const i=(0,a.Z)(s,[["__scopeId","data-v-7649d51c"]]);var l=i},605:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(918),s=(n(538),e([r]));r=(s.then?(await s)():s)[0];const a=r.Z;t.Z=a,o()}catch(a){o(a)}}))},699:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(252),s=n(262),a=n(544),i=n(929),l=n(237),c=n(614),u=e([c]);c=(u.then?(await u)():u)[0];const d={key:0},f={key:1},v=(0,r._)("h1",{class:"py-8"},"No Notes",-1),g=(0,r._)("p",{class:"py-8 text-base"},"Click the + button to add one",-1),w=[v,g];t.Z={__name:"Tiptap",emits:["noteContent"],setup(e,{emit:t}){const{currentNote:n,storeNote:o}=(0,c.Z)(),u=(0,a.jE)({extensions:[i.Z,l.Z.configure({placeholder:"Start typing"})],editorProps:{attributes:{class:"overflow-y-auto break-all text-clip focus:outline-none w-full"}},onUpdate({editor:e}){t("noteContent",e.getHTML()),o(e.getHTML(),n.value.date)},onCreate({editor:e}){e.commands.focus(),e.content=n?.value?.note??""},content:n?.value?.note??""});return(0,r.YP)(n,(e=>{e?.note?u.value.commands.setContent(e.note,!1):u.value.commands.setContent("",!1),u.value.commands.focus()})),(e,t)=>(0,s.SU)(n)?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)((0,s.SU)(a.kg),{editor:(0,s.SU)(u)},null,8,["editor"])])):((0,r.wg)(),(0,r.iD)("div",f,w))}},o()}catch(d){o(d)}}))},787:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(252),r=n(262);function s(){const e=(0,r.iH)(!navigator.onLine),t=(0,r.iH)(!1);return window.addEventListener("online",(()=>{e.value=!1,t.value=!0,setTimeout((()=>{t.value=!1}),4e3)})),window.addEventListener("offline",(()=>{e.value=!0})),{clientOffline:e,showOnline:t}}const a={key:0,class:"offline-notice bg-red-500 opacity-80 text-center text-sm text-white w-2/4 lg:w-1/4 h-[10%] z-10 absolute bottom-32 right-2 mb-2 flex items-center space-x-2 p-2"},i=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"ml-2 w-6 h-6"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})],-1),l=(0,o._)("span",null,"looks like you are currently offline ",-1),c=[i,l],u={key:1,class:"offline-notice bg-green-500 opacity-80 text-center text-white text-sm w-1/4 h-[10%] z-10 absolute bottom-32 right-2 mb-2 flex items-center space-x-2 p-2"},d=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"ml-2 w-6 h-6"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})],-1),f=(0,o._)("span",null,"Back online! ",-1),v=[d,f];var g={__name:"onlineStatus",setup(e){const{clientOffline:t,showOnline:n}=s();return(e,s)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,r.SU)(t)?((0,o.wg)(),(0,o.iD)("div",a,c)):(0,o.kq)("",!0),!(0,r.SU)(t)&&(0,r.SU)(n)?((0,o.wg)(),(0,o.iD)("div",u,v)):(0,o.kq)("",!0)],64))}};const w=g;var h=w},538:function(){},947:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return r.Z}});var r=n(112),s=e([r]);r=(s.then?(await s)():s)[0],o()}catch(a){o(a)}}))},685:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return r.Z}});var r=n(795),s=e([r]);r=(s.then?(await s)():s)[0],o()}catch(a){o(a)}}))},918:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return r.Z}});var r=n(699),s=e([r]);r=(s.then?(await s)():s)[0],o()}catch(a){o(a)}}))},614:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return b}});var r=n(262),s=n(252);const i=await f(),l=(0,r.iH)(await g()),c=(0,r.iH)(l.value?.[0]??null),u=(0,r.iH)(!1),d=(0,r.iH)(!1);async function f(){return new Promise(((e,t)=>{let n=window.indexedDB.open("hardnote",7);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{t("error on db init")},n.onupgradeneeded=e=>{e.target.result.createObjectStore("hardnote",{keyPath:"date"})}}))}async function v(e,t=null){return new Promise(((n,o)=>{let r=i.transaction("hardnote","readwrite").objectStore("hardnote");r.onerror=e=>{o("transaction error")};let s=new Date,a={note:e,date:t||s.getTime()},l=r.get(a.date);l.onsuccess=e=>{if(e.target.result){let e=r.put(a);e.onsuccess=e=>{w(),n(),d.value=!0,setTimeout((()=>{d.value=!1}),1e3),u.value=!0,setTimeout((()=>{u.value=!1}),3e3)},e.onerror=e=>{w(),o("updating error")}}else{let e=r.add(a);e.onsuccess=e=>{w(),n(),d.value=!0,setTimeout((()=>{d.value=!1}),1e3),u.value=!0,setTimeout((()=>{u.value=!1}),3e3)},e.onerror=e=>{w(),o("adding error")}}},l.onerror=e=>{w(),o("retrieving error")}}))}async function g(){return new Promise(((e,t)=>{i.transaction("hardnote").objectStore("hardnote").getAll().onsuccess=t=>{e(t.target.result??[])}}))}async function w(){l.value=await g()}async function h(e=null){const t=(0,r.Tn)(e);return new Promise(((n,o)=>{let r=i.transaction("hardnote","readwrite").objectStore("hardnote");r.onerror=e=>{w(),o("transaction error")};let s=r.get(t?.date??e);console.log("Deleting note",s),s.onsuccess=e=>{if(e.target.result){let e=r.delete(s.result.date);e.onsuccess=e=>{w(),c.value=l.value[0],n(),u.value=!0,setTimeout((()=>{u.value=!1}),3e3)},e.onerror=e=>{w(),o("delete error")}}},s.onerror=e=>{w(),o("retrieving error")}}))}async function p(e){return"object"===typeof e&&null!==e?.date&&(e=e.date),new Promise(((t,n)=>{let o=i.transaction("hardnote","readwrite").objectStore("hardnote");o.onerror=e=>{n("transaction error")};let r=o.get(e);r.onsuccess=e=>{t(e.target.result)},r.onerror=e=>{t(null)}}))}async function m(e){c.value=await p(e.date)}function y(e){return c.value?.date===e.date}function b(){return{notes:l,storeNote:v,deleteNote:h,currentNote:c,setCurrentNote:m,isCurrentNote:y,showSuccess:u,saveSuccess:d}}(0,s.YP)(l,((e,t)=>{e.length>t.length&&(c.value=e[e.length-1]),0===e.length&&(c.value=null)})),o()}catch(a){o(a)}}),1)},225:function(e,t,n){n.a(e,(async function(e,t){try{var o=n(963),r=n(555),s=(n(587),e([r]));r=(s.then?(await s)():s)[0],(0,o.ri)(r.Z).mount("#app"),t()}catch(a){t(a)}}))},587:function(e,t,n){var o=n(205);(0,o.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload()},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=function(e){e&&e.d<1&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},s=function(n){return n.map((function(n){if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var s=[];s.d=0,n.then((function(e){a[t]=e,r(s)}),(function(e){a[o]=e,r(s)}));var a={};return a[e]=function(e){e(s)},a}}var i={};return i[e]=function(){},i[t]=n,i}))};n.a=function(n,a,i){var l;i&&((l=[]).d=-1);var c,u,d,f=new Set,v=n.exports,g=new Promise((function(e,t){d=t,u=e}));g[t]=v,g[e]=function(e){l&&e(l),f.forEach(e),g["catch"]((function(){}))},n.exports=g,a((function(n){var r;c=s(n);var a=function(){return c.map((function(e){if(e[o])throw e[o];return e[t]}))},i=new Promise((function(t){r=function(){t(a)},r.r=0;var n=function(e){e!==l&&!f.has(e)&&(f.add(e),e&&!e.d&&(r.r++,e.push(r)))};c.map((function(t){t[e](n)}))}));return r.r?i:a()}),(function(e){e?d(g[o]=e):u(v),r(l)})),l&&l.d<0&&(l.d=0)}}(),function(){var e=[];n.O=function(t,o,r,s){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],s=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,r,s]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(t&&t(o);c<a.length;c++)s=a[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},o=self["webpackChunkhard_note"]=self["webpackChunkhard_note"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(225)}));o=n.O(o)})();
//# sourceMappingURL=app.20c2bb88.js.map