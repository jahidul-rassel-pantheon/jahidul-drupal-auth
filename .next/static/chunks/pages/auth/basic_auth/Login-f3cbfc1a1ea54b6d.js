(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{6114:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/basic_auth/Login",function(){return e(7630)}])},7630:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var o=e(7568),r=e(655),i=e(5893),u=e(7294);function h(){var n=(0,u.useState)("Loading....."),t=n[0],e=n[1];function h(){return(h=(0,o.Z)(function(){return(0,r.__generator)(this,function(n){return fetch("https://dev-jahidul-test-auth.pantheonsite.io/session/token").then(function(n){return n.text()}).then(function(n){console.log("CSRFToken: "+n),fetch("https://dev-jahidul-test-auth.pantheonsite.io/user/login?_format=json",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":n},body:JSON.stringify({name:"jahid-rassel",pass:"iVN4xByf0tXhFe*Xxb"})}).then(function(n){return n.json()}).then(function(n){console.log(n),e(JSON.stringify(n,void 0,2))}).catch(function(n){console.error("There has been a problem with your fetch operation:",n)})}).catch(function(n){console.error("There has been a problem with your fetch operation:",n)}),[2]})})).apply(this,arguments)}return(0,u.useEffect)(function(){fetch("https://dev-jahidul-test-auth.pantheonsite.io/jsonapi/node/article").then(function(n){return n.json()}).then(function(n){return console.log(n)}).catch(function(n){console.error("There has been a problem with your fetch operation:",n)}),console.log("this is testing")},[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("button",{onClick:function(){return h.apply(this,arguments)},children:"Log In"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("pre",{children:t})]})}},7568:function(n,t,e){"use strict";function o(n,t,e,o,r,i,u){try{var h=n[i](u),c=h.value}catch(s){e(s);return}h.done?t(c):Promise.resolve(c).then(o,r)}function r(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var u=n.apply(t,e);function h(n){o(u,r,i,h,c,"next",n)}function c(n){o(u,r,i,h,c,"throw",n)}h(void 0)})}}e.d(t,{Z:function(){return r}})}},function(n){n.O(0,[774,888,179],function(){return n(n.s=6114)}),_N_E=n.O()}]);