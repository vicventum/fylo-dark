// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"app/scss/vendor/fontello/css/fontello.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\font\\fontello.woff2":[["fontello.aad6f67b.woff2","app/scss/vendor/fontello/font/fontello.woff2"],"app/scss/vendor/fontello/font/fontello.woff2"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./vendor/fontello/css/fontello.css":"app/scss/vendor/fontello/css/fontello.css","./..\\..\\img\\icon-arrow.svg":[["icon-arrow.6704f3c1.svg","img/icon-arrow.svg"],"img/icon-arrow.svg"],"./..\\..\\img\\bg-curvy-mobile.svg":[["bg-curvy-mobile.a55916d6.svg","img/bg-curvy-mobile.svg"],"img/bg-curvy-mobile.svg"],"./..\\..\\img\\bg-quotes.png":[["bg-quotes.ee5fd274.png","img/bg-quotes.png"],"img/bg-quotes.png"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/vendor/sal.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/js/vendor/hamburger-config.js":[function(require,module,exports) {
// Look for .hamburger
var hamburger = document.getElementById("iconHamburger"),
    header = document.getElementById('header'),
    body = document.getElementById('body'),
    links = document.querySelectorAll('.header__nav-link'); // On click

hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  header.classList.toggle("open");
  body.classList.toggle("no-scroll");
});
links.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove("is-active");
    header.classList.remove("open");
    body.classList.remove("no-scroll");
  });
});
},{}],"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"app/vendor/sal.js":[function(require,module,exports) {
var define;
"use strict";

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof2.default)(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) ? exports.sal = t() : e.sal = t();
}(void 0, function () {
  return function () {
    "use strict";

    var e = {
      855: function _(e, t, n) {
        function r(e, t) {
          var n = Object.keys(e);

          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
          }

          return n;
        }

        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }

          return e;
        }

        function a(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        n.d(t, {
          default: function _default() {
            return E;
          }
        });

        var s = "Sal was not initialised! Probably it is used in SSR.",
            i = "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",
            l = {
          root: null,
          rootMargin: "0% 50%",
          threshold: .5,
          animateClassName: "sal-animate",
          disabledClassName: "sal-disabled",
          enterEventName: "sal:in",
          exitEventName: "sal:out",
          selector: "[data-sal]",
          once: !0,
          disabled: !1
        },
            c = [],
            u = null,
            d = function d(e) {
          e && e !== l && (l = o(o({}, l), e));
        },
            f = function f(e) {
          e.classList.remove(l.animateClassName);
        },
            b = function b(e, t) {
          var n = new CustomEvent(e, {
            bubbles: !0,
            detail: t
          });
          t.target.dispatchEvent(n);
        },
            p = function p() {
          document.body.classList.add(l.disabledClassName);
        },
            m = function m() {
          u.disconnect(), u = null;
        },
            v = function v() {
          return l.disabled || "function" == typeof l.disabled && l.disabled();
        },
            y = function y(e, t) {
          e.forEach(function (e) {
            var n = e.target,
                r = void 0 !== n.dataset.salRepeat,
                o = void 0 !== n.dataset.salOnce,
                a = r || !(o || l.once);
            e.intersectionRatio >= l.threshold ? (function (e) {
              e.target.classList.add(l.animateClassName), b(l.enterEventName, e);
            }(e), a || t.unobserve(n)) : a && function (e) {
              f(e.target), b(l.exitEventName, e);
            }(e);
          });
        },
            O = function O() {
          var e = [].filter.call(document.querySelectorAll(l.selector), function (e) {
            return !function (e) {
              return e.classList.contains(l.animateClassName);
            }(e, l.animateClassName);
          });
          return e.forEach(function (e) {
            return u.observe(e);
          }), e;
        },
            h = function h() {
          p(), m();
        },
            g = function g() {
          document.body.classList.remove(l.disabledClassName), u = new IntersectionObserver(y, {
            root: l.root,
            rootMargin: l.rootMargin,
            threshold: l.threshold
          }), c = O();
        },
            w = function w() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          m(), Array.from(document.querySelectorAll(l.selector)).forEach(f), d(e), g();
        },
            j = function j() {
          var e = O();
          c.push(e);
        };

        var E = function E() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          if (d(e), "undefined" == typeof window) return console.warn(s), {
            elements: c,
            disable: h,
            enable: g,
            reset: w,
            update: j
          };
          if (!window.IntersectionObserver) throw p(), Error(i);
          return v() ? p() : g(), {
            elements: c,
            disable: h,
            enable: g,
            reset: w,
            update: j
          };
        };
      }
    },
        t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports;
    }

    return n.d = function (e, t) {
      for (var r in t) {
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r]
        });
      }
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n(855);
  }().default;
});
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js"}],"app/js/vendor/sal-config.js":[function(require,module,exports) {
"use strict";

var _sal = _interopRequireDefault(require("../../vendor/sal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sal.default)({
  once: false
});
},{"../../vendor/sal":"app/vendor/sal.js"}],"app/js/app.js":[function(require,module,exports) {

},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./app/scss/main.scss");

require("./app/vendor/sal.css");

require("./app/js/vendor/hamburger-config");

require("./app/js/vendor/sal-config");

require("./app/js/app");
},{"./app/scss/main.scss":"app/scss/main.scss","./app/vendor/sal.css":"app/vendor/sal.css","./app/js/vendor/hamburger-config":"app/js/vendor/hamburger-config.js","./app/js/vendor/sal-config":"app/js/vendor/sal-config.js","./app/js/app":"app/js/app.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53555" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map