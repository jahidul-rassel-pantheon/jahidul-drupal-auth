(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3678)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,a=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,l=e.sizes,g=e.unoptimized,p=void 0!==g&&g,b=e.priority,_=void 0!==b&&b,S=e.loading,k=e.lazyRoot,N=e.lazyBoundary,E=e.className,L=e.quality,I=e.width,R=e.height,q=e.style,C=e.objectFit,P=e.objectPosition,H=e.onLoadingComplete,D=e.placeholder,W=void 0===D?"empty":D,B=e.blurDataURL,V=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=d.useContext(h.ImageConfigContext),T=d.useMemo(function(){var e=$||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return r({},e,{allSizes:t,deviceSizes:i})},[Z]),F=V,G=l?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var M=z;if("loader"in F){if(F.loader){var O=F.loader;M=function(e){e.config;var t=c(e,["config"]);return O(t)}}delete F.loader}var U,Q,X="";if(U=s,"object"==typeof U&&(x(U)||void 0!==(Q=U).src)){var K=x(s)?s.default:s;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(B=B||K.blurDataURL,X=K.src,(!G||"fill"!==G)&&(R=R||K.height,I=I||K.width,!K.height||!K.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}s="string"==typeof s?s:X;var Y=!_&&("lazy"===S||void 0===S);(s.startsWith("data:")||s.startsWith("blob:"))&&(p=!0,Y=!1),y.has(s)&&(Y=!1),T.unoptimized&&(p=!0);var J=a(d.useState(!1),2),ee=J[0],et=J[1],ei=a(m.useIntersection({rootRef:void 0===k?null:k,rootMargin:N||"200px",disabled:!Y}),3),en=ei[0],ea=ei[1],eo=ei[2],er=!Y||ea,es={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},el={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ec=!1,ed=j(I),eu=j(R),ef=j(L),em=Object.assign({},q,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:P}),eh="blur"!==W||ee?{}:{backgroundSize:C||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===G)es.display="block",es.position="absolute",es.top=0,es.left=0,es.bottom=0,es.right=0;else if(void 0!==ed&&void 0!==eu){var eg=eu/ed,ep=isNaN(eg)?"100%":"".concat(100*eg,"%");"responsive"===G?(es.display="block",es.position="relative",ec=!0,el.paddingTop=ep):"intrinsic"===G?(es.display="inline-block",es.position="relative",es.maxWidth="100%",ec=!0,el.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ed,"%27%20height=%27").concat(eu,"%27/%3e")):"fixed"===G&&(es.display="inline-block",es.position="relative",es.width=ed,es.height=eu)}var e$={src:v,srcSet:void 0,sizes:void 0};er&&(e$=w({config:T,src:s,unoptimized:p,layout:G,width:ed,quality:ef,sizes:l,loader:M}));var ey=s,ev="imagesizes";ev="imageSizes";var eb=(n(i={},"imageSrcSet",e$.srcSet),n(i,ev,e$.sizes),i),ex=d.default.useLayoutEffect,ew=d.useRef(H),e8=d.useRef(s);d.useEffect(function(){ew.current=H},[H]),ex(function(){e8.current!==s&&(eo(),e8.current=s)},[eo,s]);var ej=r({isLazy:Y,imgAttributes:e$,heightInt:eu,widthInt:ed,qualityInt:ef,layout:G,className:E,imgStyle:em,blurStyle:eh,loading:S,config:T,unoptimized:p,placeholder:W,loader:M,srcString:ey,onLoadingCompleteRef:ew,setBlurComplete:et,setIntersection:en,isVisible:er,noscriptSizes:l},F);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:es},ec?d.default.createElement("span",{style:el},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},ej))),_?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+e$.src+e$.srcSet+e$.sizes,rel:"preload",as:"image",href:e$.srcSet?void 0:e$.src},eb))):null)};var r=i(6495).Z,s=i(2648).Z,l=i(1598).Z,c=i(7273).Z,d=l(i(7294)),u=s(i(5443)),f=i(9309),m=i(7190),h=i(9977);i(3794);var g=i(2392);function p(e){return"/"===e[0]?e.slice(1):e}var $={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,v="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",b=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,o=new URL("".concat(t.path).concat(p(i))),r=o.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),a&&r.set("q",a.toString()),o.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,a=e.width,o=["f_auto","c_limit","w_"+a,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(o).concat(p(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function x(e){return void 0!==e.default}function w(e){var t=e.config,i=e.src,n=e.unoptimized,a=e.layout,r=e.width,s=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var a=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(n);c)l.push(parseInt(c[2]));if(l.length){var c,d,u=.01*(d=Math).min.apply(d,o(l));return{widths:r.filter(function(e){return e>=a[0]*u}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:a,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return r.find(function(t){return t>=e})||r[r.length-1]}))),kind:"x"}}(t,r,a,l),u=d.widths,f=d.kind,m=u.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:u.map(function(e,n){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:c({config:t,src:i,quality:s,width:u[m]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function z(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=b.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function _(e,t,i,n,a,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===n&&o(!0),null==a?void 0:a.current)){var i=e.naturalWidth,r=e.naturalHeight;a.current({naturalWidth:i,naturalHeight:r})}}))}var A=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,a=e.layout,o=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,f=e.placeholder,m=e.loading,h=e.srcString,g=e.config,p=e.unoptimized,$=e.loader,y=e.onLoadingCompleteRef,v=e.setBlurComplete,b=e.setIntersection,x=e.onLoad,j=e.onError,z=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":a,className:o,style:r({},s,l),ref:d.useCallback(function(e){b(e),(null==e?void 0:e.complete)&&_(e,h,a,f,y,v)},[b,h,a,f,y,v,]),onLoad:function(e){_(e.currentTarget,h,a,f,y,v),x&&x(e)},onError:function(e){"blur"===f&&v(!0),j&&j(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,w({config:g,src:h,unoptimized:p,layout:a,width:i,quality:n,sizes:z,loader:$}),{decoding:"async","data-nimg":a,style:s,className:o,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3678:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(5893),a=i(9008),o=i.n(a),r=i(5675),s=i.n(r),l=i(214),c=i.n(l);function d(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);