(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{8993:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/basic_auth/Registration",function(){return e(3429)}])},3429:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var r=e(7568),o=e(655),i=e(5893),u=e(7294);function a(){var n=(0,u.useState)("Loading....."),t=n[0],e=n[1];function a(){return(a=(0,r.Z)(function(){return(0,o.__generator)(this,function(n){return fetch("https://dev-jahidul-test-auth.pantheonsite.io/session/token").then(function(n){return n.text()}).then(function(n){console.log("CSRFToken: "+n),fetch("https://dev-jahidul-test-auth.pantheonsite.io/user/register?_format=json",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":n},body:JSON.stringify({name:{value:"khairul.anam"},mail:{value:"khairul.anam@patheon.io"},pass:{value:"thepass"}})}).then(function(n){return n.json()}).then(function(n){console.log(n),e(JSON.stringify(n))}).catch(function(n){console.error("There has been a problem with your fetch operation:",n)})}).catch(function(n){console.error("There has been a problem with your fetch operation:",n)}),[2]})})).apply(this,arguments)}return(0,u.useEffect)(function(){fetch("https://dev-jahidul-test-auth.pantheonsite.io/jsonapi/node/article").then(function(n){return n.json()}).then(function(n){return console.log(n)}).catch(function(n){console.error("There has been a problem with your fetch operation:",n)}),console.log("this is testing")},[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("button",{onClick:function(){return a.apply(this,arguments)},children:"Registration"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:t})]})}},7568:function(n,t,e){"use strict";function r(n,t,e,r,o,i,u){try{var a=n[i](u),h=a.value}catch(s){e(s);return}a.done?t(h):Promise.resolve(h).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise(function(o,i){var u=n.apply(t,e);function a(n){r(u,o,i,a,h,"next",n)}function h(n){r(u,o,i,a,h,"throw",n)}a(void 0)})}}e.d(t,{Z:function(){return o}})}},function(n){n.O(0,[774,888,179],function(){return n(n.s=8993)}),_N_E=n.O()}]);