// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__,f=r,c=function(e,t,r){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,_="set"in r,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},p=t()?f:c;function _(e,t,r,o,n,a,i,l,u,f){var c,p,_,d,b;if(e<=0)return l;for(c=r<0?(1-e)*r:0,p=n<0?(1-e)*n:0,_=u<0?(1-e)*u:0,d=i<0?(1-e)*i:0,b=0;b<e;b++)0===a[d]&&(l[_]=f(t[c],o[p])),c+=r,p+=n,_+=u,d+=i;return l}return p(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n,a,i,l,u,f,c,p,_,d){var b,s,y,m,v;if(e<=0)return c;for(b=o,s=i,y=_,m=f,v=0;v<e;v++)0===l[m]&&(c[y]=d(t[b],n[s])),b+=r,s+=a,y+=p,m+=u;return c}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dmskmap2=t();
//# sourceMappingURL=index.js.map
