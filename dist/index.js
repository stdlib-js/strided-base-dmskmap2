"use strict";var R=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var g=R(function(E,b){
function w(r,a,u,c,t,l,m,o,s,p){var i,v,f,n,e;if(r<=0)return o;for(u<0?i=(1-r)*u:i=0,t<0?v=(1-r)*t:v=0,s<0?f=(1-r)*s:f=0,m<0?n=(1-r)*m:n=0,e=0;e<r;e++)l[n]===0&&(o[f]=p(a[i],c[v])),i+=u,v+=t,f+=s,n+=m;return o}b.exports=w
});var j=R(function(F,h){
function A(r,a,u,c,t,l,m,o,s,p,i,v,f,n){var e,x,y,q,O;if(r<=0)return i;for(e=c,x=m,y=f,q=p,O=0;O<r;O++)o[q]===0&&(i[y]=n(a[e],t[x])),e+=u,x+=l,y+=v,q+=s;return i}h.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=g(),C=j();B(k,"ndarray",C);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
