parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"k2bb":[function(require,module,exports) {

},{"./..\\..\\img\\icon-arrow.svg":[["icon-arrow.6ad5f1d4.svg","uWPK"],"uWPK"],"./..\\..\\img\\bg-curvy-mobile.svg":[["bg-curvy-mobile.fb4f7f4a.svg","hV13"],"hV13"],"./..\\..\\img\\bg-quotes.png":[["bg-quotes.277b422d.png","xCs3"],"xCs3"]}],"uO0g":[function(require,module,exports) {
var e=document.getElementById("iconHamburger"),t=document.getElementById("header"),c=document.getElementById("body"),n=document.querySelectorAll(".header__nav-link");e.addEventListener("click",function(){e.classList.toggle("is-active"),t.classList.toggle("open"),c.classList.toggle("no-scroll")}),n.forEach(function(n){n.addEventListener("click",function(){e.classList.remove("is-active"),t.classList.remove("open"),c.classList.remove("no-scroll")})});
},{}],"dVUU":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./app/scss/main.scss"),require("./app/js/vendor/hamburger"),require("./app/js/app");
},{"./app/scss/main.scss":"k2bb","./app/js/vendor/hamburger":"uO0g","./app/js/app":"dVUU"}]},{},["Focm"], null)
//# sourceMappingURL=/src.dd31fc0a.js.map