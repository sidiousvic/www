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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Window_1 = __importDefault(__webpack_require__(/*! ./Window */ "./src/Window.ts"));
function App() {
    return `<div id="main">${Window_1.default()}</div>
  `;
}
exports.default = App;


/***/ }),

/***/ "./src/DesktopIcon.ts":
/*!****************************!*\
  !*** ./src/DesktopIcon.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function DesktopIcon({ id, type, text, }) {
    return `
    <div 
      id=${id} 
      class="desktop-icon ${type}" 
      draggable="true">
        <p>${text}</p>
    </div>
`;
}
exports.default = DesktopIcon;


/***/ }),

/***/ "./src/Window.ts":
/*!***********************!*\
  !*** ./src/Window.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./s-menu-bar */ "./src/s-menu-bar.ts");
const DesktopIcon_1 = __importDefault(__webpack_require__(/*! ./DesktopIcon */ "./src/DesktopIcon.ts"));
function Window() {
    return `
  <div id="window" class="img">
    <s-menu-bar/>
    ${DesktopIcon_1.default({ id: "musics", type: "folder", text: "musics" })}
    ${DesktopIcon_1.default({ id: "pics", type: "folder", text: "pics" })}
    ${DesktopIcon_1.default({ id: "inditings", type: "folder", text: "inditings" })}
  </div >
  `;
}
exports.default = Window;


/***/ }),

/***/ "./src/assets/folder_icon.png":
/*!************************************!*\
  !*** ./src/assets/folder_icon.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "749cbc1ff2b691cb67d1044a510a4cf6.png");

/***/ }),

/***/ "./src/html.ts":
/*!*********************!*\
  !*** ./src/html.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function html(html, ...placeholders) {
    return String.raw(html, placeholders);
}
exports.default = html;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./styles.css */ "./src/styles.css");
//@ts-ignore
const folder_icon_png_1 = __importDefault(__webpack_require__(/*! ./assets/folder_icon.png */ "./src/assets/folder_icon.png"));
const App_1 = __importDefault(__webpack_require__(/*! ./App */ "./src/App.ts"));
// render app
document.body.innerHTML = App_1.default();
// add dragging functionality
const desktopIcons = document.getElementsByClassName("desktop-icon");
[...desktopIcons].map((desktopIcon) => {
    desktopIcon.addEventListener("dragstart", dragStart);
});
document.body.addEventListener("dragover", dragOver);
document.body.addEventListener("drop", drop);
function dragStart(e) {
    const draggingIcon = e.target;
    draggingIcon.classList.add("dragging-icon");
    const style = window.getComputedStyle(draggingIcon, null);
    e.dataTransfer.setData("text/plain", parseInt(style.getPropertyValue("left"), 10) -
        e.clientX +
        "," +
        (parseInt(style.getPropertyValue("top"), 10) - e.clientY));
    const img = document.createElement("img");
    img.src = folder_icon_png_1.default;
    e.dataTransfer.setDragImage(img, 40, 34.5);
}
function dragOver(e) {
    e.preventDefault();
}
function drop(e) {
    const offset = e.dataTransfer.getData("text/plain").split(",");
    const draggingIcon = document.getElementsByClassName("dragging-icon")[0];
    draggingIcon.style.left = e.clientX + parseInt(offset[0], 10) + "px";
    draggingIcon.style.top = e.clientY + parseInt(offset[1], 10) + "px";
    draggingIcon.classList.remove("dragging-icon");
}


/***/ }),

/***/ "./src/s-clock.ts":
/*!************************!*\
  !*** ./src/s-clock.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html_1 = __importDefault(__webpack_require__(/*! ./html */ "./src/html.ts"));
class sClock extends HTMLElement {
    constructor() {
        super();
        this.styles();
        this.logic();
    }
    logic() {
        return setInterval(() => {
            this.innerHTML = this.time;
        }, 1000);
    }
    styles() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = html_1.default `
      <slot></slot>
      <style>
        :host {
          padding: 0 10px;
          color: whitesmoke;
          font-style: normal;
          margin-left: auto;
        }
      </style>
    `;
    }
    get time() {
        const dateOptions = {
            weekday: "long",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        return new Date()
            .toLocaleDateString("ja-JP", dateOptions)
            .toLocaleLowerCase();
    }
}
customElements.define("s-clock", sClock);


/***/ }),

/***/ "./src/s-menu-bar.ts":
/*!***************************!*\
  !*** ./src/s-menu-bar.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./s-clock */ "./src/s-clock.ts");
const html_1 = __importDefault(__webpack_require__(/*! ./html */ "./src/html.ts"));
class sMenuBar extends HTMLElement {
    constructor() {
        super();
        this.items = ["THIS WWWX IS UNDER CONSTRUCTION 🏴‍☠️ GITHUB/SIDIOUSVIC"];
        this.innerHTML = html_1.default `
    <div class="img" id="kermitoid-logo"></div>
    <div class="menu-item" id="os-title"><p>Sidi OS</p></div>
    ${this.items.map((item) => {
            return html_1.default `<div class="menu-item"><p>${item}</p></div>`;
        })}
    <s-clock>👽</s-clock>
  `;
        this.styles();
        this.innerHTML = this.innerHTML;
    }
    styles() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = html_1.default `
      <slot></slot>
      <style>
        :host {
          display: flex;
          justify-content: left;
          align-items: center;
          width: 100%;
          height: 40px;
          background: #111;
          z-index: 1;
        }

        #kermitoid-logo {
          height: 100%;
          image-rendering: pixelated;
          width: 40px;
          background-image: url("./assets/kermitoid_logo.png");
          background-size: cover;
          cursor: pointer;
        }

        #kermitoid-logo:hover {
          background-size: calc(140%);
        }

        .menu-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0 10px;
          color: whitesmoke;
          background: #111;
          cursor: pointer;
          font-style: italic;
        }

        .menu-item p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
          line-height: 100%;
        }

        #os-title {
          font-style: normal;
          font-weight: 500;
          font-size: 1.2em;
        }
      </style>
    `;
    }
}
customElements.define("s-menu-bar", sMenuBar);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map