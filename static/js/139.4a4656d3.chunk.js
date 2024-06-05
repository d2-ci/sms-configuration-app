/*! For license information please see 139.4a4656d3.chunk.js.LICENSE.txt */
(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[139],{447:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return C})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return A})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return L})),n.d(e,"i",(function(){return U}));var r=n(17),o=n(1),i=n.n(o),a=(n(0),n(454)),c=n(499),u=n(451),s=n(5),f=n(500),l=n.n(f),p=(n(452),n(18)),d=(n(503),function(t){var e=Object(c.a)();return e.displayName=t,e}("Router-History")),h=function(t){var e=Object(c.a)();return e.displayName=t,e}("Router"),v=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(r.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i.a.createElement(h.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(d.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i.a.Component);i.a.Component;var y=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(i.a.Component);var m={},g=0;function b(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(m[t])return m[t];var e=l.a.compile(t);return g<1e4&&(m[t]=e,g++),e}(t)(e,{pretty:!0})}function O(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return i.a.createElement(h.Consumer,null,(function(t){t||Object(u.a)(!1);var r=t.history,c=t.staticContext,f=o?r.push:r.replace,l=Object(a.c)(e?"string"===typeof n?b(n,e.params):Object(s.a)({},n,{pathname:b(n.pathname,e.params)}):n);return c?(f(l),null):i.a.createElement(y,{onMount:function(){f(l)},onUpdate:function(t,e){var n=Object(a.c)(e.to);Object(a.f)(n,Object(s.a)({},l,{key:n.key}))||f(l)},to:n})}))}var w={},j=0;function x(t,e){void 0===e&&(e={}),("string"===typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=w[n]||(w[n]={});if(r[t])return r[t];var o=[],i={regexp:l()(t,o,e),keys:o};return j<1e4&&(r[t]=i,j++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],p=u.slice(1),d=t===f;return i&&!d?null:{path:n,url:"/"===n&&""===f?"/":f,isExact:d,params:a.reduce((function(t,e,n){return t[e.name]=p[n],t}),{})}}),null)}var C=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(h.Consumer,null,(function(e){e||Object(u.a)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?x(n.pathname,t.props):e.match,o=Object(s.a)({},e,{location:n,match:r}),a=t.props,c=a.children,f=a.component,l=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i.a.createElement(h.Provider,{value:o},o.match?c?"function"===typeof c?c(o):c:f?i.a.createElement(f,o):l?l(o):null:"function"===typeof c?c(o):null)}))},e}(i.a.Component);function E(t){return"/"===t.charAt(0)?t:"/"+t}function k(t,e){if(!t)return e;var n=E(t);return 0!==e.pathname.indexOf(n)?e:Object(s.a)({},e,{pathname:e.pathname.substr(n.length)})}function S(t){return"string"===typeof t?t:Object(a.e)(t)}function R(t){return function(){Object(u.a)(!1)}}function P(){}i.a.Component;var A=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(h.Consumer,null,(function(e){e||Object(u.a)(!1);var n,r,o=t.props.location||e.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?x(o.pathname,Object(s.a)({},t.props,{path:a})):e.match}})),r?i.a.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i.a.Component);var $=i.a.useContext;function T(){return $(d)}function L(){var t=$(h).match;return t?t.params:{}}function U(t){var e=$(h).location,n=$(h).match;return t?x(e.pathname,t):n}},448:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return m}));var r=n(447),o=n(17),i=n(1),a=n.n(i),c=n(454),u=(n(0),n(5)),s=n(18),f=n(451);a.a.Component;var l=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=Object(c.b)(e.props),e}return Object(o.a)(e,t),e.prototype.render=function(){return a.a.createElement(r.c,{history:this.history,children:this.props.children})},e}(a.a.Component);var p=function(t,e){return"function"===typeof t?t(e):t},d=function(t,e){return"string"===typeof t?Object(c.c)(t,null,null,e):t},h=function(t){return t},v=a.a.forwardRef;"undefined"===typeof v&&(v=h);var y=v((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,i=Object(s.a)(t,["innerRef","navigate","onClick"]),c=i.target,f=Object(u.a)({},i,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return f.ref=h!==v&&e||n,a.a.createElement("a",f)}));var m=v((function(t,e){var n=t.component,o=void 0===n?y:n,i=t.replace,c=t.to,l=t.innerRef,m=Object(s.a)(t,["component","replace","to","innerRef"]);return a.a.createElement(r.e.Consumer,null,(function(t){t||Object(f.a)(!1);var n=t.history,r=d(p(c,t.location),t.location),s=r?n.createHref(r):"",y=Object(u.a)({},m,{href:s,navigate:function(){var e=p(c,t.location);(i?n.replace:n.push)(e)}});return h!==v?y.ref=e||l:y.innerRef=l,a.a.createElement(o,y)}))})),g=function(t){return t},b=a.a.forwardRef;"undefined"===typeof b&&(b=g);b((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,i=t.activeClassName,c=void 0===i?"active":i,l=t.activeStyle,h=t.className,v=t.exact,y=t.isActive,O=t.location,w=t.sensitive,j=t.strict,x=t.style,C=t.to,E=t.innerRef,k=Object(s.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.a.createElement(r.e.Consumer,null,(function(t){t||Object(f.a)(!1);var n=O||t.location,i=d(p(C,n),n),s=i.pathname,S=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=S?Object(r.f)(n.pathname,{path:S,exact:v,sensitive:w,strict:j}):null,P=!!(y?y(R,n):R),A=P?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(h,c):h,$=P?Object(u.a)({},x,{},l):x,T=Object(u.a)({"aria-current":P&&o||null,className:A,style:$,to:i},k);return g!==b?T.ref=e||E:T.innerRef=E,a.a.createElement(m,T)}))}))},450:function(t,e,n){"use strict";const r=n(492),o=n(493),i=n(494);function a(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function u(t,e){return e.decode?o(t):t}function s(t){return Array.isArray(t)?t.sort():"object"===typeof t?s(Object.keys(t)).sort(((t,e)=>Number(t)-Number(e))).map((e=>t[e])):t}function f(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function l(t){const e=(t=f(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function p(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function d(t,e){a((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const n=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return(t,n,r)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};case"comma":case"separator":return(e,n,r)=>{const o="string"===typeof n&&n.includes(t.arrayFormatSeparator),i="string"===typeof n&&!o&&u(n,t).includes(t.arrayFormatSeparator);n=i?u(n,t):n;const a=o||i?n.split(t.arrayFormatSeparator).map((e=>u(e,t))):null===n?n:u(n,t);r[e]=a};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e),r=Object.create(null);if("string"!==typeof t)return r;if(!(t=t.trim().replace(/^[?#&]/,"")))return r;for(const o of t.split("&")){let[t,a]=i(e.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator"].includes(e.arrayFormat)?a:u(a,e),n(u(t,e),a,r)}for(const o of Object.keys(r)){const t=r[o];if("object"===typeof t&&null!==t)for(const n of Object.keys(t))t[n]=p(t[n],e);else r[o]=p(t,e)}return!1===e.sort?r:(!0===e.sort?Object.keys(r).sort():Object.keys(r).sort(e.sort)).reduce(((t,e)=>{const n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=s(n):t[e]=n,t}),Object.create(null))}e.extract=l,e.parse=d,e.stringify=(t,e)=>{if(!t)return"";a((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const n=n=>{return e.skipNull&&(null===(r=t[n])||void 0===r)||e.skipEmptyString&&""===t[n];var r},r=function(t){switch(t.arrayFormat){case"index":return e=>(n,r)=>{const o=n.length;return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[c(e,t),"[",o,"]"].join("")]:[...n,[c(e,t),"[",c(o,t),"]=",c(r,t)].join("")]};case"bracket":return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[c(e,t),"[]"].join("")]:[...n,[c(e,t),"[]=",c(r,t)].join("")];case"comma":case"separator":return e=>(n,r)=>null===r||void 0===r||0===r.length?n:0===n.length?[[c(e,t),"=",c(r,t)].join("")]:[[n,c(r,t)].join(t.arrayFormatSeparator)];default:return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,c(e,t)]:[...n,[c(e,t),"=",c(r,t)].join("")]}}(e),o={};for(const a of Object.keys(t))n(a)||(o[a]=t[a]);const i=Object.keys(o);return!1!==e.sort&&i.sort(e.sort),i.map((n=>{const o=t[n];return void 0===o?"":null===o?c(n,e):Array.isArray(o)?o.reduce(r(n),[]).join("&"):c(n,e)+"="+c(o,e)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[n,r]=i(t,"#");return Object.assign({url:n.split("?")[0]||"",query:d(l(t),e)},e&&e.parseFragmentIdentifier&&r?{fragmentIdentifier:u(r,e)}:{})},e.stringifyUrl=(t,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=f(t.url).split("?")[0]||"",o=e.extract(t.url),i=e.parse(o,{sort:!1}),a=Object.assign(i,t.query);let u=e.stringify(a,n);u&&(u=`?${u}`);let s=function(t){let e="";const n=t.indexOf("#");return-1!==n&&(e=t.slice(n)),e}(t.url);return t.fragmentIdentifier&&(s=`#${c(t.fragmentIdentifier,n)}`),`${r}${u}${s}`}},451:function(t,e,n){"use strict";var r="Invariant failed";e.a=function(t,e){if(!t)throw new Error(r)}},452:function(t,e,n){"use strict";t.exports=n(502)},453:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return S})),n.d(e,"b",(function(){return M}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t,e,n){void 0===n&&(n=!0);return r(r({},t),{decode:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var i=t.decode.apply(t,r);return void 0===i||n&&null===i?e:i}})}function i(t,e){if(null==t)return t;if(0===t.length&&(!e||e&&""!==t))return null;var n=t instanceof Array?t[0]:t;return null==n||e||""!==n?n:null}function a(t){var e=i(t);return null==e?e:""===e?null:+e}function c(t){return null==t?t:String(t)}function u(t){var e=i(t,!0);return null==e?e:String(e)}var s={encode:c,decode:u},f={encode:function(t){return null==t?t:String(t)},decode:a},l=n(450),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};'{}[],":'.split("").map((function(t){return[t,encodeURIComponent(t)]}));function d(t,e,n){var r=Object(l.stringify)(t,n);n&&n.transformSearchString&&(r=n.transformSearchString(r));var o=r.length?"?"+r:"",i=Object(l.parseUrl)(e.href||"").url+o;return p(p({},e),{key:""+Date.now(),href:i,search:o,query:t})}function h(t,e){for(var n={},r=0,o=Object.keys(e);r<o.length;r++){var i=o[r],a=e[i];t[i]?n[i]=t[i].encode(e[i]):n[i]=null==a?a:String(a)}return n}var v=n(1),y=Object.prototype.hasOwnProperty;function m(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t&&e!==e}function g(t,e,n){var r,o;if(m(t,e))return!0;if("object"!==typeof t||null===t||"object"!==typeof e||null===e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=0;c<i.length;c++){var u=null!==(o=null===(r=null===n||void 0===n?void 0:n[i[c]])||void 0===r?void 0:r.equals)&&void 0!==o?o:m;if(!y.call(e,i[c])||!u(t[i[c]],e[i[c]]))return!1}return!0}function b(t,e,n){void 0===n&&(n=g);var r=(null==t.current||null==e)&&t.current===e||!n(t.current,e);v.useEffect((function(){r&&(t.current=e)}),[t,e,r])}function O(t){return"object"===typeof t?"undefined"!==typeof window?t.search:Object(l.extract)(""+t.pathname+(t.search?t.search:"")):""}function w(t,e,n,r){switch(void 0===n&&(n="pushIn"),n){case"replace":case"push":return d(t,e,r);case"replaceIn":case"pushIn":default:return function(t,e,n){var r=e.query||Object(l.parse)(e.search);return d(p(p({},r),t),e,n)}(t,e,r)}}var j=v.createContext({location:{},getLocation:function(){return{}},setLocation:function(){}});function x(){return v.useContext(j)}function C(t){var e=t.history,n=t.location,r=t.children,o=t.stringifyOptions,i=v.useRef(n);v.useEffect((function(){i.current=n}),[n]);var a=v.useCallback((function(){return i.current}),[i]),c=v.useCallback((function(t,n){i.current=w(t,null==e||null==e.location?i.current:e.location,n,o),e&&function(t,e,n){switch(void 0===n&&(n="pushIn"),n){case"pushIn":case"push":t.push(e);break;case"replaceIn":case"replace":default:t.replace(e)}}(e,i.current,n)}),[e,o]);return v.createElement(j.Provider,{value:{location:n,getLocation:a,setLocation:c}},r)}var E=function(t){var e=t,n=Object(l.parse)(e||"");return function(t){return e!==t&&(e=t,n=Object(l.parse)(e)),n}}();function k(t,e,n,r,o,i){var a=!g(n.current,e),c=E(O(t));if(!(r.current!==c)&&!a&&void 0!==o.current)return{encodedValues:o.current,decodedValues:i.current};for(var u=o.current||{},s=i.current||{},f={},l={},p=0,d=Object.keys(e);p<d.length;p++){var h=d[p],v=e[h],y=void 0,m=void 0;!g(u[h],c[h])||void 0===u[h]&&void 0===s[h]?(y=c[h],m=v.decode(y)):(y=u[h],m=s[h]),f[h]=y,l[h]=m}return{encodedValues:f,decodedValues:!g(i.current,l,e)?l:i.current}}var S=function(t){var e=x(),n=e.location,r=e.getLocation,o=e.setLocation,i=E(O(n)),a=v.useRef(t),c=v.useRef(i),u=v.useRef(void 0),s=v.useRef({}),f=k(n,t=g(t,a.current)?a.current:t,a,c,u,s),l=f.encodedValues,p=f.decodedValues;b(c,i),b(a,t),b(u,l),b(s,p,(function(e,n){return g(e,n,t)}));var d={paramConfigMap:t,setLocation:o,getLocation:r},y=v.useRef(d);return y.current=d,[p,v.useCallback((function(t,e){var n,r=y.current;if("function"===typeof t){var o=k(r.getLocation(),r.paramConfigMap,a,c,u,s).decodedValues;s.current=o,n=h(r.paramConfigMap,t(o))}else n=h(r.paramConfigMap,t);r.setLocation(n,e)}),[])]};var R,P,A,$,T=function(){return(T=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function L(t){if(t===A&&null!=$)return $;var e={replace:function(e){t.navigate(e.protocol+"//"+e.host+e.pathname+e.search,{replace:!0})},push:function(e){t.navigate(e.protocol+"//"+e.host+e.pathname+e.search,{replace:!1})},get location(){return t.location}};return A=t,$=e,e}function U(t){var e=void 0===t?{}:t,n=e.history,r=e.location;if("undefined"!==typeof window&&(n||(n=function(t){if(t===R&&null!=P)return P;var e={replace:function(e){t.replaceState(e.state,"",e.protocol+"//"+e.host+e.pathname+e.search)},push:function(e){t.pushState(e.state,"",e.protocol+"//"+e.host+e.pathname+e.search)},get location(){return window.location}};return R=t,P=e,e}(window.history)),r||(r=window.location)),!r)throw new Error("\n        Could not read the location. Is the router wired up correctly?\n      ");return{history:n,location:r}}function M(t){var e=t.children,n=t.ReactRouterRoute,r=t.reachHistory,o=t.history,i=t.location,a=t.stringifyOptions,c=v.useRef(a),u=!g(c.current,a)?a:c.current;return v.useEffect((function(){c.current=u}),[u]),n?v.createElement(n,null,(function(t){return v.createElement(C,T({stringifyOptions:u},U(t)),e)})):r?v.createElement(C,T({stringifyOptions:u},U({history:L(r),location:i})),e):v.createElement(C,T({stringifyOptions:u},U({history:o,location:i})),e)}},454:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return P})),n.d(e,"d",(function(){return $})),n.d(e,"c",(function(){return v})),n.d(e,"f",(function(){return y})),n.d(e,"e",(function(){return h}));var r=n(5);function o(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var a=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],a=e&&e.split("/")||[],c=t&&o(t),u=e&&o(e),s=c||u;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var f=a[a.length-1];n="."===f||".."===f||""===f}else n=!1;for(var l=0,p=a.length;p>=0;p--){var d=a[p];"."===d?i(a,p):".."===d?(i(a,p),l++):l&&(i(a,p),l--)}if(!s)for(;l--;l)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var h=a.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h};function c(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var u=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"===typeof e||"object"===typeof n){var r=c(e),o=c(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1},s=n(451);function f(t){return"/"===t.charAt(0)?t:"/"+t}function l(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function d(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function h(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function v(t,e,n,o){var i;"string"===typeof t?(i=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(i=Object(r.a)({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return n&&(i.key=n),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=a(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function y(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&u(t.state,e.state)}function m(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"===typeof t?t(e,n):t;"string"===typeof i?"function"===typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(t,e){e(window.confirm(t))}var O="popstate",w="hashchange";function j(){try{return window.history.state||{}}catch(t){return{}}}function x(t){void 0===t&&(t={}),g||Object(s.a)(!1);var e=window.history,n=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,c=void 0!==a&&a,u=i.getUserConfirmation,l=void 0===u?b:u,y=i.keyLength,x=void 0===y?6:y,C=t.basename?d(f(t.basename)):"";function E(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return C&&(i=p(i,C)),v(i,r,n)}function k(){return Math.random().toString(36).substr(2,x)}var S=m();function R(t){Object(r.a)(D,t),D.length=e.length,S.notifyListeners(D.location,D.action)}function P(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||T(E(t.state))}function A(){T(E(j()))}var $=!1;function T(t){if($)$=!1,R();else{S.confirmTransitionTo(t,"POP",l,(function(e){e?R({action:"POP",location:t}):function(t){var e=D.location,n=U.indexOf(e.key);-1===n&&(n=0);var r=U.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&($=!0,F(o))}(t)}))}}var L=E(j()),U=[L.key];function M(t){return C+h(t)}function F(t){e.go(t)}var I=0;function N(t){1===(I+=t)&&1===t?(window.addEventListener(O,P),o&&window.addEventListener(w,A)):0===I&&(window.removeEventListener(O,P),o&&window.removeEventListener(w,A))}var _=!1;var D={length:e.length,action:"POP",location:L,createHref:M,push:function(t,r){var o="PUSH",i=v(t,r,k(),D.location);S.confirmTransitionTo(i,o,l,(function(t){if(t){var r=M(i),a=i.key,u=i.state;if(n)if(e.pushState({key:a,state:u},null,r),c)window.location.href=r;else{var s=U.indexOf(D.location.key),f=U.slice(0,s+1);f.push(i.key),U=f,R({action:o,location:i})}else window.location.href=r}}))},replace:function(t,r){var o="REPLACE",i=v(t,r,k(),D.location);S.confirmTransitionTo(i,o,l,(function(t){if(t){var r=M(i),a=i.key,u=i.state;if(n)if(e.replaceState({key:a,state:u},null,r),c)window.location.replace(r);else{var s=U.indexOf(D.location.key);-1!==s&&(U[s]=i.key),R({action:o,location:i})}else window.location.replace(r)}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(t){void 0===t&&(t=!1);var e=S.setPrompt(t);return _||(N(1),_=!0),function(){return _&&(_=!1,N(-1)),e()}},listen:function(t){var e=S.appendListener(t);return N(1),function(){N(-1),e()}}};return D}var C="hashchange",E={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+l(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:l,decodePath:f},slash:{encodePath:f,decodePath:f}};function k(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function S(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function R(t){window.location.replace(k(window.location.href)+"#"+t)}function P(t){void 0===t&&(t={}),g||Object(s.a)(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),o=n.getUserConfirmation,i=void 0===o?b:o,a=n.hashType,c=void 0===a?"slash":a,u=t.basename?d(f(t.basename)):"",l=E[c],y=l.encodePath,O=l.decodePath;function w(){var t=O(S());return u&&(t=p(t,u)),v(t)}var j=m();function x(t){Object(r.a)(D,t),D.length=e.length,j.notifyListeners(D.location,D.action)}var P=!1,A=null;function $(){var t,e,n=S(),r=y(n);if(n!==r)R(r);else{var o=w(),a=D.location;if(!P&&(e=o,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(A===h(o))return;A=null,function(t){if(P)P=!1,x();else{var e="POP";j.confirmTransitionTo(t,e,i,(function(n){n?x({action:e,location:t}):function(t){var e=D.location,n=M.lastIndexOf(h(e));-1===n&&(n=0);var r=M.lastIndexOf(h(t));-1===r&&(r=0);var o=n-r;o&&(P=!0,F(o))}(t)}))}}(o)}}var T=S(),L=y(T);T!==L&&R(L);var U=w(),M=[h(U)];function F(t){e.go(t)}var I=0;function N(t){1===(I+=t)&&1===t?window.addEventListener(C,$):0===I&&window.removeEventListener(C,$)}var _=!1;var D={length:e.length,action:"POP",location:U,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=k(window.location.href)),n+"#"+y(u+h(t))},push:function(t,e){var n="PUSH",r=v(t,void 0,void 0,D.location);j.confirmTransitionTo(r,n,i,(function(t){if(t){var e=h(r),o=y(u+e);if(S()!==o){A=e,function(t){window.location.hash=t}(o);var i=M.lastIndexOf(h(D.location)),a=M.slice(0,i+1);a.push(e),M=a,x({action:n,location:r})}else x()}}))},replace:function(t,e){var n="REPLACE",r=v(t,void 0,void 0,D.location);j.confirmTransitionTo(r,n,i,(function(t){if(t){var e=h(r),o=y(u+e);S()!==o&&(A=e,R(o));var i=M.indexOf(h(D.location));-1!==i&&(M[i]=e),x({action:n,location:r})}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(t){void 0===t&&(t=!1);var e=j.setPrompt(t);return _||(N(1),_=!0),function(){return _&&(_=!1,N(-1)),e()}},listen:function(t){var e=j.appendListener(t);return N(1),function(){N(-1),e()}}};return D}function A(t,e,n){return Math.min(Math.max(t,e),n)}function $(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,o=e.initialEntries,i=void 0===o?["/"]:o,a=e.initialIndex,c=void 0===a?0:a,u=e.keyLength,s=void 0===u?6:u,f=m();function l(t){Object(r.a)(O,t),O.length=O.entries.length,f.notifyListeners(O.location,O.action)}function p(){return Math.random().toString(36).substr(2,s)}var d=A(c,0,i.length-1),y=i.map((function(t){return v(t,void 0,"string"===typeof t?p():t.key||p())})),g=h;function b(t){var e=A(O.index+t,0,O.entries.length-1),r=O.entries[e];f.confirmTransitionTo(r,"POP",n,(function(t){t?l({action:"POP",location:r,index:e}):l()}))}var O={length:y.length,action:"POP",location:y[d],index:d,entries:y,createHref:g,push:function(t,e){var r="PUSH",o=v(t,e,p(),O.location);f.confirmTransitionTo(o,r,n,(function(t){if(t){var e=O.index+1,n=O.entries.slice(0);n.length>e?n.splice(e,n.length-e,o):n.push(o),l({action:r,location:o,index:e,entries:n})}}))},replace:function(t,e){var r="REPLACE",o=v(t,e,p(),O.location);f.confirmTransitionTo(o,r,n,(function(t){t&&(O.entries[O.index]=o,l({action:r,location:o}))}))},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(t){var e=O.index+t;return e>=0&&e<O.entries.length},block:function(t){return void 0===t&&(t=!1),f.setPrompt(t)},listen:function(t){return f.appendListener(t)}};return O}},492:function(t,e,n){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,(t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},493:function(t,e,n){"use strict";var r="%[a-f0-9]{2}",o=new RegExp(r,"gi"),i=new RegExp("("+r+")+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],a(n),a(r))}function c(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(o),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(o);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=i.exec(t);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(e){var o=c(r[0]);o!==r[0]&&(n[r[0]]=o)}r=i.exec(t)}n["%C2"]="\ufffd";for(var a=Object.keys(n),u=0;u<a.length;u++){var s=a[u];t=t.replace(new RegExp(s,"g"),n[s])}return t}(t)}}},494:function(t,e,n){"use strict";t.exports=(t,e)=>{if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},499:function(t,e,n){"use strict";(function(t){var r=n(1),o=n.n(r),i=n(17),a=n(0),c=n.n(a),u=1073741823,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{};function f(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var l=o.a.createContext||function(t,e){var n,o,a="__create-react-context-"+function(){var t="__global_unique_id__";return s[t]=(s[t]||0)+1}()+"__",l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=f(e.props.value),e}Object(i.a)(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?n=0:(n="function"===typeof e?e(r,o):u,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(r.Component);l.childContextTypes=((n={})[a]=c.a.object.isRequired,n);var p=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!==((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(i.a)(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=void 0===e||null===e?u:e},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=void 0===t||null===t?u:t},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return p.contextTypes=((o={})[a]=c.a.object,o),{Provider:l,Consumer:p}};e.a=l}).call(this,n(45))},500:function(t,e,n){var r=n(501);t.exports=d,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",f=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],p=n[1],d=n.index;if(c+=t.slice(a,d),a=d+l.length,p)c+=p[1];else{var h=t[a],v=n[2],y=n[3],m=n[4],g=n[5],b=n[6],O=n[7];c&&(r.push(c),c="");var w=null!=v&&null!=h&&h!==v,j="+"===b||"*"===b,x="?"===b||"*"===b,C=n[2]||f,E=m||g;r.push({name:y||i++,prefix:v||"",delimiter:C,optional:x,repeat:j,partial:w,asterisk:!!O,pattern:E?s(E):O?".*":"[^"+u(C)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"===typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var f=t[s];if("string"!==typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!n[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"===typeof s)a+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";e.push(s),s.repeat&&(d+="(?:"+p+d+")*"),a+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(n.delimiter||"/"),v=a.slice(-h.length)===h;return o||(a=(v?a.slice(0,-h.length):a)+"(?:"+h+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+h+"|$)",f(new RegExp("^"+a,l(n)),e)}function d(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(d(t[o],e,n).source);return f(new RegExp("(?:"+r.join("|")+")",l(n)),e)}(t,e,n):function(t,e,n){return p(i(t,n),e,n)}(t,e,n)}},501:function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},502:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function j(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case a:case u:case c:case h:return t;default:switch(t=t&&t.$$typeof){case f:case d:case m:case y:case s:return t;default:return e}}case i:return e}}}function x(t){return j(t)===p}e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=s,e.Element=o,e.ForwardRef=d,e.Fragment=a,e.Lazy=m,e.Memo=y,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=h,e.isAsyncMode=function(t){return x(t)||j(t)===l},e.isConcurrentMode=x,e.isContextConsumer=function(t){return j(t)===f},e.isContextProvider=function(t){return j(t)===s},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return j(t)===d},e.isFragment=function(t){return j(t)===a},e.isLazy=function(t){return j(t)===m},e.isMemo=function(t){return j(t)===y},e.isPortal=function(t){return j(t)===i},e.isProfiler=function(t){return j(t)===u},e.isStrictMode=function(t){return j(t)===c},e.isSuspense=function(t){return j(t)===h},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===p||t===u||t===c||t===h||t===v||"object"===typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===y||t.$$typeof===s||t.$$typeof===f||t.$$typeof===d||t.$$typeof===b||t.$$typeof===O||t.$$typeof===w||t.$$typeof===g)},e.typeOf=j},503:function(t,e,n){"use strict";var r=n(452),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(h){var o=d(n);o&&o!==h&&t(e,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var c=u(e),v=u(n),y=0;y<a.length;++y){var m=a[y];if(!i[m]&&(!r||!r[m])&&(!v||!v[m])&&(!c||!c[m])){var g=p(n,m);try{s(e,m,g)}catch(b){}}}}return e}},536:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(1);function o(t,e,n){var o=this,i=Object(r.useRef)(null),a=Object(r.useRef)(0),c=Object(r.useRef)(null),u=Object(r.useRef)([]),s=Object(r.useRef)(),f=Object(r.useRef)(),l=Object(r.useRef)(t),p=Object(r.useRef)(!0);l.current=t;var d=!e&&0!==e&&"undefined"!==typeof window;if("function"!==typeof t)throw new TypeError("Expected a function");e=+e||0;var h=!!(n=n||{}).leading,v=!("trailing"in n)||!!n.trailing,y="maxWait"in n,m=y?Math.max(+n.maxWait||0,e):null,g=Object(r.useCallback)((function(t){var e=u.current,n=s.current;return u.current=s.current=null,a.current=t,f.current=l.current.apply(n,e)}),[]),b=Object(r.useCallback)((function(t,e){d&&cancelAnimationFrame(c.current),c.current=d?requestAnimationFrame(t):setTimeout(t,e)}),[d]),O=Object(r.useCallback)((function(t){if(!p.current)return!1;var n=t-i.current,r=t-a.current;return!i.current||n>=e||n<0||y&&r>=m}),[m,y,e]),w=Object(r.useCallback)((function(t){return c.current=null,v&&u.current?g(t):(u.current=s.current=null,f.current)}),[g,v]),j=Object(r.useCallback)((function(){var t=Date.now();if(O(t))return w(t);if(p.current){var n=t-i.current,r=t-a.current,o=e-n,c=y?Math.min(o,m-r):o;b(j,c)}}),[m,y,O,b,w,e]),x=Object(r.useCallback)((function(){c.current&&(d?cancelAnimationFrame(c.current):clearTimeout(c.current)),a.current=0,u.current=i.current=s.current=c.current=null}),[d]),C=Object(r.useCallback)((function(){return c.current?w(Date.now()):f.current}),[w]);Object(r.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]);var E=Object(r.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=Date.now(),l=O(r);if(u.current=t,s.current=o,i.current=r,l){if(!c.current&&p.current)return a.current=i.current,b(j,e),h?g(i.current):f.current;if(y)return b(j,e),g(i.current)}return c.current||b(j,e),f.current}),[g,h,y,O,b,j,e]),k=Object(r.useCallback)((function(){return!!c.current}),[]);return Object(r.useMemo)((function(){return{callback:E,cancel:x,flush:C,pending:k}}),[E,x,C,k])}}}]);
//# sourceMappingURL=139.4a4656d3.chunk.js.map