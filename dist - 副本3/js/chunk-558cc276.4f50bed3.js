(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-558cc276"],{4149:function(t,e,s){},"8d4b":function(t,e,s){"use strict";var a=s("4149"),i=s.n(a);i.a},"9ecc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"password_body"},[s("div",{staticClass:"password_email"},[t._v(" 邮箱："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"password_text",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("button",{on:{touchstart:t.handleToVerify}},[t._v("发送验证码")])]),s("div",[t._v(" 新密码："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password_text",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",[t._v(" 验证码："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.verify,expression:"verify"}],staticClass:"password_text",attrs:{type:"text"},domProps:{value:t.verify},on:{input:function(e){e.target.composing||(t.verify=e.target.value)}}})]),s("div",{staticClass:"password_btn"},[s("button",{on:{touchstart:t.handleToPassword}},[t._v("修改")])]),s("div",{staticClass:"password_link"},[s("router-link",{attrs:{to:"/mine/login"}},[t._v("立即登录")]),s("router-link",{attrs:{to:"/mine/register"}},[t._v("立即注册")])],1)])},i=[],o={name:"findPassword",data:function(){return{email:"",password:"",verify:""}},methods:{handleToVerify:function(){var t=this;this.axios.get("/api2/users/verify?email="+this.email).then((function(e){var s=e.data.status;0===s?t.$alert({title:"验证码",content:"验证码已发送",ok:"确定"}):t.$alert({title:"验证码",content:"验证码发送失败",ok:"确定"})}))},handleToPassword:function(){var t=this;this.axios.post("/api2/users/findPassword",{email:this.email,password:this.password,verify:this.verify}).then((function(e){var s=e.data.status,a=t;0===s?t.$alert({title:"修改",content:"修改密码成功",ok:"确定",handleOk:function(){a.$router.push("/mine/login")}}):t.$alert({title:"修改",content:"修改密码失败",ok:"确定"})}))}}},n=o,r=(s("8d4b"),s("2877")),l=Object(r["a"])(n,a,i,!1,null,"b61bad9c",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-558cc276.4f50bed3.js.map