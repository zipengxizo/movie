(function(e){function n(n){for(var c,a,u=n[0],i=n[1],d=n[2],f=0,s=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(s.length)s.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-039f27d1":"365d3bec","chunk-09259dcf":"8c481383","chunk-1dc41aef":"6310b4ec","chunk-204f35cc":"eb857829","chunk-2d0bd58b":"5a551f31","chunk-2d0cc0c2":"d396d7bf","chunk-2ebc5d54":"8bd0b8e5","chunk-2ef2ab30":"499c3fb8","chunk-3f66e1a4":"04169c8d","chunk-558cc276":"4f50bed3","chunk-64b9b921":"7ea0cc7c","chunk-72742d48":"6aeea208","chunk-79bb6bbe":"63c9fd13","chunk-8c4eee6e":"aee028d1","chunk-8d8da47e":"b91c7b0f","chunk-a1090830":"5e34afbf"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-039f27d1":1,"chunk-09259dcf":1,"chunk-1dc41aef":1,"chunk-204f35cc":1,"chunk-2ebc5d54":1,"chunk-2ef2ab30":1,"chunk-3f66e1a4":1,"chunk-558cc276":1,"chunk-64b9b921":1,"chunk-72742d48":1,"chunk-79bb6bbe":1,"chunk-8c4eee6e":1,"chunk-8d8da47e":1,"chunk-a1090830":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-039f27d1":"f6e769c7","chunk-09259dcf":"6704c554","chunk-1dc41aef":"15a36f86","chunk-204f35cc":"00b01176","chunk-2d0bd58b":"31d6cfe0","chunk-2d0cc0c2":"31d6cfe0","chunk-2ebc5d54":"fd0f8a0b","chunk-2ef2ab30":"4879bdd9","chunk-3f66e1a4":"5bad3e34","chunk-558cc276":"e7906d29","chunk-64b9b921":"dd7d4513","chunk-72742d48":"8d97ef77","chunk-79bb6bbe":"55911688","chunk-8c4eee6e":"8ade8b03","chunk-8d8da47e":"e83a8fb3","chunk-a1090830":"0c7f8f61"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===c||f===r))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],f=d.getAttribute("data-href");if(f===c||f===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],l.parentNode.removeChild(l),t(o)},l.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",s.name="ChunkLoadError",s.type=c,s.request=a,t[1](s)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var s=0;s<d.length;s++)n(d[s]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"324c":function(e,n,t){"use strict";var c=t("a06f"),a=t.n(c);a.a},"365c":function(e,n,t){"use strict";var c={api1:"/api",api2:"/api2"},a=c,r=(t("d3b7"),t("ac1f"),t("5319"),t("bc3a")),o=t.n(r),u=t("a18c"),i=t("4360"),d=t("e401"),f=function(e){Object(d["a"])({message:e,duration:1e3,forbidClick:!0})},s=function(e){u["a"].replace({path:"/mine/login",query:{redirect:e}})},l=function(e,n){switch(e){case 403:f("登录过期，请重新登录"),s(n.data.fullPath);break;case 401:f("登录过期，请重新登录"),window.localStorage.removeItem("token"),setTimeout((function(){s(n.data.fullPath)}),1e3);break;case 404:f("请求的资源不存在");break;default:console.log(n.data.message),f("网络断开,稍后请重试")}},p=o.a.create({timeout:1e4});p.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",p.interceptors.request.use((function(e){var n=i["a"].state.token.token;return n&&(e.headers.token=n),e}),(function(e){return Promise.error(e)})),p.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e):Promise.reject(e)}),(function(e){var n=e.response;return n?(l(n.status,n),Promise.reject(n)):(window.navigator.onLine,f("网络异常"),Promise.reject(e))}));var h=p,m={cinemaList:function(e){return h.get("".concat(a.api1,"/cinemaList"),{params:{cityId:e.cityId}})}},b=m,k={movieOnList:function(e){return h.get("".concat(a.api1,"/movieOnInfoList"),{params:{cityId:e.cityId}})},movieComingList:function(e){return h.get("".concat(a.api1,"/movieComingList"),{params:{cityId:e.cityId}})},movieDetail:function(e){return h.get("".concat(a.api1,"/detailmovie"),{params:{movieId:e.movieId}})}},g=k,v={cityList:function(){return h.get("".concat(a.api1,"/cityList"))}},y=v,w={rearchList:function(e,n){o.a.get("".concat(a,"searchList"),{cityId:e,message:n})}},I=w,P={location:function(){return h.get("".concat(a.api1,"/getLocation"))}},L=P,S={login:function(e){return h.post("".concat(a.api2,"/users/login"),e)},register:function(e){return h.post("".concat(a.api2,"/users/register"),e)},usersList:function(){return h.get("".concat(a.api2,"/admin/usersList"))},deleteUser:function(e){return h.post("".concat(a.api2,"/admin/deleteUser"),{params:e})},updateFreeze:function(e){return h.post("".concat(a.api2,"/admin/updateFreeze"),e)},verifyImg:function(){return"".concat(a.api2,"/users/verifyImg")},getUser:function(){return h.get("".concat(a.api2,"/users/getUser"))},uploadUserHead:function(e,n){return h.post("".concat(a.api2,"/users/uploadUserHead"),e,n)},logout:function(){return h.get("".concat(a.api2,"/users/logout"))},isAdmin:function(e){return h.post("".concat(a.api2,"/admin"),e)},verify:function(e){return h.get("".concat(a.api2,"/users/verify"),e)}},O=S;n["a"]={cinema:b,movie:g,city:y,search:I,location:L,users:O}},4360:function(e,n,t){"use strict";var c=t("2b0e"),a=t("8876"),r={cityName:window.localStorage.getItem("nowNm")||"北京",cityId:window.localStorage.getItem("nowId")||1},o={},u={CITY_INFO:function(e,n){e.cityName=n.cityName,e.cityId=n.cityId}},i={namespaced:!0,state:r,actions:o,mutations:u},d=(t("b0c0"),{name:window.localStorage.getItem("name")||"",isAdmin:window.localStorage.getItem("isAdmin")||!1,userHead:""}),f={},s={USER_NAME:function(e,n){e.name=n.name,e.isAdmin=n.isAdmin,e.userHead=n.userHead}},l={namespaced:!0,state:d,actions:f,mutations:s},p={token:window.localStorage.getItem("token"),fullPath:window.localStorage.getItem("fullPath")},h={TOKEN:function(e,n){e.token=n.token},FULLPATH:function(e,n){e.fullPath=n.fullPath}},m={},b={namespaced:!0,state:p,actions:m,mutations:h};c["default"].use(a["a"]);n["a"]=new a["a"].Store({state:{},mutations:{},actions:{},modules:{city:i,user:l,token:b}})},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("ac1f"),t("5319"),t("513d"),t("375c");var c=t("785d"),a=t.n(c),r=(t("1ce0"),t("daa7")),o=t.n(r),u=(t("3581"),t("8e8f")),i=t.n(u),d=(t("c405"),t("ec2d")),f=t.n(d),s=(t("4dbf"),t("f90b")),l=t.n(s),p=(t("5503"),t("b3d8")),h=t.n(p),m=(t("75b6"),t("2246")),b=t.n(m),k=(t("4087"),t("96f8")),g=t.n(k),v=(t("e909"),t("f98a")),y=t.n(v),w=(t("e283"),t("c1eb")),I=t.n(w),P=(t("ea85"),t("5448")),L=t.n(P),S=(t("a625"),t("176d")),O=t.n(S),T=(t("0df4"),t("29d9")),j=t.n(T),E=(t("79d6"),t("aa41")),_=t.n(E),C=(t("7f85"),t("72d6")),A=t.n(C),$=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),x=t("a18c"),N=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("keep-alive",[t("router-view")],1)},U=[],F=t("2877"),H={},M=Object(F["a"])(H,N,U,!1,null,null,null),q=M.exports,B=t("4360"),D=t("e401"),z=(t("61c8"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"loader"})}),J=[],K={name:"Loading"},R=K,W=(t("324c"),Object(F["a"])(R,z,J,!1,null,"6836a39e",null)),Y=W.exports,G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"wrapper",staticClass:"wrapper"},[e._t("default")],2)},Q=[],V=t("1fba"),X={name:"Scroller",props:{handleToScroll:{type:Function,default:function(){}},handleToTouchEnd:{type:Function,default:function(){}}},mounted:function(){var e=this,n=new V["a"](this.$refs.wrapper,{tap:!0,probeType:1});n.on("scroll",(function(n){e.$emit("handleToScroll",n)})),n.on("touchEnd",(function(n){e.$emit("handleToTouchEnd",n)}))},methods:{}},Z=X,ee=(t("80cf"),Object(F["a"])(Z,G,Q,!1,null,"5339a6c7",null)),ne=ee.exports,te=t("365c");$["default"].use(D["a"]),$["default"].component("Loading",Y),$["default"].config.productionTip=!1,$["default"].component("Scroller",ne),$["default"].prototype.$api=te["a"],$["default"].filter("replaceWh",(function(e,n){return e.replace(/w\.h/,n)})),$["default"].use(A.a),$["default"].use(_.a),$["default"].use(j.a),$["default"].use(O.a),$["default"].use(L.a),$["default"].use(I.a),$["default"].use(y.a),$["default"].use(g.a),$["default"].use(b.a),$["default"].use(h.a),$["default"].use(l.a),$["default"].use(f.a),$["default"].use(i.a),$["default"].prototype.$msgbox=o.a,$["default"].prototype.$alert=o.a.alert,$["default"].prototype.$confirm=o.a.confirm,$["default"].prototype.$prompt=o.a.prompt,$["default"].prototype.$message=a.a,new $["default"]({router:x["a"],store:B["a"],render:function(e){return e(q)}}).$mount("#app")},"80cf":function(e,n,t){"use strict";var c=t("f5c9"),a=t.n(c);a.a},a06f:function(e,n,t){},a18c:function(e,n,t){"use strict";var c=t("2b0e"),a=t("8c4f"),r=(t("d3b7"),{path:"/cinema",component:function(){return t.e("chunk-8c4eee6e").then(t.bind(null,"d49c"))}}),o={path:"/mine",component:function(){return t.e("chunk-3f66e1a4").then(t.bind(null,"81e0"))},children:[{path:"center",component:function(){return t.e("chunk-1dc41aef").then(t.bind(null,"1f5a"))}},{path:"login",component:function(){return t.e("chunk-a1090830").then(t.bind(null,"d4a1"))}},{path:"register",component:function(){return t.e("chunk-79bb6bbe").then(t.bind(null,"0bb41"))}},{path:"findPassword",component:function(){return t.e("chunk-558cc276").then(t.bind(null,"9ecc"))}},{path:"/mine",redirect:"center"}]},u={path:"/movie",component:function(){return t.e("chunk-64b9b921").then(t.bind(null,"e230"))},children:[{path:"nowPlaying",component:function(){return t.e("chunk-039f27d1").then(t.bind(null,"671f"))}},{path:"comingSoon",component:function(){return t.e("chunk-72742d48").then(t.bind(null,"7534"))}},{path:"city",component:function(){return t.e("chunk-2ef2ab30").then(t.bind(null,"78a5"))}},{path:"search",component:function(){return t.e("chunk-2ebc5d54").then(t.bind(null,"9d59"))}},{path:"detail/:movieId",components:{default:function(){return t.e("chunk-039f27d1").then(t.bind(null,"671f"))},detail:function(){return t.e("chunk-204f35cc").then(t.bind(null,"89a1"))}},props:{detail:!0}},{path:"/movie",redirect:"/movie/nowPlaying"}]},i={path:"/admin",component:function(){return t.e("chunk-8d8da47e").then(t.bind(null,"47e7"))},children:[{path:"users",component:function(){return t.e("chunk-09259dcf").then(t.bind(null,"28e0"))}},{path:"movie",component:function(){return t.e("chunk-2d0bd58b").then(t.bind(null,"2c37"))}},{path:"cinema",component:function(){return t.e("chunk-2d0cc0c2").then(t.bind(null,"4bec"))}},{path:"/admin",redirect:"users"}]};c["default"].use(a["a"]);n["a"]=new a["a"]({mode:"history",base:"/",routes:[u,r,o,i,{path:"/",redirect:"/movie"}]})},f5c9:function(e,n,t){}});
//# sourceMappingURL=app.c426b913.js.map