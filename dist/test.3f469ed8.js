// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n  .skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .skin *::before,\n  .skin *::after {\n    box-sizing: border-box;\n  }\n  .skin {\n    position: relative;\n    background-color: #ffe600;\n    height: 100vh;\n  }\n  .nose {\n    height: 22px;\n    width: 22px;\n    transform: rotate(-30deg);\n    position: absolute;\n    left: 50%;\n    top: 150px;\n    margin-left: -11px;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(-30deg);\n    }\n    33% {\n      transform: rotate(-35deg);\n    }\n    66% {\n      transform: rotate(-25deg);\n    }\n    100% {\n      transform: rotate(-30deg);\n    }\n  }\n  .nose:hover {\n    animation: wave 0.3s infinite linear;\n  }\n  .nose > .content {\n    overflow: hidden;\n    height: 22px;\n    width: 22px;\n    position: absolute;\n    z-index: 999;\n    clip: rect(0px, 22px, 22px, 11px);\n  }\n  .nose > .content > .container {\n    height: 22px;\n    width: 22px;\n    background-color: #000;\n    position: absolute;\n    border-radius: 50%;\n    clip: rect(0px, 11px, 22px, 0);\n    transform: rotate(60deg);\n  }\n  .eye {\n    border: 3px solid #000000;\n    width: 60px;\n    height: 60px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -30px;\n    border-radius: 50%;\n    background-color: #2e2e2e;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n  }\n  .eye.left::before,\n  .eye.right:before {\n    content: \"\";\n    display: block;\n    border: 3px solid #000000;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background-color: #fff;\n    margin-left: 5px;\n  }\n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: relative;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n  }\n  .mouth .up .left,\n  .mouth .up .right {\n    border: 5px solid black;\n    width: 100px;\n    height: 30px;\n    position: absolute;\n    z-index: 1;\n    background-color: #ffe600;\n  }\n  .mouth .up .left {\n    border-radius: 0 0 0 50%;\n    left: 50%;\n    transform: translateX(-100px) rotate(-15deg);\n  }\n  .mouth .up .left::before,\n  .mouth .up .left::after,\n  .mouth .up .right::before,\n  .mouth .up .right::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    background-color: #ffe600;\n  }\n  .mouth .up .left::before {\n    top: -6px;\n    left: 0px;\n    width: 95px;\n    height: 7px;\n  }\n  .mouth .up .left::after {\n    bottom: 0px;\n    right: -6px;\n    width: 7px;\n    height: 25px;\n  }\n  .mouth .up .right {\n    border-radius: 0 0 50% 0%;\n    right: 50%px;\n    transform: translateX(100px) rotate(15deg);\n  }\n  .mouth .up .right::before {\n    top: -6px;\n    right: 0px;\n    width: 95px;\n    height: 8px;\n  }\n  .mouth .up .right::after {\n    bottom: 0px;\n    left: -6px;\n    width: 7px;\n    height: 25px;\n  }\n  .mouth .down {\n    width: 200px;\n    height: 200px;\n    position: relative;\n    overflow: hidden;\n    top: 8px;\n  }\n  .mouth .down .yuan1 {\n    border: 1px solid green;\n    width: 180px;\n    height: 1000px;\n    position: absolute;\n    left: 50%;\n    bottom: 0px;\n    margin-left: -90px;\n    border-radius: 100px/300px;\n    background-color: #9b000a;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 .yuan2 {\n    width: 200px;\n    height: 300px;\n    background-color: #ff485f;\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    bottom: -140px;\n    margin-left: -100px;\n    border-radius: 100px;\n  }\n  .face.left {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    position: absolute;\n    left: 50%;\n    top: 250px;\n    margin-left: -44px;\n    transform: translateX(-250px);\n    border-radius: 50%;\n    background-color: #ff0000;\n  }\n  .face > img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n  }\n  .face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n  }\n  .face.right {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    position: absolute;\n    left: 50%;\n    top: 250px;\n    margin-left: -44px;\n    transform: translateX(250px);\n    border-radius: 50%;\n    background-color: #ff0000;\n  }\n";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
'use strict';

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    n: 1,
    time: 100,
    id: undefined,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play1',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: function init() {
        player.ui.demo.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        player.id = setInterval(player.run, player.time);
    },
    play1: function play1() {
        player.pause();
        player.play();
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.time = 300;
        player.pause();
        player.play();
    },
    normal: function normal() {
        player.time = 100;
        player.pause();
        player.play();
    },
    fast: function fast() {
        player.time = 0;
        player.pause();
        player.play();
    }
};

player.init();
},{"./css":"css.js"}],"C:\\Users\\taiy\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52086' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\taiy\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.3f469ed8.map