"use strict";(self.webpackChunkwedding_guest_site=self.webpackChunkwedding_guest_site||[]).push([[682],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return N},P:function(){return v},S:function(){return M},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],v=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:s().object.isRequired,alt:C},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],T=new Set;let j,P;const $=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=l(e,_);const{width:y,height:b,layout:w}=n,E=c(y,b,w),{style:v,className:N}=E,k=l(E,I),S=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(w,y,b);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(x);if(P&&T.has(x))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:T.has(x),image:n},h)),T.has(x)||(t=requestAnimationFrame((()=>{S.current&&(r=l(S.current,x,T,s,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{T.has(x)&&P&&(S.current.innerHTML=P(i({isLoading:T.has(x),isLoaded:T.has(x),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},v,s,{backgroundColor:u}),className:`${N}${d?` ${d}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)($,e):null}));O.propTypes=L,O.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,R);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const q=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=l(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:E,height:C,layout:L,images:_,placeholder:I,backgroundColor:T}=o,j=c(E,C,L),{style:P,className:$}=j,O=l(j,S),R={fallback:void 0,sources:[]};return _.fallback&&(R.fallback=i({},_.fallback,{srcSet:_.fallback.srcSet?x(_.fallback.srcSet):void 0})),_.sources&&(R.sources=_.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,i({},O,{style:i({},P,s,{backgroundColor:h}),className:`${$}${a?` ${a}`:""}`}),r.createElement(p,{layout:L,width:E,height:C},r.createElement(v,i({},d(I,!1,L,E,C,T,y,b))),r.createElement(N,i({"data-gatsby-image-ssr":"",className:g},w,u("eager"===m,!1,R,m,f)))))})),U=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),G={src:s().string.isRequired,alt:C,width:U,height:U,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=G;const M=A(O);M.displayName="StaticImage",M.propTypes=G},6411:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(4160),s=a(7123),i="layout-module--nav-link-item--a5f0a",l="layout-module--nav-link-text--69cda";function o(){return r.createElement("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},r.createElement("nav",null,r.createElement("ul",{className:"layout-module--nav-links--1113b"},r.createElement("li",{className:i},r.createElement(n.rU,{to:"/",className:l},"Home "," ")),r.createElement("li",{className:i},r.createElement(n.rU,{to:"/about",className:l},"About "," ")),(0,s.jl)()?r.createElement("li",{className:i},r.createElement(n.rU,{to:"/rsvp",className:l},"RSVP "," ")):null,(0,s.jl)()?r.createElement("li",{className:i},r.createElement(n.rU,{to:"/updates",className:l},"Updates "," ")):null,(0,s.jl)()?r.createElement("a",{href:"/",onClick:e=>{e.preventDefault(),(0,s.kS)((()=>(0,n.c4)("/guest/login")))}},r.createElement("li",{className:i},"Logout")):r.createElement("li",{className:i},r.createElement(n.rU,{to:"/guest/login",className:l},"Login "," ")))))}var c=e=>{let{pageTitle:t,children:a}=e;const s=(0,n.K2)("3159585216");return r.createElement("div",{className:"layout-module--container--78b04"},r.createElement("header",{className:"layout-module--site-title--e4dea"},s.site.siteMetadata.title),r.createElement(o,null),r.createElement("main",null,r.createElement("h1",{className:"layout-module--heading--f158c"},t),a))}},9357:function(e,t,a){var r=a(7294),n=a(4160);t.Z=e=>{let{title:t}=e;const a=(0,n.K2)("3159585216");return r.createElement("title",null,t," | ",a.site.siteMetadata.title)}},5465:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var r=a(7294),n=a(4160),s=a(6411),i=a(8032),l=a(9357);const o=()=>r.createElement(l.Z,{title:"About"});t.default=()=>r.createElement("main",null,r.createElement(s.Z,{pageTitle:"About Me"},r.createElement(n.rU,{to:"/"},"Back to Home"),r.createElement("p",null,"Hi there! I'm the proud creator of this site, which I built with Gatsby."),r.createElement(i.S,{alt:"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera",src:"../images/fish_PNG25137.png",__imageData:a(3518)})))},7123:function(e,t,a){a.d(t,{PR:function(){return r},jc:function(){return s},jl:function(){return i},kS:function(){return l}});const r=()=>"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{},n=e=>window.localStorage.setItem("gatsbyUser",JSON.stringify(e)),s=e=>{let{password:t}=e;return"pass"===t&&n({username:"john",name:"Esteemed Guest",email:"johnny@example.org"})},i=()=>!!r().username,l=e=>{n({}),e()}},3518:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/11e8f5a3e56d2131ba8117fd62b08399/a48e7/fish_PNG25137.png","srcSet":"/static/11e8f5a3e56d2131ba8117fd62b08399/2fecb/fish_PNG25137.png 498w,\\n/static/11e8f5a3e56d2131ba8117fd62b08399/d99d5/fish_PNG25137.png 997w,\\n/static/11e8f5a3e56d2131ba8117fd62b08399/a48e7/fish_PNG25137.png 1993w","sizes":"(min-width: 1993px) 1993px, 100vw"},"sources":[{"srcSet":"/static/11e8f5a3e56d2131ba8117fd62b08399/37ba7/fish_PNG25137.webp 498w,\\n/static/11e8f5a3e56d2131ba8117fd62b08399/eca80/fish_PNG25137.webp 997w,\\n/static/11e8f5a3e56d2131ba8117fd62b08399/74f7d/fish_PNG25137.webp 1993w","type":"image/webp","sizes":"(min-width: 1993px) 1993px, 100vw"}]},"width":1993,"height":1210}')}}]);
//# sourceMappingURL=component---src-pages-about-js-b03d0a630314ba0952e3.js.map