parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NmlO":[function(require,module,exports) {

},{"./..\\font\\fontello.woff2":[["fontello.f70b7958.woff2","U0FC"],"U0FC"]}],"k2bb":[function(require,module,exports) {

},{"./vendor/fontello/css/fontello.css":"NmlO","./..\\..\\img\\icon-arrow.svg":[["icon-arrow.6ad5f1d4.svg","uWPK"],"uWPK"],"./..\\..\\img\\bg-curvy-mobile.svg":[["bg-curvy-mobile.fb4f7f4a.svg","hV13"],"hV13"],"./..\\..\\img\\bg-quotes.png":[["bg-quotes.277b422d.png","xCs3"],"xCs3"]}],"W0Ga":[function(require,module,exports) {

},{}],"HZkr":[function(require,module,exports) {
var e=document.getElementById("iconHamburger"),t=document.getElementById("header"),c=document.getElementById("body"),n=document.querySelectorAll(".header__nav-link");e.addEventListener("click",function(){e.classList.toggle("is-active"),t.classList.toggle("open"),c.classList.toggle("no-scroll")}),n.forEach(function(n){n.addEventListener("click",function(){e.classList.remove("is-active"),t.classList.remove("open"),c.classList.remove("no-scroll")})});
},{}],"b9XL":[function(require,module,exports) {
function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=o=function(o){return typeof o}:module.exports=o=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(t)}module.exports=o;
},{}],"rrEE":[function(require,module,exports) {
var define;
var e,t=n(require("@babel/runtime/helpers/typeof"));function n(e){return e&&e.__esModule?e:{default:e}}!function(n,r){"object"==("undefined"==typeof exports?"undefined":(0,t.default)(exports))&&"object"==("undefined"==typeof module?"undefined":(0,t.default)(module))?module.exports=r():"function"==typeof e&&e.amd?e([],r):"object"==("undefined"==typeof exports?"undefined":(0,t.default)(exports))?exports.sal=r():(void 0).sal=r()}(0,function(){return function(){"use strict";var e={855:function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{default:function(){return g}});var i={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},s=[],l=null,u=function(e){e&&e!==i&&(i=o(o({},i),e))},c=function(e){e.classList.remove(i.animateClassName)},d=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},f=function(){document.body.classList.add(i.disabledClassName)},b=function(){l.disconnect(),l=null},p=function(e,t){e.forEach(function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,o=void 0!==n.dataset.salOnce,a=r||!(o||i.once);e.intersectionRatio>=i.threshold?(function(e){e.target.classList.add(i.animateClassName),d(i.enterEventName,e)}(e),a||t.unobserve(n)):a&&function(e){c(e.target),d(i.exitEventName,e)}(e)})},m=function(){var e=[].filter.call(document.querySelectorAll(i.selector),function(e){return!function(e){return e.classList.contains(i.animateClassName)}(e,i.animateClassName)});return e.forEach(function(e){return l.observe(e)}),e},v=function(){f(),b()},y=function(){document.body.classList.remove(i.disabledClassName),l=new IntersectionObserver(p,{root:i.root,rootMargin:i.rootMargin,threshold:i.threshold}),s=m()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(),Array.from(document.querySelectorAll(i.selector)).forEach(c),u(e),y()},h=function(){var e=m();s.push(e)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;if(u(e),"undefined"==typeof window)return console.warn("Sal was not initialised! Probably it is used in SSR."),{elements:s,disable:v,enable:y,reset:O,update:h};if(!window.IntersectionObserver)throw f(),Error("Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill");return i.disabled||"function"==typeof i.disabled&&i.disabled()?f():y(),{elements:s,disable:v,enable:y,reset:O,update:h}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(855)}().default});
},{"@babel/runtime/helpers/typeof":"b9XL"}],"RPx7":[function(require,module,exports) {
"use strict";function e(e,t){var a=matchMedia("(max-width: ".concat(e,"px)"));a.addListener(t),t(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"lxEz":[function(require,module,exports) {
"use strict";var e=r(require("../../vendor/sal")),t=r(require("../mq"));function r(e){return e&&e.__esModule?e:{default:e}}function u(t){t.matches?(0,e.default)({once:!1,threshold:.2}):(0,e.default)({once:!1,threshold:.5})}(0,t.default)(1024,u);
},{"../../vendor/sal":"rrEE","../mq":"RPx7"}],"Focm":[function(require,module,exports) {
"use strict";require("./app/scss/main.scss"),require("./app/vendor/sal.css"),require("./app/js/vendor/hamburger-config"),require("./app/js/vendor/sal-config"),require("./app/js/mq");
},{"./app/scss/main.scss":"k2bb","./app/vendor/sal.css":"W0Ga","./app/js/vendor/hamburger-config":"HZkr","./app/js/vendor/sal-config":"lxEz","./app/js/mq":"RPx7"}]},{},["Focm"], null)
//# sourceMappingURL=/src.b4ee59da.js.map