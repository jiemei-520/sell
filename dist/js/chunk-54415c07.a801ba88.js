(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54415c07"],{1276:function(t,e,a){"use strict";var n=a("d784"),i=a("44e7"),o=a("825a"),c=a("1d80"),s=a("4840"),r=a("8aa5"),l=a("50c4"),u=a("14c3"),d=a("9263"),f=a("d039"),h=[].push,g=Math.min,p=4294967295,m=!f((function(){return!RegExp(p,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(c(this)),o=void 0===a?p:a>>>0;if(0===o)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,o);var s,r,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=new RegExp(t.source,f+"g");while(s=d.call(m,n)){if(r=m.lastIndex,r>g&&(u.push(n.slice(g,s.index)),s.length>1&&s.index<n.length&&h.apply(u,s.slice(1)),l=s[0].length,g=r,u.length>=o))break;m.lastIndex===s.index&&m.lastIndex++}return g===n.length?!l&&m.test("")||u.push(""):u.push(n.slice(g)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=c(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,a):n.call(String(i),e,a)},function(t,i){var c=a(n,t,this,i,n!==e);if(c.done)return c.value;var d=o(t),f=String(this),h=s(d,RegExp),v=d.unicode,k=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new h(m?d:"^(?:"+d.source+")",k),b=void 0===i?p:i>>>0;if(0===b)return[];if(0===f.length)return null===u(x,f)?[f]:[];var I=0,$=0,y=[];while($<f.length){x.lastIndex=m?$:0;var C,S=u(x,m?f:f.slice($));if(null===S||(C=g(l(x.lastIndex+(m?0:$)),f.length))===I)$=r(f,$,v);else{if(y.push(f.slice(I,$)),y.length===b)return y;for(var _=1;_<=S.length-1;_++)if(y.push(S[_]),y.length===b)return y;$=I=C}}return y.push(f.slice(I)),y}]}),!m)},"4b9f":function(t,e,a){},"50af":function(t,e,a){"use strict";a("775c")},"775c":function(t,e,a){},"77be":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account"},[a("van-nav-bar",{attrs:{title:"个人资料","left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.back}}),a("BgBox",[a("van-cell",{attrs:{title:"头像",center:!0}},[a("div",[a("div",{staticClass:"user-img fr"},[a("img",{staticClass:"auto-img",attrs:{src:t.accountInfo.userImg,alt:""}}),a("van-uploader",{staticClass:"upload-box",attrs:{"after-read":t.uploadUserImg}})],1)])]),a("van-cell",{attrs:{title:"用户id",center:!0}},[t._v(t._s(t.accountInfo.userId))]),a("van-cell",{attrs:{title:"手机号",center:!0}},[t._v(t._s(t.accountInfo.phone))]),a("van-cell",{attrs:{title:"昵称",center:!0}},[a("van-field",{staticClass:"field-box",attrs:{placeholder:"输入昵称",maxlength:"12"},on:{change:t.updateNickName},model:{value:t.accountInfo.nickName,callback:function(e){t.$set(t.accountInfo,"nickName",e)},expression:"accountInfo.nickName"}})],1),a("div",{staticClass:"desc-box"},[a("div",{staticClass:"desc-content"},[a("van-field",{attrs:{rows:"2",autosize:"",label:"简介",type:"textarea",maxlength:"30",placeholder:"输入简介","show-word-limit":"","input-align":"right"},on:{change:t.updateDesc},model:{value:t.accountInfo.desc,callback:function(e){t.$set(t.accountInfo,"desc",e)},expression:"accountInfo.desc"}})],1)])],1)],1)},i=[];a("c975"),a("a15b"),a("ac1f"),a("5319"),a("1276");function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a("4b9f");var c=a("928f"),s={name:"Account",components:{BgBox:c["a"]},data:function(){return{accountInfo:o({nickName:"",desc:"",phone:"",userId:""},"desc","")}},created:function(){this.getAccountInfo()},methods:{back:function(){this.$router.go(-1)},getAccountInfo:function(){var t=this,e=localStorage.getItem("__tk");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:e}}).then((function(e){if(t.$toast.clear(),700==e.data.code)t.$router.push({name:"Login"});else if("B001"==e.data.code){var a=e.data.result[0];""==a.desc&&(a.desc="这家伙很懒，什么都没有留下！"),t.accountInfo=a}})).catch((function(e){t.$toast.clear()}))},uploadUserImg:function(t){var e=this,a=["gif","png","jpg","jpeg"],n=1,i=t.file.type.split("/")[1];if(-1!==a.indexOf(i)){var o=t.file.size/1024/1024;if(o>n)this.$toast("文件允许最大不能超过".concat(n,"MB"));else{var c=t.content.replace(/^data:image\/[A-Za-z]+;base64,/,""),s=localStorage.getItem("__tk");if(!s)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updateAvatar",data:{appkey:this.appkey,tokenString:s,imgType:i,serverBase64Img:c}}).then((function(t){e.$toast.clear(),700==t.data.code?e.$router.push({name:"Login"}):"H001"==t.data.code&&(e.accountInfo.userImg=t.data.userImg),e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}else this.$toast("文件类型只支持".concat(a.join(",")))},updateNickName:function(){var t=this;this.accountInfo.nickName||this.$toast("昵称不能为空");var e=localStorage.getItem("__tk");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updateNickName",data:{appkey:this.appkey,tokenString:e,nickName:this.accountInfo.nickName}}).then((function(e){t.$toast.clear(),700==e.data.code?t.$router.push({name:"Login"}):t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))},updateDesc:function(){var t=this;this.accountInfo.nickName||this.$toast("昵称不能为空");var e=localStorage.getItem("__tk");if(!e)return this.$toast("请先登录"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updateDesc",data:{appkey:this.appkey,tokenString:e,desc:this.accountInfo.desc}}).then((function(e){t.$toast.clear(),700==e.data.code?t.$router.push({name:"Login"}):t.$toast(e.data.msg)})).catch((function(e){t.$toast.clear()}))}}},r=s,l=a("2877"),u=Object(l["a"])(r,n,i,!1,null,"115cad3d",null);e["default"]=u.exports},"928f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-box"},[a("div",{staticClass:"bg-content"},[t._t("default")],2)])},i=[],o={name:"BgBox"},c=o,s=(a("50af"),a("2877")),r=Object(s["a"])(c,n,i,!1,null,"0ebead96",null);e["a"]=r.exports},a15b:function(t,e,a){"use strict";var n=a("23e7"),i=a("44ad"),o=a("fc6a"),c=a("a640"),s=[].join,r=i!=Object,l=c("join",",");n({target:"Array",proto:!0,forced:r||!l},{join:function(t){return s.call(o(this),void 0===t?",":t)}})},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},c975:function(t,e,a){"use strict";var n=a("23e7"),i=a("4d64").indexOf,o=a("a640"),c=a("ae40"),s=[].indexOf,r=!!s&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),u=c("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:r||!l||!u},{indexOf:function(t){return r?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-54415c07.a801ba88.js.map