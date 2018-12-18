/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/revealjs-animated.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation-factory.js":
/*!**********************************!*\
  !*** ./src/animation-factory.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var AnimationFactory = function () {\n  function middleTop(element) {\n    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var topDistance = (element.offsetTop + element.parentElement.offsetTop) * -1;\n    var transform = [\"translate(0px, 0px)\", \"translate(0px, \".concat(topDistance, \"px)\")];\n\n    if (reverse) {\n      transform = [\"translate(0px, \".concat(topDistance, \"px)\"), \"translate(0px, 0px)\"];\n    }\n\n    var keyframes = {\n      transform: transform\n    };\n    var duration = Number(element.getAttribute(\"data-animated-duration\"));\n    var iterations = Number(element.getAttribute(\"data-animated-iterations\"));\n    var fill = element.getAttribute(\"data-animated-fill\");\n    var timing = {\n      duration: duration,\n      iterations: iterations,\n      fill: fill\n    };\n    return element.animate(keyframes, timing);\n  }\n\n  function moveTo(element) {\n    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var topDistance = element.getAttribute(\"data-move-to-left\");\n    var leftDistance = element.getAttribute(\"data-move-to-top\");\n    var transform = [\"translate(0px, 0px)\", \"translate(\".concat(leftDistance, \", \").concat(topDistance, \")\")];\n\n    if (reverse) {\n      transform = [\"translate(\".concat(leftDistance, \", \").concat(topDistance, \")\"), \"translate(0px, 0px)\"];\n    }\n\n    var keyframes = {\n      transform: transform\n    };\n    var duration = Number(element.getAttribute(\"data-animated-duration\"));\n    var iterations = Number(element.getAttribute(\"data-animated-iterations\"));\n    var fill = element.getAttribute(\"data-animated-fill\");\n    var timing = {\n      duration: duration,\n      iterations: iterations,\n      fill: fill\n    };\n    return element.animate(keyframes, timing);\n  }\n\n  function scaleUp(element) {\n    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var keyframes = {\n      transform: ['scale(1, 1)', 'scale(2, 2)']\n    };\n\n    if (reverse) {\n      keyframes = {\n        transform: ['scale(2, 2)', 'scale(1, 1)']\n      };\n    }\n\n    var duration = {\n      duration: 1500,\n      iterations: 1,\n      fill: 'forwards'\n    };\n    return element.animate(keyframes, duration);\n  }\n\n  function scaleDown(element) {\n    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var transform = ['scale(1, 1)', 'scale(0.5, 0.5)'];\n\n    if (reverse) {\n      transform = ['scale(0.5, 0.5)', 'scale(1, 1)'];\n    }\n\n    var keyframes = {\n      transform: transform\n    };\n    var duration = {\n      duration: 1500,\n      iterations: 1,\n      fill: 'forwards'\n    };\n    return element.animate(keyframes, duration);\n  }\n\n  var moveToMiddleTopClass = 'move-to-middle-top';\n  var moveToClass = 'move-to';\n  var scaleUpClass = 'scale-up';\n  var scaleDownClass = 'scale-down';\n  var methodMap = new Map();\n  methodMap.set(moveToMiddleTopClass, middleTop);\n  methodMap.set(moveToClass, moveTo);\n  methodMap.set(scaleUpClass, scaleUp);\n  methodMap.set(scaleDownClass, scaleDown);\n  return {\n    buildAnimation: function buildAnimation(element) {\n      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      element.classList.forEach(function (clazz) {\n        if (methodMap.has(clazz)) {\n          var method = methodMap.get(clazz);\n          method(element, reverse);\n        }\n      });\n    }\n  };\n}();\n\nmodule.exports = AnimationFactory;\n\n//# sourceURL=webpack:///./src/animation-factory.js?");

/***/ }),

/***/ "./src/revealjs-animated.js":
/*!**********************************!*\
  !*** ./src/revealjs-animated.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var AnimationFactory = __webpack_require__(/*! ./animation-factory */ \"./src/animation-factory.js\");\n\nRevealJsAnimated = function () {\n  var style = document.createElement('style');\n  style.type = 'text/css';\n  style.innerHTML = \".reveal .slides section .fragment.animated {\\n            opacity: 1;\\n            visibility: visible;  \\n        }\";\n  document.getElementsByTagName('head')[0].appendChild(style);\n  return {\n    initialize: function initialize(revealjsInstance) {\n      revealjsInstance.addEventListener('fragmenthidden', function (event) {\n        var element = event.fragment;\n        AnimationFactory.buildAnimation(element, true);\n      });\n      revealjsInstance.addEventListener('fragmentshown', function (event) {\n        var element = event.fragment;\n        AnimationFactory.buildAnimation(element);\n      });\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./src/revealjs-animated.js?");

/***/ })

/******/ });