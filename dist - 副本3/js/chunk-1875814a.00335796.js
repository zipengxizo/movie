(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1875814a"],{"0bb41":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register_body"},[n("div",{staticClass:"register_email"},[e._v(" 邮箱："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"register_text",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("button",{attrs:{disabled:e.disabled},on:{touchstart:e.handleToVerify}},[e._v(e._s(e.verifyInfo))])]),n("div",[e._v(" 用户名："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"register_text",attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",[e._v(" 密码："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"register_text",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0),n("div",[e._v(" 验证码："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.verify,expression:"verify"}],staticClass:"register_text",attrs:{type:"text"},domProps:{value:e.verify},on:{input:function(t){t.target.composing||(e.verify=t.target.value)}}})]),n("div",{staticClass:"register_btn"},[n("button",{on:{touchstart:e.handleToRegister}},[e._v("注册")])]),n("div",{staticClass:"register_link"},[n("router-link",{attrs:{to:"/mine/login"}},[e._v("立即登录")]),n("router-link",{attrs:{to:"/mine/findPassword"}},[e._v("找回密码")])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 确认密码："),n("input",{staticClass:"register_text",attrs:{type:"password"}})])}],s=n("5118"),o=n("c15a"),r={name:"register",data:function(){return{email:"",username:"",password:"",verify:"",verifyInfo:"发送验证码",disabled:!1}},methods:{handleToVerify:function(){var e=this;this.disabled||this.$api.users.verify({email:this.email}).then((function(t){var n=t.data.status,i=e;0===n?Object(o["a"])({title:"验证码",content:"验证码已发送",ok:"确定",handleOk:function(){i.countDown()}}):Object(o["a"])({title:"验证码",content:"验证码发送失败",ok:"确定"})}))},handleToRegister:function(){var e=this;this.$api.users.register({email:this.email,username:this.username,password:this.password,verify:this.verify}).then((function(t){var n=t.data.status,i=e;0===n?Object(o["a"])({title:"注册",content:"用户注册成功",ok:"确定",handleOk:function(){i.$router.push("/mine/login")}}):Object(o["a"])({title:"注册",content:t.data.msg+", 请重新注册",ok:"确定"})}))},countDown:function(){var e=this;this.disabled=!0;var t=60,n=Object(s["setInterval"])((function(){t--,e.verifyInfo="剩余"+t+"秒",0===t&&(e.disabled=!1,t=60,e.verifyInfo="发送验证码",clearInterval(n._id))}),1e3)}}},c=r,l=(n("3904"),n("2877")),u=Object(l["a"])(c,i,a,!1,null,"31f973ee",null);t["default"]=u.exports},3904:function(e,t,n){"use strict";var i=n("3c03"),a=n.n(i);a.a},"3c03":function(e,t,n){},5118:function(e,t,n){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(a.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new s(a.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var i,a=1,s={},o=!1,r=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?m():v()?p():e.MessageChannel?g():r&&"onreadystatechange"in r.createElement("script")?h():y(),c.setImmediate=l,c.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[a]=o,i(a),a++}function u(e){delete s[e]}function d(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i);break}}function f(e){if(o)setTimeout(f,0,e);else{var t=s[e];if(t){o=!0;try{d(t)}finally{u(e),o=!1}}}}function m(){i=function(e){t.nextTick((function(){f(e)}))}}function v(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function p(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),i=function(n){e.postMessage(t+n,"*")}}function g(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},i=function(t){e.port2.postMessage(t)}}function h(){var e=r.documentElement;i=function(t){var n=r.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function y(){i=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("4362"))}}]);
//# sourceMappingURL=chunk-1875814a.00335796.js.map