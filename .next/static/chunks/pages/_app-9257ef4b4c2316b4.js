(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(221)}])},1210:function(e,t){"use strict";function n(e,t,n,a){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,s=r(n(7294)),l=n(6273),i=n(2725),c=n(3462),u=n(1018),d=n(7190),f=n(1210),$=n(8684),p=void 0!==s.default.useTransition,h={};function m(e,t,n,a){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,a)).catch(function(e){});var r=a&&void 0!==a.locale?a.locale:e&&e.locale;h[t+"%"+n+(r?"%"+r:"")]=!0}}var x=s.default.forwardRef(function(e,t){var n,r,x=e.href,v=e.as,j=e.children,g=e.prefetch,b=e.passHref,y=e.replace,N=e.shallow,_=e.scroll,w=e.locale,k=e.onClick,C=e.onMouseEnter,L=e.onTouchStart,M=e.legacyBehavior,E=void 0===M?!0!==Boolean(!1):M,P=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,E&&("string"==typeof n||"number"==typeof n)&&(n=s.default.createElement("a",null,n));var R=!1!==g,H=a(p?s.default.useTransition():[],2)[1],T=s.default.useContext(c.RouterContext),S=s.default.useContext(u.AppRouterContext);S&&(T=S);var A=s.default.useMemo(function(){var e=a(l.resolveHref(T,x,!0),2),t=e[0],n=e[1];return{href:t,as:v?l.resolveHref(T,v):n||t}},[T,x,v]),U=A.href,D=A.as,O=s.default.useRef(U),I=s.default.useRef(D);E&&(r=s.default.Children.only(n));var B=E?r&&"object"==typeof r&&r.ref:t,q=a(d.useIntersection({rootMargin:"200px"}),3),Z=q[0],K=q[1],F=q[2],z=s.default.useCallback(function(e){(I.current!==D||O.current!==U)&&(F(),I.current=D,O.current=U),Z(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,U,F,Z]);s.default.useEffect(function(){var e=K&&R&&l.isLocalURL(U),t=void 0!==w?w:T&&T.locale,n=h[U+"%"+D+(t?"%"+t:"")];e&&!n&&m(T,U,D,{locale:t})},[D,U,K,w,R,T]);var G={ref:z,onClick:function(e){E||"function"!=typeof k||k(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,s,i,c,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(f=(d=e).currentTarget.target)||"_self"===f)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var d,f,$=function(){"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:o,locale:i,scroll:s}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!u})};c?c($):$()}}(e,T,U,D,y,N,_,w,S?H:void 0,R)},onMouseEnter:function(e){E||"function"!=typeof C||C(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!R&&S)&&l.isLocalURL(U)&&m(T,U,D,{priority:!0})},onTouchStart:function(e){E||"function"!=typeof L||L(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!R&&S)&&l.isLocalURL(U)&&m(T,U,D,{priority:!0})}};if(!E||b||"a"===r.type&&!("href"in r.props)){var J=void 0!==w?w:T&&T.locale,W=T&&T.isLocaleDomain&&f.getDomainLocale(D,J,T.locales,T.domainLocales);G.href=W||$.addBasePath(i.addLocale(D,J,T&&T.defaultLocale))}return E?s.default.cloneElement(r,G):s.default.createElement("a",Object.assign({},P,G),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!s,u=a(r.useState(!1),2),d=u[0],f=u[1],$=a(r.useState(null),2),p=$[0],h=$[1];return r.useEffect(function(){if(s){if(!c&&!d&&p&&p.tagName){var e,a,r,u,$,h,m;return e=p,a=function(e){return e&&f(e)},$=(u=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},a=i.find(function(e){return e.root===n.root&&e.margin===n.margin});if(a&&(t=l.get(a)))return t;var r=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},i.push(n),l.set(n,t),t}(r={root:null==t?void 0:t.current,rootMargin:n})).id,h=u.observer,(m=u.elements).set(e,a),h.observe(e),function(){if(m.delete(e),h.unobserve(e),0===m.size){h.disconnect(),l.delete($);var t=i.findIndex(function(e){return e.root===$.root&&e.margin===$.margin});t>-1&&i.splice(t,1)}}}}else if(!d){var x=o.requestIdleCallback(function(){return f(!0)});return function(){return o.cancelIdleCallback(x)}}},[p,c,n,t,d]),[h,d,r.useCallback(function(){f(!1)},[])]};var r=n(7294),o=n(9311),s="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var a=(0,n(2648).Z)(n(7294)),r=a.default.createContext(null);t.AppRouterContext=r;var o=a.default.createContext(null);t.LayoutRouterContext=o;var s=a.default.createContext(null);t.GlobalLayoutRouterContext=s},221:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return p}});var r=n(5893);n(906),n(6516);var o=n(7294),s=n(9008),l=n.n(s),i=n(1664),c=n.n(i);function u(){return(0,r.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark","aria-label":"Fourth navbar example",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsxs)("a",{href:"#",className:"navbar-brand d-flex align-items-center",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2","aria-hidden":"true",className:"me-2",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),(0,r.jsx)("circle",{cx:"12",cy:"13",r:"4"})]}),(0,r.jsx)("strong",{children:"Album"})]}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample04","aria-controls":"navbarsExample04","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarsExample04",children:[(0,r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(c(),{href:"/",passHref:!0,children:(0,r.jsx)("a",{className:"nav-link active","aria-current":"page",children:"Home"})})}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(c(),{href:"#",passHref:!0,children:(0,r.jsx)("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"SimpleAuth[OAuth2]"})}),(0,r.jsxs)("ul",{className:"dropdown-menu",children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/auth/simple_auth/TokenRequest",passHref:!0,children:(0,r.jsx)("a",{className:"dropdown-item",children:"Token Request"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/auth/simple_auth/Login",passHref:!0,children:(0,r.jsx)("a",{className:"dropdown-item",children:"User Login"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/auth/simple_auth/OAuthUserDebug",passHref:!0,children:(0,r.jsx)("a",{className:"dropdown-item",children:"User Debug"})})})]})]}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(c(),{href:"#",passHref:!0,children:(0,r.jsx)("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"JWT Auth"})}),(0,r.jsxs)("ul",{className:"dropdown-menu",children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/auth/jwt_auth/TokenRequest",passHref:!0,children:(0,r.jsx)("a",{className:"dropdown-item",children:"Token Request"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/auth/jwt_auth/Login",passHref:!0,children:(0,r.jsx)("a",{className:"dropdown-item",children:"User Login"})})})]})]}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(c(),{href:"#",passHref:!0,children:(0,r.jsx)("a",{className:"nav-link dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Basic Auth"})}),(0,r.jsx)("ul",{className:"dropdown-menu",children:(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/auth/basic_auth/UserDetails",passHref:!0,children:(0,r.jsx)("a",{className:"dropdown-item",children:"User Details"})})})})]}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(c(),{href:"/confidential-pages/my_account",passHref:!0,children:(0,r.jsx)("a",{className:"nav-link",children:"Confidential"})})})]}),(0,r.jsx)("form",{role:"search",children:(0,r.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search"})})]})]})})}function d(){return(0,r.jsx)(u,{})}var f=function(){return(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[(0,r.jsx)("p",{className:"col-md-4 mb-0 text-muted",children:"\xa9 2022 Company, Inc"}),(0,r.jsx)(c(),{href:"/",passHref:!0,children:(0,r.jsx)("a",{className:"col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none",children:(0,r.jsx)("svg",{className:"bi me-2",width:"40",height:"32",children:(0,r.jsx)("use",{href:"#bootstrap"})})})}),(0,r.jsxs)("ul",{className:"nav col-md-4 justify-content-end",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"#",className:"nav-link px-2 text-muted",children:"Home"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"#",className:"nav-link px-2 text-muted",children:"Features"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"#",className:"nav-link px-2 text-muted",children:"Pricing"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"#",className:"nav-link px-2 text-muted",children:"FAQs"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{href:"#",className:"nav-link px-2 text-muted",children:"About"})})]})]})})};function $(e){var t=e.children;return(0,r.jsxs)("div",{className:"fullPage",children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:""}),(0,r.jsx)("meta",{name:"author",content:"Mark Otto, Jacob Thornton, and Bootstrap contributors"}),(0,r.jsx)("meta",{name:"generator",content:"Hugo 0.98.0"}),(0,r.jsx)("link",{rel:"canonical",href:"https://getbootstrap.com/docs/5.2/examples/blog/"}),(0,r.jsx)("meta",{name:"theme-color",content:"#712cf9"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Playfair+Display:700,900&display=swap",rel:"stylesheet"})]}),(0,r.jsx)(d,{}),(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"container mt-3",children:t})}),(0,r.jsx)(f,{})]})}var p=function(e){var t=e.Component,s=e.pageProps;return(0,o.useEffect)(function(){n.e(734).then(n.t.bind(n,3734,23))},[]),(0,r.jsx)($,{children:(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},s))})}},6516:function(){},906:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);