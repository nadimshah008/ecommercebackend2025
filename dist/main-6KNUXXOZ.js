import{E as sn,F as an,G as on,M as ln,Oa as yn,Pa as b,Qa as U,Ra as vn,Sa as at,Ta as fe,Ua as ot,Va as Oe,X as cn,Xa as bn,Y as un,Z as fn,a as Ce,c as Jt,g as S,ga as hn,h as ye,ha as dn,i as ee,ia as mn,j as Ne,ja as Ie,k as en,ka as pn,l as ve,la as gn,m as te,pa as st,r as rt,v as tn,w as nn,x as rn}from"./chunk-PCABAPYT.js";var _n=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ve({type:e,selectors:[["app-pagenotfound"]],decls:3,vars:0,consts:[[1,"wrapper","d-flex","justify-content-center","align-items-center"]],template:function(r,s){r&1&&(sn(0,"div",0)(1,"h1"),ln(2,"PAGE NOT FOUND"),an()())}});let i=e;return i})();var Li=[{path:"",loadChildren:()=>import("./chunk-JFHUKHH7.js").then(i=>i.UserModule)},{path:"admin",loadChildren:()=>import("./chunk-XMKLVNBJ.js").then(i=>i.AdminModule)},{path:"vendor",loadChildren:()=>import("./chunk-RDYLW2AZ.js").then(i=>i.VendorModule)},{path:"signup",component:yn},{path:"**",component:_n}],wn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=te({type:e}),e.\u0275inj=ee({imports:[st.forRoot(Li),st]});let i=e;return i})();var Sn=(()=>{let e=class e{constructor(){this.title="Med Nexus"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ve({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,s){r&1&&on(0,"router-outlet")},dependencies:[gn]});let i=e;return i})();function _e(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_e=function(e){return typeof e}:_e=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_e(i)}function xi(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function En(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Fi(i,e,t){return e&&En(i.prototype,e),t&&En(i,t),i}function zi(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function E(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(r){zi(i,r,t[r])})}return i}function Ln(i,e){return ji(i)||$i(i,e)||Bi()}function ji(i){if(Array.isArray(i))return i}function $i(i,e){var t=[],n=!0,r=!1,s=void 0;try{for(var a=i[Symbol.iterator](),o;!(n=(o=a.next()).done)&&(t.push(o.value),!(e&&t.length===e));n=!0);}catch(l){r=!0,s=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(r)throw s}}return t}function Bi(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Tn=function(){},mt={},xn={},qi=null,Fn={mark:Tn,measure:Tn};try{typeof window<"u"&&(mt=window),typeof document<"u"&&(xn=document),typeof MutationObserver<"u"&&(qi=MutationObserver),typeof performance<"u"&&(Fn=performance)}catch{}var Ki=mt.navigator||{},An=Ki.userAgent,kn=An===void 0?"":An,ze=mt,R=xn;var De=Fn,la=!!ze.document,pt=!!R.documentElement&&!!R.head&&typeof R.addEventListener=="function"&&typeof R.createElement=="function",ca=~kn.indexOf("MSIE")||~kn.indexOf("Trident/"),Y="___FONT_AWESOME___";var zn="fa",jn="svg-inline--fa",Wi="data-fa-i2svg";var ua=function(){try{return!0}catch{return!1}}();var $n=[1,2,3,4,5,6,7,8,9,10],Vi=$n.concat([11,12,13,14,15,16,17,18,19,20]);var se={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fa=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",se.GROUP,se.SWAP_OPACITY,se.PRIMARY,se.SECONDARY].concat($n.map(function(i){return"".concat(i,"x")})).concat(Vi.map(function(i){return"w-".concat(i)})),Bn=ze.FontAwesomeConfig||{};function Ui(i){var e=R.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function Hi(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}R&&typeof R.querySelector=="function"&&(Pn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Pn.forEach(function(i){var e=Ln(i,2),t=e[0],n=e[1],r=Hi(Ui(t));r!=null&&(Bn[n]=r)}));var Pn,Qi={familyPrefix:zn,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ut=E({},Qi,Bn);ut.autoReplaceSvg||(ut.observeMutations=!1);var x=E({},ut);ze.FontAwesomeConfig=x;var X=ze||{};X[Y]||(X[Y]={});X[Y].styles||(X[Y].styles={});X[Y].hooks||(X[Y].hooks={});X[Y].shims||(X[Y].shims=[]);var H=X[Y],Gi=[],Yi=function i(){R.removeEventListener("DOMContentLoaded",i),ft=1,Gi.map(function(e){return e()})},ft=!1;pt&&(ft=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),ft||R.addEventListener("DOMContentLoaded",Yi));var gt="pending",qn="settled",Re="fulfilled",Le="rejected",Xi=function(){},Kn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",Zi=typeof setImmediate>"u"?setTimeout:setImmediate,be=[],ht;function Ji(){for(var i=0;i<be.length;i++)be[i][0](be[i][1]);be=[],ht=!1}function xe(i,e){be.push([i,e]),ht||(ht=!0,Zi(Ji,0))}function er(i,e){function t(r){yt(e,r)}function n(r){we(e,r)}try{i(t,n)}catch(r){n(r)}}function Wn(i){var e=i.owner,t=e._state,n=e._data,r=i[t],s=i.then;if(typeof r=="function"){t=Re;try{n=r(n)}catch(a){we(s,a)}}Vn(s,n)||(t===Re&&yt(s,n),t===Le&&we(s,n))}function Vn(i,e){var t;try{if(i===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||_e(e)==="object")){var n=e.then;if(typeof n=="function")return n.call(e,function(r){t||(t=!0,e===r?Un(i,r):yt(i,r))},function(r){t||(t=!0,we(i,r))}),!0}}catch(r){return t||we(i,r),!0}return!1}function yt(i,e){(i===e||!Vn(i,e))&&Un(i,e)}function Un(i,e){i._state===gt&&(i._state=qn,i._data=e,xe(tr,i))}function we(i,e){i._state===gt&&(i._state=qn,i._data=e,xe(nr,i))}function Hn(i){i._then=i._then.forEach(Wn)}function tr(i){i._state=Re,Hn(i)}function nr(i){i._state=Le,Hn(i),!i._handled&&Kn&&global.process.emit("unhandledRejection",i._data,i)}function ir(i){global.process.emit("rejectionHandled",i)}function $(i){if(typeof i!="function")throw new TypeError("Promise resolver "+i+" is not a function");if(!(this instanceof $))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],er(i,this)}$.prototype={constructor:$,_state:gt,_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(Xi),fulfilled:e,rejected:t};return(t||e)&&!this._handled&&(this._handled=!0,this._state===Le&&Kn&&xe(ir,this)),this._state===Re||this._state===Le?xe(Wn,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}};$.all=function(i){if(!Array.isArray(i))throw new TypeError("You must pass an array to Promise.all().");return new $(function(e,t){var n=[],r=0;function s(l){return r++,function(c){n[l]=c,--r||e(n)}}for(var a=0,o;a<i.length;a++)o=i[a],o&&typeof o.then=="function"?o.then(s(a),t):n[a]=o;r||e(n)})};$.race=function(i){if(!Array.isArray(i))throw new TypeError("You must pass an array to Promise.race().");return new $(function(e,t){for(var n=0,r;n<i.length;n++)r=i[n],r&&typeof r.then=="function"?r.then(e,t):e(r)})};$.resolve=function(i){return i&&_e(i)==="object"&&i.constructor===$?i:new $(function(e){e(i)})};$.reject=function(i){return new $(function(e,t){t(i)})};var de={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rr(i){if(!(!i||!pt)){var e=R.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;for(var t=R.head.childNodes,n=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=s)}return R.head.insertBefore(e,n),i}}var sr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fe(){for(var i=12,e="";i-- >0;)e+=sr[Math.random()*62|0];return e}function Qn(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ar(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Qn(i[t]),'" ')},"").trim()}function Gn(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(i[t],";")},"")}function Yn(i){return i.size!==de.size||i.x!==de.x||i.y!==de.y||i.rotate!==de.rotate||i.flipX||i.flipY}function Xn(i){var e=i.transform,t=i.containerWidth,n=i.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}var lt={x:0,y:0,width:"100%",height:"100%"};function Mn(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function or(i){return i.tag==="g"?i.children:[i]}function lr(i){var e=i.children,t=i.attributes,n=i.main,r=i.mask,s=i.maskId,a=i.transform,o=n.width,l=n.icon,c=r.width,f=r.icon,u=Xn({transform:a,containerWidth:c,iconWidth:o}),v={tag:"rect",attributes:E({},lt,{fill:"white"})},g=l.children?{children:l.children.map(Mn)}:{},d={tag:"g",attributes:E({},u.inner),children:[Mn(E({tag:l.tag,attributes:E({},l.attributes,u.path)},g))]},m={tag:"g",attributes:E({},u.outer),children:[d]},_="mask-".concat(s||Fe()),T="clip-".concat(s||Fe()),A={tag:"mask",attributes:E({},lt,{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,m]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:or(f)},A]};return e.push(M,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(_,")")},lt)}),{children:e,attributes:t}}function cr(i){var e=i.children,t=i.attributes,n=i.main,r=i.transform,s=i.styles,a=Gn(s);if(a.length>0&&(t.style=a),Yn(r)){var o=Xn({transform:r,containerWidth:n.width,iconWidth:n.width});e.push({tag:"g",attributes:E({},o.outer),children:[{tag:"g",attributes:E({},o.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:E({},n.icon.attributes,o.path)}]}]})}else e.push(n.icon);return{children:e,attributes:t}}function ur(i){var e=i.children,t=i.main,n=i.mask,r=i.attributes,s=i.styles,a=i.transform;if(Yn(a)&&t.found&&!n.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=Gn(E({},s,{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function fr(i){var e=i.prefix,t=i.iconName,n=i.children,r=i.attributes,s=i.symbol,a=s===!0?"".concat(e,"-").concat(x.familyPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E({},r,{id:a}),children:n}]}]}function hr(i){var e=i.icons,t=e.main,n=e.mask,r=i.prefix,s=i.iconName,a=i.transform,o=i.symbol,l=i.title,c=i.maskId,f=i.titleId,u=i.extra,v=i.watchable,g=v===void 0?!1:v,d=n.found?n:t,m=d.width,_=d.height,T=r==="fak",A=T?"":"fa-w-".concat(Math.ceil(m/_*16)),M=[x.replacementClass,s?"".concat(x.familyPrefix,"-").concat(s):"",A].filter(function(q){return u.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(u.classes).join(" "),k={children:[],attributes:E({},u.attributes,{"data-prefix":r,"data-icon":s,class:M,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(_)})},W=T&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/_*16*.0625,"em")}:{};g&&(k.attributes[Wi]=""),l&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(f||Fe())},children:[l]});var C=E({},k,{prefix:r,iconName:s,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:E({},W,u.styles)}),N=n.found&&t.found?lr(C):cr(C),O=N.children,G=N.attributes;return C.children=O,C.attributes=G,o?fr(C):ur(C)}var Cn=function(){},ha=x.measurePerformance&&De&&De.mark&&De.measure?De:{mark:Cn,measure:Cn};var dr=function(e,t){return function(n,r,s,a){return e.call(t,n,r,s,a)}},ct=function(e,t,n,r){var s=Object.keys(e),a=s.length,o=r!==void 0?dr(t,r):t,l,c,f;for(n===void 0?(l=1,f=e[s[0]]):(l=0,f=n);l<a;l++)c=s[l],f=o(f,e[c],c,e);return f};function Zn(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,s=Object.keys(e).reduce(function(a,o){var l=e[o],c=!!l.icon;return c?a[l.iconName]=l.icon:a[o]=l,a},{});typeof H.hooks.addPack=="function"&&!r?H.hooks.addPack(i,s):H.styles[i]=E({},H.styles[i]||{},s),i==="fas"&&Zn("fa",e)}var Nn=H.styles,mr=H.shims,pr={},gr={},yr={},Jn=function(){var e=function(r){return ct(Nn,function(s,a,o){return s[o]=ct(a,r,{}),s},{})};pr=e(function(n,r,s){return r[3]&&(n[r[3]]=s),n}),gr=e(function(n,r,s){var a=r[2];return n[s]=s,a.forEach(function(o){n[o]=s}),n});var t="far"in Nn;yr=ct(mr,function(n,r){var s=r[0],a=r[1],o=r[2];return a==="far"&&!t&&(a="fas"),n[s]={prefix:a,iconName:o},n},{})};Jn();var da=H.styles;function In(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}function ei(i){var e=i.tag,t=i.attributes,n=t===void 0?{}:t,r=i.children,s=r===void 0?[]:r;return typeof i=="string"?Qn(i):"<".concat(e," ").concat(ar(n),">").concat(s.map(ei).join(""),"</").concat(e,">")}function dt(i){this.name="MissingIcon",this.message=i||"Icon unavailable",this.stack=new Error().stack}dt.prototype=Object.create(Error.prototype);dt.prototype.constructor=dt;var je={fill:"currentColor"},ti={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},ma={tag:"path",attributes:E({},je,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},vt=E({},ti,{attributeName:"opacity"}),pa={tag:"circle",attributes:E({},je,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:E({},ti,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E({},vt,{values:"1;0;1;1;0;1;"})}]},ga={tag:"path",attributes:E({},je,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:E({},vt,{values:"1;0;0;0;0;1;"})}]},ya={tag:"path",attributes:E({},je,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E({},vt,{values:"0;0;1;1;0;0;"})}]};var va=H.styles;function On(i){var e=i[0],t=i[1],n=i.slice(4),r=Ln(n,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(x.familyPrefix,"-").concat(se.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.familyPrefix,"-").concat(se.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(x.familyPrefix,"-").concat(se.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var ba=H.styles;var vr=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function br(){var i=zn,e=jn,t=x.familyPrefix,n=x.replacementClass,r=vr;if(t!==i||n!==e){var s=new RegExp("\\.".concat(i,"\\-"),"g"),a=new RegExp("\\--".concat(i,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(n))}return r}var _r=function(){function i(){xi(this,i),this.definitions={}}return Fi(i,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=E({},t.definitions[o]||{},a[o]),Zn(o,a[o]),Jn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,c=a.icon;t[o]||(t[o]={}),t[o][l]=c}),t}}]),i}();function wr(){x.autoAddCss&&!Rn&&(rr(br()),Rn=!0)}function Sr(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(function(n){return ei(n)})}}),Object.defineProperty(i,"node",{get:function(){if(pt){var n=R.createElement("div");return n.innerHTML=i.html,n.children}}}),i}function Dn(i){var e=i.prefix,t=e===void 0?"fa":e,n=i.iconName;if(n)return In(Tr.definitions,t,n)||In(H.styles,t,n)}function Er(i){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Dn(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Dn(r||{})),i(n,E({},t,{mask:r}))}}var Tr=new _r;var Rn=!1;var Ar=Er(function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.transform,n=t===void 0?de:t,r=e.symbol,s=r===void 0?!1:r,a=e.mask,o=a===void 0?null:a,l=e.maskId,c=l===void 0?null:l,f=e.title,u=f===void 0?null:f,v=e.titleId,g=v===void 0?null:v,d=e.classes,m=d===void 0?[]:d,_=e.attributes,T=_===void 0?{}:_,A=e.styles,M=A===void 0?{}:A;if(i){var k=i.prefix,W=i.iconName,C=i.icon;return Sr(E({type:"icon"},i),function(){return wr(),x.autoA11y&&(u?T["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(g||Fe()):(T["aria-hidden"]="true",T.focusable="false")),hr({icons:{main:On(C),mask:o?On(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:W,transform:E({},de,n),symbol:s,title:u,maskId:c,titleId:g,extra:{attributes:T,styles:M,classes:m}})})}});var ni=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=te({type:e}),e.\u0275inj=ee({});let i=e;return i})();function ii(i){return new S(3e3,!1)}function kr(){return new S(3100,!1)}function Pr(){return new S(3101,!1)}function Mr(i){return new S(3001,!1)}function Cr(i){return new S(3003,!1)}function Nr(i){return new S(3004,!1)}function Ir(i,e){return new S(3005,!1)}function Or(){return new S(3006,!1)}function Dr(){return new S(3007,!1)}function Rr(i,e){return new S(3008,!1)}function Lr(i){return new S(3002,!1)}function xr(i,e,t,n,r){return new S(3010,!1)}function Fr(){return new S(3011,!1)}function zr(){return new S(3012,!1)}function jr(){return new S(3200,!1)}function $r(){return new S(3202,!1)}function Br(){return new S(3013,!1)}function qr(i){return new S(3014,!1)}function Kr(i){return new S(3015,!1)}function Wr(i){return new S(3016,!1)}function Vr(i,e){return new S(3404,!1)}function Ur(i){return new S(3502,!1)}function Hr(i){return new S(3503,!1)}function Qr(){return new S(3300,!1)}function Gr(i){return new S(3504,!1)}function Yr(i){return new S(3301,!1)}function Xr(i,e){return new S(3302,!1)}function Zr(i){return new S(3303,!1)}function Jr(i,e){return new S(3400,!1)}function es(i){return new S(3401,!1)}function ts(i){return new S(3402,!1)}function ns(i,e){return new S(3505,!1)}function ne(i){switch(i.length){case 0:return new fe;case 1:return i[0];default:return new ot(i)}}function yi(i,e,t=new Map,n=new Map){let r=[],s=[],a=-1,o=null;if(e.forEach(l=>{let c=l.get("offset"),f=c==a,u=f&&o||new Map;l.forEach((v,g)=>{let d=g,m=v;if(g!=="offset")switch(d=i.normalizePropertyName(d,r),m){case Oe:m=t.get(g);break;case U:m=n.get(g);break;default:m=i.normalizeStyleValue(g,d,m,r);break}u.set(d,m)}),f||s.push(u),o=u,a=c}),r.length)throw Ur(r);return s}function Bt(i,e,t,n){switch(e){case"start":i.onStart(()=>n(t&&bt(t,"start",i)));break;case"done":i.onDone(()=>n(t&&bt(t,"done",i)));break;case"destroy":i.onDestroy(()=>n(t&&bt(t,"destroy",i)));break}}function bt(i,e,t){let n=t.totalTime,r=!!t.disabled,s=qt(i.element,i.triggerName,i.fromState,i.toState,e||i.phaseName,n??i.totalTime,r),a=i._data;return a!=null&&(s._data=a),s}function qt(i,e,t,n,r="",s=0,a){return{element:i,triggerName:e,fromState:t,toState:n,phaseName:r,totalTime:s,disabled:!!a}}function z(i,e,t){let n=i.get(e);return n||i.set(e,n=t),n}function ri(i){let e=i.indexOf(":"),t=i.substring(1,e),n=i.slice(e+1);return[t,n]}var is=typeof document>"u"?null:document.documentElement;function Kt(i){let e=i.parentNode||i.host||null;return e===is?null:e}function rs(i){return i.substring(1,6)=="ebkit"}var ae=null,si=!1;function ss(i){ae||(ae=as()||{},si=ae.style?"WebkitAppearance"in ae.style:!1);let e=!0;return ae.style&&!rs(i)&&(e=i in ae.style,!e&&si&&(e="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in ae.style)),e}function as(){return typeof document<"u"?document.body:null}function vi(i,e){for(;e;){if(e===i)return!0;e=Kt(e)}return!1}function bi(i,e,t){if(t)return Array.from(i.querySelectorAll(e));let n=i.querySelector(e);return n?[n]:[]}var Wt=(()=>{let e=class e{validateStyleProperty(n){return ss(n)}matchesElement(n,r){return!1}containsElement(n,r){return vi(n,r)}getParentElement(n){return Kt(n)}query(n,r,s){return bi(n,r,s)}computeStyle(n,r,s){return s||""}animate(n,r,s,a,o,l=[],c){return new fe(s,a)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let i=e;return i})(),Qt=class Qt{};Qt.NOOP=new Wt;var ce=Qt,ue=class{};var os=1e3,_i="{{",ls="}}",wi="ng-enter",At="ng-leave",$e="ng-trigger",Ve=".ng-trigger",ai="ng-animating",kt=".ng-animating";function Z(i){if(typeof i=="number")return i;let e=i.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:Pt(parseFloat(e[1]),e[2])}function Pt(i,e){switch(e){case"s":return i*os;default:return i}}function Ue(i,e,t){return i.hasOwnProperty("duration")?i:cs(i,e,t)}function cs(i,e,t){let n=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,r,s=0,a="";if(typeof i=="string"){let o=i.match(n);if(o===null)return e.push(ii(i)),{duration:0,delay:0,easing:""};r=Pt(parseFloat(o[1]),o[2]);let l=o[3];l!=null&&(s=Pt(parseFloat(l),o[4]));let c=o[5];c&&(a=c)}else r=i;if(!t){let o=!1,l=e.length;r<0&&(e.push(kr()),o=!0),s<0&&(e.push(Pr()),o=!0),o&&e.splice(l,0,ii(i))}return{duration:r,delay:s,easing:a}}function us(i){return i.length?i[0]instanceof Map?i:i.map(e=>new Map(Object.entries(e))):[]}function Q(i,e,t){e.forEach((n,r)=>{let s=Vt(r);t&&!t.has(r)&&t.set(r,i.style[s]),i.style[s]=n})}function le(i,e){e.forEach((t,n)=>{let r=Vt(n);i.style[r]=""})}function Se(i){return Array.isArray(i)?i.length==1?i[0]:vn(i):i}function fs(i,e,t){let n=e.params||{},r=Si(i);r.length&&r.forEach(s=>{n.hasOwnProperty(s)||t.push(Mr(s))})}var Mt=new RegExp(`${_i}\\s*(.+?)\\s*${ls}`,"g");function Si(i){let e=[];if(typeof i=="string"){let t;for(;t=Mt.exec(i);)e.push(t[1]);Mt.lastIndex=0}return e}function Te(i,e,t){let n=`${i}`,r=n.replace(Mt,(s,a)=>{let o=e[a];return o==null&&(t.push(Cr(a)),o=""),o.toString()});return r==n?i:r}var hs=/-+([a-z0-9])/g;function Vt(i){return i.replace(hs,(...e)=>e[1].toUpperCase())}function ds(i,e){return i===0||e===0}function ms(i,e,t){if(t.size&&e.length){let n=e[0],r=[];if(t.forEach((s,a)=>{n.has(a)||r.push(a),n.set(a,s)}),r.length)for(let s=1;s<e.length;s++){let a=e[s];r.forEach(o=>a.set(o,Ut(i,o)))}}return e}function F(i,e,t){switch(e.type){case b.Trigger:return i.visitTrigger(e,t);case b.State:return i.visitState(e,t);case b.Transition:return i.visitTransition(e,t);case b.Sequence:return i.visitSequence(e,t);case b.Group:return i.visitGroup(e,t);case b.Animate:return i.visitAnimate(e,t);case b.Keyframes:return i.visitKeyframes(e,t);case b.Style:return i.visitStyle(e,t);case b.Reference:return i.visitReference(e,t);case b.AnimateChild:return i.visitAnimateChild(e,t);case b.AnimateRef:return i.visitAnimateRef(e,t);case b.Query:return i.visitQuery(e,t);case b.Stagger:return i.visitStagger(e,t);default:throw Nr(e.type)}}function Ut(i,e){return window.getComputedStyle(i)[e]}var ps=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),He=class extends ue{normalizePropertyName(e,t){return Vt(e)}normalizeStyleValue(e,t,n,r){let s="",a=n.toString().trim();if(ps.has(t)&&n!==0&&n!=="0")if(typeof n=="number")s="px";else{let o=n.match(/^[+-]?[\d\.]+([a-z]*)$/);o&&o[1].length==0&&r.push(Ir(e,n))}return a+s}};var Qe="*";function gs(i,e){let t=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(n=>ys(n,t,e)):t.push(i),t}function ys(i,e,t){if(i[0]==":"){let l=vs(i,t);if(typeof l=="function"){e.push(l);return}i=l}let n=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(n==null||n.length<4)return t.push(Kr(i)),e;let r=n[1],s=n[2],a=n[3];e.push(oi(r,a));let o=r==Qe&&a==Qe;s[0]=="<"&&!o&&e.push(oi(a,r))}function vs(i,e){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,n)=>parseFloat(n)>parseFloat(t);case":decrement":return(t,n)=>parseFloat(n)<parseFloat(t);default:return e.push(Wr(i)),"* => *"}}var Be=new Set(["true","1"]),qe=new Set(["false","0"]);function oi(i,e){let t=Be.has(i)||qe.has(i),n=Be.has(e)||qe.has(e);return(r,s)=>{let a=i==Qe||i==r,o=e==Qe||e==s;return!a&&t&&typeof r=="boolean"&&(a=r?Be.has(i):qe.has(i)),!o&&n&&typeof s=="boolean"&&(o=s?Be.has(e):qe.has(e)),a&&o}}var Ei=":self",bs=new RegExp(`s*${Ei}s*,?`,"g");function Ti(i,e,t,n){return new Ct(i).build(e,t,n)}var li="",Ct=class{constructor(e){this._driver=e}build(e,t,n){let r=new Nt(t);return this._resetContextStyleTimingState(r),F(this,Se(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=li,e.collectedStyles=new Map,e.collectedStyles.set(li,new Map),e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,r=t.depCount=0,s=[],a=[];return e.name.charAt(0)=="@"&&t.errors.push(Or()),e.definitions.forEach(o=>{if(this._resetContextStyleTimingState(t),o.type==b.State){let l=o,c=l.name;c.toString().split(/\s*,\s*/).forEach(f=>{l.name=f,s.push(this.visitState(l,t))}),l.name=c}else if(o.type==b.Transition){let l=this.visitTransition(o,t);n+=l.queryCount,r+=l.depCount,a.push(l)}else t.errors.push(Dr())}),{type:b.Trigger,name:e.name,states:s,transitions:a,queryCount:n,depCount:r,options:null}}visitState(e,t){let n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){let s=new Set,a=r||{};n.styles.forEach(o=>{o instanceof Map&&o.forEach(l=>{Si(l).forEach(c=>{a.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(Rr(e.name,[...s.values()]))}return{type:b.State,name:e.name,style:n,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let n=F(this,Se(e.animation),t),r=gs(e.expr,t.errors);return{type:b.Transition,matchers:r,animation:n,queryCount:t.queryCount,depCount:t.depCount,options:oe(e.options)}}visitSequence(e,t){return{type:b.Sequence,steps:e.steps.map(n=>F(this,n,t)),options:oe(e.options)}}visitGroup(e,t){let n=t.currentTime,r=0,s=e.steps.map(a=>{t.currentTime=n;let o=F(this,a,t);return r=Math.max(r,t.currentTime),o});return t.currentTime=r,{type:b.Group,steps:s,options:oe(e.options)}}visitAnimate(e,t){let n=Es(e.timings,t.errors);t.currentAnimateTimings=n;let r,s=e.styles?e.styles:at({});if(s.type==b.Keyframes)r=this.visitKeyframes(s,t);else{let a=e.styles,o=!1;if(!a){o=!0;let c={};n.easing&&(c.easing=n.easing),a=at(c)}t.currentTime+=n.duration+n.delay;let l=this.visitStyle(a,t);l.isEmptyStep=o,r=l}return t.currentAnimateTimings=null,{type:b.Animate,timings:n,style:r,options:null}}visitStyle(e,t){let n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){let n=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let o of r)typeof o=="string"?o===U?n.push(o):t.errors.push(Lr(o)):n.push(new Map(Object.entries(o)));let s=!1,a=null;return n.forEach(o=>{if(o instanceof Map&&(o.has("easing")&&(a=o.get("easing"),o.delete("easing")),!s)){for(let l of o.values())if(l.toString().indexOf(_i)>=0){s=!0;break}}}),{type:b.Style,styles:n,easing:a,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let n=t.currentAnimateTimings,r=t.currentTime,s=t.currentTime;n&&s>0&&(s-=n.duration+n.delay),e.styles.forEach(a=>{typeof a!="string"&&a.forEach((o,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),f=c.get(l),u=!0;f&&(s!=r&&s>=f.startTime&&r<=f.endTime&&(t.errors.push(xr(l,f.startTime,f.endTime,s,r)),u=!1),s=f.startTime),u&&c.set(l,{startTime:s,endTime:r}),t.options&&fs(o,t.options,t.errors)})})}visitKeyframes(e,t){let n={type:b.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(Fr()),n;let r=1,s=0,a=[],o=!1,l=!1,c=0,f=e.steps.map(T=>{let A=this._makeStyleAst(T,t),M=A.offset!=null?A.offset:Ss(A.styles),k=0;return M!=null&&(s++,k=A.offset=M),l=l||k<0||k>1,o=o||k<c,c=k,a.push(k),A});l&&t.errors.push(zr()),o&&t.errors.push(jr());let u=e.steps.length,v=0;s>0&&s<u?t.errors.push($r()):s==0&&(v=r/(u-1));let g=u-1,d=t.currentTime,m=t.currentAnimateTimings,_=m.duration;return f.forEach((T,A)=>{let M=v>0?A==g?1:v*A:a[A],k=M*_;t.currentTime=d+m.delay+k,m.duration=k,this._validateStyleAst(T,t),T.offset=M,n.styles.push(T)}),n}visitReference(e,t){return{type:b.Reference,animation:F(this,Se(e.animation),t),options:oe(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:b.AnimateChild,options:oe(e.options)}}visitAnimateRef(e,t){return{type:b.AnimateRef,animation:this.visitReference(e.animation,t),options:oe(e.options)}}visitQuery(e,t){let n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[s,a]=_s(e.selector);t.currentQuerySelector=n.length?n+" "+s:s,z(t.collectedStyles,t.currentQuerySelector,new Map);let o=F(this,Se(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:b.Query,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:a,animation:o,originalSelector:e.selector,options:oe(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(Br());let n=e.timings==="full"?{duration:0,delay:0,easing:"full"}:Ue(e.timings,t.errors,!0);return{type:b.Stagger,animation:F(this,Se(e.animation),t),timings:n,options:null}}};function _s(i){let e=!!i.split(/\s*,\s*/).find(t=>t==Ei);return e&&(i=i.replace(bs,"")),i=i.replace(/@\*/g,Ve).replace(/@\w+/g,t=>Ve+"-"+t.slice(1)).replace(/:animating/g,kt),[i,e]}function ws(i){return i?Ce({},i):null}var Nt=class{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}};function Ss(i){if(typeof i=="string")return null;let e=null;if(Array.isArray(i))i.forEach(t=>{if(t instanceof Map&&t.has("offset")){let n=t;e=parseFloat(n.get("offset")),n.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let t=i;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function Es(i,e){if(i.hasOwnProperty("duration"))return i;if(typeof i=="number"){let s=Ue(i,e).duration;return _t(s,0,"")}let t=i;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=_t(0,0,"");return s.dynamic=!0,s.strValue=t,s}let r=Ue(t,e);return _t(r.duration,r.delay,r.easing)}function oe(i){return i?(i=Ce({},i),i.params&&(i.params=ws(i.params))):i={},i}function _t(i,e,t){return{duration:i,delay:e,easing:t}}function Ht(i,e,t,n,r,s,a=null,o=!1){return{type:1,element:i,keyframes:e,preStyleProps:t,postStyleProps:n,duration:r,delay:s,totalTime:r+s,easing:a,subTimeline:o}}var Ae=class{constructor(){this._map=new Map}get(e){return this._map.get(e)||[]}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},Ts=1,As=":enter",ks=new RegExp(As,"g"),Ps=":leave",Ms=new RegExp(Ps,"g");function Ai(i,e,t,n,r,s=new Map,a=new Map,o,l,c=[]){return new It().buildKeyframes(i,e,t,n,r,s,a,o,l,c)}var It=class{buildKeyframes(e,t,n,r,s,a,o,l,c,f=[]){c=c||new Ae;let u=new Ot(e,t,c,r,s,f,[]);u.options=l;let v=l.delay?Z(l.delay):0;u.currentTimeline.delayNextStep(v),u.currentTimeline.setStyles([a],null,u.errors,l),F(this,n,u);let g=u.timelines.filter(d=>d.containsAnimation());if(g.length&&o.size){let d;for(let m=g.length-1;m>=0;m--){let _=g[m];if(_.element===t){d=_;break}}d&&!d.allowOnlyTimelineStyles()&&d.setStyles([o],null,u.errors,l)}return g.length?g.map(d=>d.buildKeyframes()):[Ht(t,[],[],[],0,v,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let n=t.subInstructions.get(t.element);if(n){let r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,a=this._visitSubInstructions(n,r,r.options);s!=a&&t.transformIntoNewTimeline(a)}t.previousNode=e}visitAnimateRef(e,t){let n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,n),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,n){for(let r of e){let s=r?.delay;if(s){let a=typeof s=="number"?s:Z(Te(s,r?.params??{},t.errors));n.delayNextStep(a)}}}_visitSubInstructions(e,t,n){let s=t.currentTimeline.currentTime,a=n.duration!=null?Z(n.duration):null,o=n.delay!=null?Z(n.delay):null;return a!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,a,o);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),F(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let n=t.subContextCount,r=t,s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==b.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Ge);let a=Z(s.delay);r.delayNextStep(a)}e.steps.length&&(e.steps.forEach(a=>F(this,a,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let n=[],r=t.currentTimeline.currentTime,s=e.options&&e.options.delay?Z(e.options.delay):0;e.steps.forEach(a=>{let o=t.createSubContext(e.options);s&&o.delayNextStep(s),F(this,a,o),r=Math.max(r,o.currentTimeline.currentTime),n.push(o.currentTimeline)}),n.forEach(a=>t.currentTimeline.mergeTimelineCollectedStyles(a)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let n=e.strValue,r=t.params?Te(n,t.params,t.errors):n;return Ue(r,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());let s=e.style;s.type==b.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(n.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.hasCurrentStyleProperties()&&n.forwardFrame();let s=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(s):n.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let n=t.currentAnimateTimings,r=t.currentTimeline.duration,s=n.duration,o=t.createSubContext().currentTimeline;o.easing=n.easing,e.styles.forEach(l=>{let c=l.offset||0;o.forwardTime(c*s),o.setStyles(l.styles,l.easing,t.errors,t.options),o.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(o),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){let n=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?Z(r.delay):0;s&&(t.previousNode.type===b.Style||n==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Ge);let a=n,o=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=o.length;let l=null;o.forEach((c,f)=>{t.currentQueryIndex=f;let u=t.createSubContext(e.options,c);s&&u.delayNextStep(s),c===t.element&&(l=u.currentTimeline),F(this,e.animation,u),u.currentTimeline.applyStylesToKeyframe();let v=u.currentTimeline.currentTime;a=Math.max(a,v)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(a),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let n=t.parentContext,r=t.currentTimeline,s=e.timings,a=Math.abs(s.duration),o=a*(t.currentQueryTotal-1),l=a*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=o-l;break;case"full":l=n.currentStaggerTime;break}let f=t.currentTimeline;l&&f.delayNextStep(l);let u=f.currentTime;F(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-u+(r.startTime-n.currentTimeline.startTime)}},Ge={},Ot=class i{constructor(e,t,n,r,s,a,o,l){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=s,this.errors=a,this.timelines=o,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Ge,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=l||new Ye(this._driver,t,0),o.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let n=e,r=this.options;n.duration!=null&&(r.duration=Z(n.duration)),n.delay!=null&&(r.delay=Z(n.delay));let s=n.params;if(s){let a=r.params;a||(a=this.options.params={}),Object.keys(s).forEach(o=>{(!t||!a.hasOwnProperty(o))&&(a[o]=Te(s[o],a,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let n=e.params={};Object.keys(t).forEach(r=>{n[r]=t[r]})}}return e}createSubContext(e=null,t,n){let r=t||this.element,s=new i(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=Ge,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(n??0)+e.delay,easing:""},s=new Dt(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,r,s,a){let o=[];if(r&&o.push(this.element),e.length>0){e=e.replace(ks,"."+this._enterClassName),e=e.replace(Ms,"."+this._leaveClassName);let l=n!=1,c=this._driver.query(this.element,e,l);n!==0&&(c=n<0?c.slice(c.length+n,c.length):c.slice(0,n)),o.push(...c)}return!s&&o.length==0&&a.push(qr(t)),o}},Ye=class i{constructor(e,t,n,r){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this.easing=null,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new i(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Ts,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,n]of this._globalTimelineStyles)this._backFill.set(t,n||U),this._currentKeyframe.set(t,U);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,r){t&&this._previousKeyframe.set("easing",t);let s=r&&r.params||{},a=Cs(e,this._globalTimelineStyles);for(let[o,l]of a){let c=Te(l,s,n);this._pendingStyles.set(o,c),this._localTimelineStyles.has(o)||this._backFill.set(o,this._globalTimelineStyles.get(o)??U),this._updateStyle(o,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,n)=>{let r=this._styleSummary.get(n);(!r||t.time>r.time)&&this._updateStyle(n,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,n=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((o,l)=>{let c=new Map([...this._backFill,...o]);c.forEach((f,u)=>{f===Oe?e.add(u):f===U&&t.add(u)}),n||c.set("offset",l/this.duration),r.push(c)});let s=[...e.values()],a=[...t.values()];if(n){let o=r[0],l=new Map(o);o.set("offset",0),l.set("offset",1),r=[o,l]}return Ht(this.element,r,s,a,this.duration,this.startTime,this.easing,!1)}},Dt=class extends Ye{constructor(e,t,n,r,s,a,o=!1){super(e,t,a.delay),this.keyframes=n,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=o,this.timings={duration:a.duration,delay:a.delay,easing:a.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],a=n+t,o=t/a,l=new Map(e[0]);l.set("offset",0),s.push(l);let c=new Map(e[0]);c.set("offset",ci(o)),s.push(c);let f=e.length-1;for(let u=1;u<=f;u++){let v=new Map(e[u]),g=v.get("offset"),d=t+g*n;v.set("offset",ci(d/a)),s.push(v)}n=a,t=0,r="",e=s}return Ht(this.element,e,this.preStyleProps,this.postStyleProps,n,t,r,!0)}};function ci(i,e=3){let t=Math.pow(10,e-1);return Math.round(i*t)/t}function Cs(i,e){let t=new Map,n;return i.forEach(r=>{if(r==="*"){n??=e.keys();for(let s of n)t.set(s,U)}else for(let[s,a]of r)t.set(s,a)}),t}function ui(i,e,t,n,r,s,a,o,l,c,f,u,v){return{type:0,element:i,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:n,toStyles:a,timelines:o,queriedElements:l,preStyleProps:c,postStyleProps:f,totalTime:u,errors:v}}var wt={},Xe=class{constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,r){return Ns(this.ast.matchers,e,t,n,r)}buildStyles(e,t,n){let r=this._stateStyles.get("*");return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,n):new Map}build(e,t,n,r,s,a,o,l,c,f){let u=[],v=this.ast.options&&this.ast.options.params||wt,g=o&&o.params||wt,d=this.buildStyles(n,g,u),m=l&&l.params||wt,_=this.buildStyles(r,m,u),T=new Set,A=new Map,M=new Map,k=r==="void",W={params:ki(m,v),delay:this.ast.options?.delay},C=f?[]:Ai(e,t,this.ast.animation,s,a,d,_,W,c,u),N=0;return C.forEach(O=>{N=Math.max(O.duration+O.delay,N)}),u.length?ui(t,this._triggerName,n,r,k,d,_,[],[],A,M,N,u):(C.forEach(O=>{let G=O.element,q=z(A,G,new Set);O.preStyleProps.forEach(ie=>q.add(ie));let Gt=z(M,G,new Set);O.postStyleProps.forEach(ie=>Gt.add(ie)),G!==t&&T.add(G)}),ui(t,this._triggerName,n,r,k,d,_,C,[...T.values()],A,M,N))}};function Ns(i,e,t,n,r){return i.some(s=>s(e,t,n,r))}function ki(i,e){let t=Ce({},e);return Object.entries(i).forEach(([n,r])=>{r!=null&&(t[n]=r)}),t}var Rt=class{constructor(e,t,n){this.styles=e,this.defaultParams=t,this.normalizer=n}buildStyles(e,t){let n=new Map,r=ki(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,o)=>{a&&(a=Te(a,r,t));let l=this.normalizer.normalizePropertyName(o,t);a=this.normalizer.normalizeStyleValue(o,l,a,t),n.set(o,a)})}),n}};function Is(i,e,t){return new Lt(i,e,t)}var Lt=class{constructor(e,t,n){this.name=e,this.ast=t,this._normalizer=n,this.transitionFactories=[],this.states=new Map,t.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new Rt(r.style,s,n))}),fi(this.states,"true","1"),fi(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new Xe(e,r,this.states))}),this.fallbackTransition=Os(e,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,r){return this.transitionFactories.find(a=>a.match(e,t,n,r))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}};function Os(i,e,t){let n=[(a,o)=>!0],r={type:b.Sequence,steps:[],options:null},s={type:b.Transition,animation:r,matchers:n,options:null,queryCount:0,depCount:0};return new Xe(i,s,e)}function fi(i,e,t){i.has(e)?i.has(t)||i.set(t,i.get(e)):i.has(t)&&i.set(e,i.get(t))}var Ds=new Ae,xt=class{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n,this._animations=new Map,this._playersById=new Map,this.players=[]}register(e,t){let n=[],r=[],s=Ti(this._driver,t,n,r);if(n.length)throw Hr(n);r.length&&void 0,this._animations.set(e,s)}_buildPlayer(e,t,n){let r=e.element,s=yi(this._normalizer,e.keyframes,t,n);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){let r=[],s=this._animations.get(e),a,o=new Map;if(s?(a=Ai(this._driver,t,s,wi,At,new Map,new Map,n,Ds,r),a.forEach(f=>{let u=z(o,f.element,new Map);f.postStyleProps.forEach(v=>u.set(v,null))})):(r.push(Qr()),a=[]),r.length)throw Gr(r);o.forEach((f,u)=>{f.forEach((v,g)=>{f.set(g,this._driver.computeStyle(u,g,U))})});let l=a.map(f=>{let u=o.get(f.element);return this._buildPlayer(f,new Map,u)}),c=ne(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw Yr(e);return t}listen(e,t,n,r){let s=qt(t,"","","");return Bt(this._getPlayer(e),n,s,r),()=>{}}command(e,t,n,r){if(n=="register"){this.register(e,r[0]);return}if(n=="create"){let a=r[0]||{};this.create(e,t,a);return}let s=this._getPlayer(e);switch(n){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e);break}}},hi="ng-animate-queued",Rs=".ng-animate-queued",St="ng-animate-disabled",Ls=".ng-animate-disabled",xs="ng-star-inserted",Fs=".ng-star-inserted",zs=[],Pi={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},js={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},K="__ng_removed",ke=class{get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let n=e&&e.hasOwnProperty("value"),r=n?e.value:e;if(this.value=Bs(r),n){let s=e,{value:a}=s,o=Jt(s,["value"]);this.options=o}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let n=this.options.params;Object.keys(t).forEach(r=>{n[r]==null&&(n[r]=t[r])})}}},Ee="void",Et=new ke(Ee),Ft=class{constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,B(t,this._hostClassName)}listen(e,t,n,r){if(!this._triggers.has(t))throw Xr(n,t);if(n==null||n.length==0)throw Zr(t);if(!qs(n))throw Jr(n,t);let s=z(this._elementListeners,e,[]),a={name:t,phase:n,callback:r};s.push(a);let o=z(this._engine.statesByElement,e,new Map);return o.has(t)||(B(e,$e),B(e,$e+"-"+t),o.set(t,Et)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(a);l>=0&&s.splice(l,1),this._triggers.has(t)||o.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw es(e);return t}trigger(e,t,n,r=!0){let s=this._getTrigger(t),a=new Pe(this.id,t,e),o=this._engine.statesByElement.get(e);o||(B(e,$e),B(e,$e+"-"+t),this._engine.statesByElement.set(e,o=new Map));let l=o.get(t),c=new ke(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),o.set(t,c),l||(l=Et),!(c.value===Ee)&&l.value===c.value){if(!Vs(l.params,c.params)){let m=[],_=s.matchStyles(l.value,l.params,m),T=s.matchStyles(c.value,c.params,m);m.length?this._engine.reportError(m):this._engine.afterFlush(()=>{le(e,_),Q(e,T)})}return}let v=z(this._engine.playersByElement,e,[]);v.forEach(m=>{m.namespaceId==this.id&&m.triggerName==t&&m.queued&&m.destroy()});let g=s.matchTransition(l.value,c.value,e,c.params),d=!1;if(!g){if(!r)return;g=s.fallbackTransition,d=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:g,fromState:l,toState:c,player:a,isFallbackTransition:d}),d||(B(e,hi),a.onStart(()=>{me(e,hi)})),a.onDone(()=>{let m=this.players.indexOf(a);m>=0&&this.players.splice(m,1);let _=this._engine.playersByElement.get(e);if(_){let T=_.indexOf(a);T>=0&&_.splice(T,1)}}),this.players.push(a),v.push(a),a}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(n=>n.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let n=this._engine.driver.query(e,Ve,!0);n.forEach(r=>{if(r[K])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(a=>a.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,n,r){let s=this._engine.statesByElement.get(e),a=new Map;if(s){let o=[];if(s.forEach((l,c)=>{if(a.set(c,l.value),this._triggers.has(c)){let f=this.trigger(e,c,Ee,r);f&&o.push(f)}}),o.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,a),n&&ne(o).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),n=this._engine.statesByElement.get(e);if(t&&n){let r=new Set;t.forEach(s=>{let a=s.name;if(r.has(a))return;r.add(a);let l=this._triggers.get(a).fallbackTransition,c=n.get(a)||Et,f=new ke(Ee),u=new Pe(this.id,a,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:a,transition:l,fromState:c,toState:f,player:u,isFallbackTransition:!0})})}}removeNode(e,t){let n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(n.totalAnimations){let s=n.players.length?n.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let a=e;for(;a=a.parentNode;)if(n.statesByElement.get(a)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)n.markElementAsRemoved(this.id,e,!1,t);else{let s=e[K];(!s||s===Pi)&&(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){B(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(n=>{let r=n.player;if(r.destroyed)return;let s=n.element,a=this._elementListeners.get(s);a&&a.forEach(o=>{if(o.name==n.triggerName){let l=qt(s,n.triggerName,n.fromState.value,n.toState.value);l._data=e,Bt(n.player,o.phase,l,o.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(n)}),this._queue=[],t.sort((n,r)=>{let s=n.transition.ast.depCount,a=r.transition.ast.depCount;return s==0||a==0?s-a:this._engine.driver.containsElement(n.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},zt=class{_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,n,r){this.bodyNode=e,this.driver=t,this._normalizer=n,this.scheduler=r,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(s,a)=>{}}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(n=>{n.queued&&e.push(n)})}),e}createNamespace(e,t){let n=new Ft(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){let n=this._namespaceList,r=this.namespacesByHostElement;if(n.length-1>=0){let a=!1,o=this.driver.getParentElement(t);for(;o;){let l=r.get(o);if(l){let c=n.indexOf(l);n.splice(c+1,0,e),a=!0;break}o=this.driver.getParentElement(o)}a||n.unshift(e)}else n.push(e);return r.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let n=this._fetchNamespace(e);this.namespacesByHostElement.delete(n.hostElement);let r=this._namespaceList.indexOf(n);r>=0&&this._namespaceList.splice(r,1),n.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,n=this.statesByElement.get(e);if(n){for(let r of n.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&t.add(s)}}return t}trigger(e,t,n,r){if(Ke(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,n,r),!0}return!1}insertNode(e,t,n,r){if(!Ke(t))return;let s=t[K];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let a=this.collectedLeaveElements.indexOf(t);a>=0&&this.collectedLeaveElements.splice(a,1)}if(e){let a=this._fetchNamespace(e);a&&a.insertNode(t,n)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),B(e,St)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),me(e,St))}removeNode(e,t,n){if(Ke(t)){this.scheduler?.notify();let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,n):this.markElementAsRemoved(e,t,!1,n);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,n)}else this._onRemovalComplete(t,n)}markElementAsRemoved(e,t,n,r,s){this.collectedLeaveElements.push(t),t[K]={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,n,r,s){return Ke(t)?this._fetchNamespace(e).listen(t,n,r,s):()=>{}}_buildInstruction(e,t,n,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,Ve,!0);t.forEach(n=>this.destroyActiveAnimationsForElement(n)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,kt,!0),t.forEach(n=>this.finishActiveQueriedAnimationOnElement(n)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(n=>{n.queued?n.markedForDestroy=!0:n.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(n=>n.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return ne(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[K];if(t&&t.setForRemoval){if(e[K]=Pi,t.namespaceId){this.destroyInnerAnimations(e);let n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(St)&&this.markElementAsDisabled(e,!1),this.driver.query(e,Ls,!0).forEach(n=>{this.markElementAsDisabled(n,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((n,r)=>this._balanceNamespaceList(n,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++){let r=this.collectedEnterElements[n];B(r,xs)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let n=[];try{t=this._flushAnimations(n,e)}finally{for(let r=0;r<n.length;r++)n[r]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++){let r=this.collectedLeaveElements[n];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(n=>n()),this._flushFns=[],this._whenQuietFns.length){let n=this._whenQuietFns;this._whenQuietFns=[],t.length?ne(t).onDone(()=>{n.forEach(r=>r())}):n.forEach(r=>r())}}reportError(e){throw ts(e)}_flushAnimations(e,t){let n=new Ae,r=[],s=new Map,a=[],o=new Map,l=new Map,c=new Map,f=new Set;this.disabledNodes.forEach(h=>{f.add(h);let p=this.driver.query(h,Rs,!0);for(let y=0;y<p.length;y++)f.add(p[y])});let u=this.bodyNode,v=Array.from(this.statesByElement.keys()),g=pi(v,this.collectedEnterElements),d=new Map,m=0;g.forEach((h,p)=>{let y=wi+m++;d.set(p,y),h.forEach(w=>B(w,y))});let _=[],T=new Set,A=new Set;for(let h=0;h<this.collectedLeaveElements.length;h++){let p=this.collectedLeaveElements[h],y=p[K];y&&y.setForRemoval&&(_.push(p),T.add(p),y.hasAnimation?this.driver.query(p,Fs,!0).forEach(w=>T.add(w)):A.add(p))}let M=new Map,k=pi(v,Array.from(T));k.forEach((h,p)=>{let y=At+m++;M.set(p,y),h.forEach(w=>B(w,y))}),e.push(()=>{g.forEach((h,p)=>{let y=d.get(p);h.forEach(w=>me(w,y))}),k.forEach((h,p)=>{let y=M.get(p);h.forEach(w=>me(w,y))}),_.forEach(h=>{this.processLeaveNode(h)})});let W=[],C=[];for(let h=this._namespaceList.length-1;h>=0;h--)this._namespaceList[h].drainQueuedTransitions(t).forEach(y=>{let w=y.player,I=y.element;if(W.push(w),this.collectedEnterElements.length){let D=I[K];if(D&&D.setForMove){if(D.previousTriggersValues&&D.previousTriggersValues.has(y.triggerName)){let re=D.previousTriggersValues.get(y.triggerName),j=this.statesByElement.get(y.element);if(j&&j.has(y.triggerName)){let Me=j.get(y.triggerName);Me.value=re,j.set(y.triggerName,Me)}}w.destroy();return}}let V=!u||!this.driver.containsElement(u,I),L=M.get(I),J=d.get(I),P=this._buildInstruction(y,n,J,L,V);if(P.errors&&P.errors.length){C.push(P);return}if(V){w.onStart(()=>le(I,P.fromStyles)),w.onDestroy(()=>Q(I,P.toStyles)),r.push(w);return}if(y.isFallbackTransition){w.onStart(()=>le(I,P.fromStyles)),w.onDestroy(()=>Q(I,P.toStyles)),r.push(w);return}let Zt=[];P.timelines.forEach(D=>{D.stretchStartingKeyframe=!0,this.disabledNodes.has(D.element)||Zt.push(D)}),P.timelines=Zt,n.append(I,P.timelines);let Ri={instruction:P,player:w,element:I};a.push(Ri),P.queriedElements.forEach(D=>z(o,D,[]).push(w)),P.preStyleProps.forEach((D,re)=>{if(D.size){let j=l.get(re);j||l.set(re,j=new Set),D.forEach((Me,it)=>j.add(it))}}),P.postStyleProps.forEach((D,re)=>{let j=c.get(re);j||c.set(re,j=new Set),D.forEach((Me,it)=>j.add(it))})});if(C.length){let h=[];C.forEach(p=>{h.push(ns(p.triggerName,p.errors))}),W.forEach(p=>p.destroy()),this.reportError(h)}let N=new Map,O=new Map;a.forEach(h=>{let p=h.element;n.has(p)&&(O.set(p,p),this._beforeAnimationBuild(h.player.namespaceId,h.instruction,N))}),r.forEach(h=>{let p=h.element;this._getPreviousPlayers(p,!1,h.namespaceId,h.triggerName,null).forEach(w=>{z(N,p,[]).push(w),w.destroy()})});let G=_.filter(h=>gi(h,l,c)),q=new Map;mi(q,this.driver,A,c,U).forEach(h=>{gi(h,l,c)&&G.push(h)});let ie=new Map;g.forEach((h,p)=>{mi(ie,this.driver,new Set(h),l,Oe)}),G.forEach(h=>{let p=q.get(h),y=ie.get(h);q.set(h,new Map([...p?.entries()??[],...y?.entries()??[]]))});let nt=[],Yt=[],Xt={};a.forEach(h=>{let{element:p,player:y,instruction:w}=h;if(n.has(p)){if(f.has(p)){y.onDestroy(()=>Q(p,w.toStyles)),y.disabled=!0,y.overrideTotalTime(w.totalTime),r.push(y);return}let I=Xt;if(O.size>1){let L=p,J=[];for(;L=L.parentNode;){let P=O.get(L);if(P){I=P;break}J.push(L)}J.forEach(P=>O.set(P,I))}let V=this._buildAnimation(y.namespaceId,w,N,s,ie,q);if(y.setRealPlayer(V),I===Xt)nt.push(y);else{let L=this.playersByElement.get(I);L&&L.length&&(y.parentPlayer=ne(L)),r.push(y)}}else le(p,w.fromStyles),y.onDestroy(()=>Q(p,w.toStyles)),Yt.push(y),f.has(p)&&r.push(y)}),Yt.forEach(h=>{let p=s.get(h.element);if(p&&p.length){let y=ne(p);h.setRealPlayer(y)}}),r.forEach(h=>{h.parentPlayer?h.syncPlayerEvents(h.parentPlayer):h.destroy()});for(let h=0;h<_.length;h++){let p=_[h],y=p[K];if(me(p,At),y&&y.hasAnimation)continue;let w=[];if(o.size){let V=o.get(p);V&&V.length&&w.push(...V);let L=this.driver.query(p,kt,!0);for(let J=0;J<L.length;J++){let P=o.get(L[J]);P&&P.length&&w.push(...P)}}let I=w.filter(V=>!V.destroyed);I.length?Ks(this,p,I):this.processLeaveNode(p)}return _.length=0,nt.forEach(h=>{this.players.push(h),h.onDone(()=>{h.destroy();let p=this.players.indexOf(h);this.players.splice(p,1)}),h.play()}),nt}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,r,s){let a=[];if(t){let o=this.playersByQueriedElement.get(e);o&&(a=o)}else{let o=this.playersByElement.get(e);if(o){let l=!s||s==Ee;o.forEach(c=>{c.queued||!l&&c.triggerName!=r||a.push(c)})}}return(n||r)&&(a=a.filter(o=>!(n&&n!=o.namespaceId||r&&r!=o.triggerName))),a}_beforeAnimationBuild(e,t,n){let r=t.triggerName,s=t.element,a=t.isRemovalTransition?void 0:e,o=t.isRemovalTransition?void 0:r;for(let l of t.timelines){let c=l.element,f=c!==s,u=z(n,c,[]);this._getPreviousPlayers(c,f,a,o,t.toState).forEach(g=>{let d=g.getRealPlayer();d.beforeDestroy&&d.beforeDestroy(),g.destroy(),u.push(g)})}le(s,t.fromStyles)}_buildAnimation(e,t,n,r,s,a){let o=t.triggerName,l=t.element,c=[],f=new Set,u=new Set,v=t.timelines.map(d=>{let m=d.element;f.add(m);let _=m[K];if(_&&_.removedBeforeQueried)return new fe(d.duration,d.delay);let T=m!==l,A=Ws((n.get(m)||zs).map(N=>N.getRealPlayer())).filter(N=>{let O=N;return O.element?O.element===m:!1}),M=s.get(m),k=a.get(m),W=yi(this._normalizer,d.keyframes,M,k),C=this._buildPlayer(d,W,A);if(d.subTimeline&&r&&u.add(m),T){let N=new Pe(e,o,m);N.setRealPlayer(C),c.push(N)}return C});c.forEach(d=>{z(this.playersByQueriedElement,d.element,[]).push(d),d.onDone(()=>$s(this.playersByQueriedElement,d.element,d))}),f.forEach(d=>B(d,ai));let g=ne(v);return g.onDestroy(()=>{f.forEach(d=>me(d,ai)),Q(l,t.toStyles)}),u.forEach(d=>{z(r,d,[]).push(g)}),g}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new fe(e.duration,e.delay)}},Pe=class{constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n,this._player=new fe,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.parentPlayer=null,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,n)=>{t.forEach(r=>Bt(e,n,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){z(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function $s(i,e,t){let n=i.get(e);if(n){if(n.length){let r=n.indexOf(t);n.splice(r,1)}n.length==0&&i.delete(e)}return n}function Bs(i){return i??null}function Ke(i){return i&&i.nodeType===1}function qs(i){return i=="start"||i=="done"}function di(i,e){let t=i.style.display;return i.style.display=e??"none",t}function mi(i,e,t,n,r){let s=[];t.forEach(l=>s.push(di(l)));let a=[];n.forEach((l,c)=>{let f=new Map;l.forEach(u=>{let v=e.computeStyle(c,u,r);f.set(u,v),(!v||v.length==0)&&(c[K]=js,a.push(c))}),i.set(c,f)});let o=0;return t.forEach(l=>di(l,s[o++])),a}function pi(i,e){let t=new Map;if(i.forEach(o=>t.set(o,[])),e.length==0)return t;let n=1,r=new Set(e),s=new Map;function a(o){if(!o)return n;let l=s.get(o);if(l)return l;let c=o.parentNode;return t.has(c)?l=c:r.has(c)?l=n:l=a(c),s.set(o,l),l}return e.forEach(o=>{let l=a(o);l!==n&&t.get(l).push(o)}),t}function B(i,e){i.classList?.add(e)}function me(i,e){i.classList?.remove(e)}function Ks(i,e,t){ne(t).onDone(()=>i.processLeaveNode(e))}function Ws(i){let e=[];return Mi(i,e),e}function Mi(i,e){for(let t=0;t<i.length;t++){let n=i[t];n instanceof ot?Mi(n.players,e):e.push(n)}}function Vs(i,e){let t=Object.keys(i),n=Object.keys(e);if(t.length!=n.length)return!1;for(let r=0;r<t.length;r++){let s=t[r];if(!e.hasOwnProperty(s)||i[s]!==e[s])return!1}return!0}function gi(i,e,t){let n=t.get(i);if(!n)return!1;let r=e.get(i);return r?n.forEach(s=>r.add(s)):e.set(i,n),t.delete(i),!0}var ge=class{constructor(e,t,n,r){this._driver=t,this._normalizer=n,this._triggerCache={},this.onRemovalComplete=(s,a)=>{},this._transitionEngine=new zt(e.body,t,n,r),this._timelineEngine=new xt(e.body,t,n),this._transitionEngine.onRemovalComplete=(s,a)=>this.onRemovalComplete(s,a)}registerTrigger(e,t,n,r,s){let a=e+"-"+r,o=this._triggerCache[a];if(!o){let l=[],c=[],f=Ti(this._driver,s,l,c);if(l.length)throw Vr(r,l);c.length&&void 0,o=Is(r,f,this._normalizer),this._triggerCache[a]=o}this._transitionEngine.registerTrigger(t,r,o)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}onRemove(e,t,n){this._transitionEngine.removeNode(e,t,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,r){if(n.charAt(0)=="@"){let[s,a]=ri(n),o=r;this._timelineEngine.command(s,t,a,o)}else this._transitionEngine.trigger(e,t,n,r)}listen(e,t,n,r,s){if(n.charAt(0)=="@"){let[a,o]=ri(n);return this._timelineEngine.listen(a,t,o,s)}return this._transitionEngine.listen(e,t,n,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function Us(i,e){let t=null,n=null;return Array.isArray(e)&&e.length?(t=Tt(e[0]),e.length>1&&(n=Tt(e[e.length-1]))):e instanceof Map&&(t=Tt(e)),t||n?new jt(i,t,n):null}var pe=class pe{constructor(e,t,n){this._element=e,this._startStyles=t,this._endStyles=n,this._state=0;let r=pe.initialStylesByElement.get(e);r||pe.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&Q(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Q(this._element,this._initialStyles),this._endStyles&&(Q(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(pe.initialStylesByElement.delete(this._element),this._startStyles&&(le(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(le(this._element,this._endStyles),this._endStyles=null),Q(this._element,this._initialStyles),this._state=3)}};pe.initialStylesByElement=new WeakMap;var jt=pe;function Tt(i){let e=null;return i.forEach((t,n)=>{Hs(n)&&(e=e||new Map,e.set(n,t))}),e}function Hs(i){return i==="display"||i==="position"}var Ze=class{constructor(e,t,n,r){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map;let t=()=>this._onFinish();this.domPlayer.addEventListener("finish",t),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",t)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(n=>{t.push(Object.fromEntries(n))}),t}_triggerWebAnimation(e,t,n){return e.animate(this._convertKeyframesToObject(t),n)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((n,r)=>{r!=="offset"&&e.set(r,this._finished?n:Ut(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},Je=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}matchesElement(e,t){return!1}containsElement(e,t){return vi(e,t)}getParentElement(e){return Kt(e)}query(e,t,n){return bi(e,t,n)}computeStyle(e,t,n){return Ut(e,t)}animate(e,t,n,r,s,a=[]){let o=r==0?"both":"forwards",l={duration:n,delay:r,fill:o};s&&(l.easing=s);let c=new Map,f=a.filter(g=>g instanceof Ze);ds(n,r)&&f.forEach(g=>{g.currentSnapshot.forEach((d,m)=>c.set(m,d))});let u=us(t).map(g=>new Map(g));u=ms(e,u,c);let v=Us(e,u);return new Ze(e,u,l,v)}};var We="@",Ci="@.disabled",et=class{constructor(e,t,n,r){this.namespaceId=e,this.delegate=t,this.engine=n,this._onDestroy=r,this.\u0275type=0}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n,r=!0){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){t.charAt(0)==We&&t==Ci?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},$t=class extends et{constructor(e,t,n,r,s){super(t,n,r,s),this.factory=e,this.namespaceId=t}setProperty(e,t,n){t.charAt(0)==We?t.charAt(1)=="."&&t==Ci?(n=n===void 0?!0:!!n,this.disableAnimations(e,n)):this.engine.process(this.namespaceId,e,t.slice(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if(t.charAt(0)==We){let r=Qs(e),s=t.slice(1),a="";return s.charAt(0)!=We&&([s,a]=Gs(s)),this.engine.listen(this.namespaceId,r,s,a,o=>{let l=o._data||-1;this.factory.scheduleListenerCallback(l,n,o)})}return this.delegate.listen(e,t,n)}};function Qs(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function Gs(i){let e=i.indexOf("."),t=i.substring(0,e),n=i.slice(e+1);return[t,n]}var tt=class{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,t.onRemovalComplete=(r,s)=>{let a=s?.parentNode(r);a&&s.removeChild(a,r)}}createRenderer(e,t){let n="",r=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,f=c.get(r);if(!f){let u=()=>c.delete(r);f=new et(n,r,this.engine,u),c.set(r,f)}return f}let s=t.id,a=t.id+"-"+this._currentId;this._currentId++,this.engine.register(a,e);let o=c=>{Array.isArray(c)?c.forEach(o):this.engine.registerTrigger(s,a,e,c.name,c)};return t.data.animation.forEach(o),new $t(this,a,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(n));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(s=>{let[a,o]=s;a(o)}),this._animationCallbacksBuffer=[]})}),r.push([t,n])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}};var Xs=(()=>{let e=class e extends ge{constructor(n,r,s){super(n,r,s,en(tn,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(r){return new(r||e)(Ne(cn),Ne(ce),Ne(ue))},e.\u0275prov=ye({token:e,factory:e.\u0275fac});let i=e;return i})();function Zs(){return new He}function Js(i,e,t){return new tt(i,e,t)}var Ii=[{provide:ue,useFactory:Zs},{provide:ge,useClass:Xs},{provide:nn,useFactory:Js,deps:[dn,ge,rn]}],Ni=[{provide:ce,useFactory:()=>new Je},{provide:rt,useValue:"BrowserAnimations"},...Ii],ea=[{provide:ce,useClass:Wt},{provide:rt,useValue:"NoopAnimations"},...Ii],Oi=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:n.disableAnimations?ea:Ni}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=te({type:e}),e.\u0275inj=ee({providers:Ni,imports:[Ie]});let i=e;return i})();var Di=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=te({type:e,bootstrap:[Sn]}),e.\u0275inj=ee({providers:[{provide:un,useClass:fn},pn()],imports:[Ie,wn,hn,ni,bn.forRoot(),Oi]});let i=e;return i})();mn().bootstrapModule(Di).catch(i=>console.error(i));
