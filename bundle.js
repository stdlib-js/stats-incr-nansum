// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).incrnansum=e()}(this,(function(){"use strict";var n=function(n){return Math.abs(n)};var e=function(){var e,t,r,u,f,i,o;return e=0,t=0,u=0,function(c){if(0===arguments.length)return r?e+u+t:null;r=!0,i=e+c,o=n(e)>=n(c)?e-i+c:c-i+e;e=i,i=u+o,f=n(u)>=n(o)?u-i+o:o-i+u;return e+(u=i)+(t+=f)}},t=function(n){return n!=n},r=e;var u=function(){var n=r();return function(e){if(0===arguments.length||t(e))return n();return n(e)}};return u}));
//# sourceMappingURL=bundle.js.map
