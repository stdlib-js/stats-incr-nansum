// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n};var r=function(n){return Math.abs(n)};var t=function(){var n,t,u,e,a,f,i;return n=0,t=0,e=0,function(o){if(0===arguments.length)return u?n+e+t:null;u=!0,f=n+o,i=r(n)>=r(o)?n-f+o:o-f+n;n=f,f=e+i,a=r(e)>=r(i)?e-f+i:i-f+e;return n+(e=f)+(t+=a)}};function u(){var r=t();return function(t){if(0===arguments.length||n(t))return r();return r(t)}}export{u as default};
//# sourceMappingURL=mod.js.map
