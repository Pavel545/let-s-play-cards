/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/application.ts":
/*!*******************************!*\
  !*** ./src/js/application.ts ***!
  \*******************************/
/***/ (() => {


window.complexity = '';
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container, cls, content, attrs) {
        window.application.blocks[blockName](container, cls, content, attrs);
    },
    timers: [],
};
window.deckID = [
    6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 6.2, 7.2, 8.2, 9.2, 10.2,
    11.2, 12.2, 13.2, 14.2, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3, 14.3,
    6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4,
];
window.time = '00:00';


/***/ }),

/***/ "./src/js/block_layout.ts":
/*!********************************!*\
  !*** ./src/js/block_layout.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNull": () => (/* binding */ renderNull)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/js/template.ts");
/* harmony import */ var _public_shirt_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/shirt.jpg */ "./src/js/public/shirt.jpg");

function renderExampleDiv(container, cls, content) {
    var div = {
        tag: 'div',
        cls: cls,
        content: content,
    };
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(div));
}
window.application.blocks['example-div'] = renderExampleDiv;
function renderExampleButtonFalse(container, cls, content, id) {
    var div = {
        tag: 'div',
        cls: cls,
        content: content,
        attrs: {
            id: id,
        },
    };
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(div));
}
window.application.blocks['example-false'] = renderExampleButtonFalse;
function renderExampleButton(container, cls, content) {
    var button = {
        tag: 'button',
        cls: cls,
        content: content,
    };
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(button));
}
window.application.blocks['example-button'] = renderExampleButton;
function renderExampleScreenStart() {
    var app = document.querySelector('.app');
    if (app) {
        app.innerHTML = '';
        window.application.renderBlock('example-div', app, 'main', '');
    }
    var main = app === null || app === void 0 ? void 0 : app.querySelector('.main');
    if (main) {
        window.application.renderBlock('example-div', main, 'complexity', '');
    }
    var div = main === null || main === void 0 ? void 0 : main.querySelector('.complexity');
    if (div) {
        window.application.renderBlock('example-div', div, 'complexity_text', 'Выбери сложность');
    }
    if (div) {
        window.application.renderBlock('example-div', div, 'complexity_choice_area', '');
    }
    var complexity_choice_area = div === null || div === void 0 ? void 0 : div.querySelector('.complexity_choice_area');
    if (complexity_choice_area) {
        window.application.renderBlock('example-false', complexity_choice_area, 'complexity_choice_button', '1', 'easy');
        window.application.renderBlock('example-false', complexity_choice_area, 'complexity_choice_button', '2', 'average');
        window.application.renderBlock('example-false', complexity_choice_area, ['complexity_choice_button'], '3', ['difficult']);
    }
    if (div) {
        window.application.renderBlock('example-button', div, 'complexity_button', 'Старт');
    }
}
window.application.screens['example'] = renderExampleScreenStart;
function renderExampleImg(container, cls, id, src) {
    var img = {
        tag: 'img',
        cls: cls,
        attrs: {
            id: id,
            src: src,
        },
    };
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(img));
}
window.application.blocks['example-img'] = renderExampleImg;

function renderExampleScreenGameShirt() {
    var _a;
    var app = document.querySelector('.app');
    var deck = app === null || app === void 0 ? void 0 : app.querySelector('.deck');
    if (deck) {
        deck.innerHTML = '';
    }
    var arr = easy();
    if (deck) {
        (_a = window.deckT) === null || _a === void 0 ? void 0 : _a.forEach(function (_, index) {
            window.application.renderBlock('example-img', deck, 'deck_cards_shirt', arr[index], _public_shirt_jpg__WEBPACK_IMPORTED_MODULE_1__);
        });
    }
}
window.application.screens['gameShirt'] = renderExampleScreenGameShirt;
function renderExampleScreenGameDisplay() {
    var app = document.querySelector('.app');
    if (app) {
        app.innerHTML = '';
    }
    if (app) {
        window.application.renderBlock('example-div', app, 'startGame', '');
    }
    var main = app === null || app === void 0 ? void 0 : app.querySelector('.startGame');
    if (main) {
        window.application.renderBlock('example-div', main, 'head', '');
    }
    var head = main === null || main === void 0 ? void 0 : main.querySelector('.head');
    if (head) {
        window.application.renderBlock('example-div', head, 'head_timer', '');
    }
    var timer = main === null || main === void 0 ? void 0 : main.querySelector('.head_timer');
    if (timer) {
        window.application.renderBlock('example-div', timer, 'head_timer_box', '');
    }
    var box = main === null || main === void 0 ? void 0 : main.querySelector('.head_timer_box');
    if (box) {
        window.application.renderBlock('example-div', box, 'head_timer_type', 'min');
        window.application.renderBlock('example-div', box, 'head_timer_type', 'sek');
    }
    if (timer) {
        window.application.renderBlock('example-div', timer, 'head_timer_counter', '00.00');
    }
    if (head) {
        window.application.renderBlock('example-button', head, 'head_button', 'Начать заново ');
    }
    if (main) {
        window.application.renderBlock('example-div', main, 'deck', '');
    }
    var deck = main === null || main === void 0 ? void 0 : main.querySelector('.deck');
}
window.application.screens['gameDisplay'] = renderExampleScreenGameDisplay;
function renderExampleComplexity() {
    var app = document.querySelector('.app');
    var main = app === null || app === void 0 ? void 0 : app.querySelector('.startGame');
    var deck = main === null || main === void 0 ? void 0 : main.querySelector('.deck');
    var arr = [];
    arr = complexityS(window.complexity);
    console.log(arr);
    arr.forEach(function (element, index) {
        if (deck) {
            window.application.renderBlock('example-img', deck, 'deck_cards_shirt', arr[index], "./src/js/Img/".concat(element, ".png"));
        }
    });
    window.deckT = deck === null || deck === void 0 ? void 0 : deck.querySelectorAll('.deck_cards_shirt');
}
window.application.screens['gameComplexity'] = renderExampleComplexity;
function complexityS(arr) {
    switch (arr) {
        case 'easy':
            return easy();
        case 'average':
            return average();
        case 'difficult':
            return difficult();
        default:
            break;
    }
}
function easy() {
    return createCards(3);
}
function shuffle(arr) {
    var _a;
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
    return arr;
}
var createCards = function (count) {
    var arr = [];
    var counter = 0;
    for (var i = 0; i < 10; i += 9) {
        for (var j = 0; j < count; j++) {
            arr[counter] = window.deckID[j + i];
            counter++;
        }
    }
    return shuffle(arr);
};
function average() {
    return createCards(6);
}
function difficult() {
    return createCards(9);
}
function renderNull() {
    for (var i = 0; i < window.application.timers.length; i++) {
        clearInterval(window.application.timers[i]);
    }
}
function renderExampleAlink(container, cls, content) {
    var a = {
        tag: 'a',
        cls: cls,
        content: content,
    };
    container.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(a));
}
window.application.blocks['example-link'] = renderExampleAlink;
function renderExampleScreenLost() {
    var app = document.querySelector('.app');
    if (app) {
        window.application.renderBlock('example-div', app, 'overlay', '');
    }
    var overlay = app === null || app === void 0 ? void 0 : app.querySelector('.overlay');
    if (overlay) {
        window.application.renderBlock('example-div', overlay, 'popUpScreen', '');
    }
    var popUpScreen = app === null || app === void 0 ? void 0 : app.querySelector('.popUpScreen');
    if (popUpScreen) {
        window.application.renderBlock('example-img', popUpScreen, 'popUpScreen_img_lost', 'loser', "./src/js/Img/loser.png");
        window.application.renderBlock('example-div', popUpScreen, 'popUpScreen_result', 'Вы проиграли!');
        window.application.renderBlock('example-div', popUpScreen, 'popUpScreen_time', 'Затраченное время:');
        window.application.renderBlock('example-div', popUpScreen, 'popUpScreen_time_counter');
        window.application.renderBlock('example-button', popUpScreen, 'head_button', 'Начать снова ');
    }
}
window.application.screens['gameLost'] = renderExampleScreenLost;
function renderExampleScreenWin() {
    var app = document.querySelector('.app');
    if (app) {
        window.application.renderBlock('example-div', app, 'overlay', '');
    }
    var overlay = app === null || app === void 0 ? void 0 : app.querySelector('.overlay');
    if (overlay) {
        window.application.renderBlock('example-div', overlay, 'popUpScreen', '');
    }
    var popUpScreen = app === null || app === void 0 ? void 0 : app.querySelector('.popUpScreen');
    if (popUpScreen) {
        window.application.renderBlock('example-img', popUpScreen, 'popUpScreen_img_lost', 'loser', "./src/js/Img/win.png");
        window.application.renderBlock('example-div', popUpScreen, 'popUpScreen_result', 'Вы выиграли!');
        window.application.renderBlock('example-div', popUpScreen, 'popUpScreen_time', 'Затраченное время:');
        window.application.renderBlock('example-div', popUpScreen, 'popUpScreen_time_counter');
        window.application.renderBlock('example-button', popUpScreen, 'head_button', 'Начать снова ');
    }
}
window.application.screens['gameWin'] = renderExampleScreenWin;


/***/ }),

/***/ "./src/js/game_process.ts":
/*!********************************!*\
  !*** ./src/js/game_process.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block_layout */ "./src/js/block_layout.ts");
var main = document.createElement('div');
main.className = 'app';
document.body.append(main);
var app = document.querySelector('.app');
var sec = 0;
var min = 0;

function newGame() {
    (0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderNull)();
    sec = 0;
    min = 0;
    window.application.renderScreen('example');
    var complexity = app === null || app === void 0 ? void 0 : app.querySelectorAll('.complexity_choice_button');
    complexity === null || complexity === void 0 ? void 0 : complexity.forEach(function (control) {
        control.addEventListener('click', function () {
            console.log(control.id);
            window.complexity = control.id;
        });
    });
    var start = app === null || app === void 0 ? void 0 : app.querySelector('.complexity_button');
    start === null || start === void 0 ? void 0 : start.addEventListener('click', function () {
        if (window.complexity === '') {
            alert('Пожалуста, выберите сложность');
            return;
        }
        startGame();
    });
}
newGame();
function startGame() {
    window.time = '';
    window.application.renderScreen('gameDisplay');
    window.application.renderScreen('gameComplexity');
    setTimeout(function () {
        window.application.renderScreen('gameShirt');
        progressGame();
        window.application.timers.push(setInterval(timer, 1000));
    }, 5000);
    var head = app === null || app === void 0 ? void 0 : app.querySelector('.head');
    var butter = head === null || head === void 0 ? void 0 : head.querySelector('.head_button');
    butter === null || butter === void 0 ? void 0 : butter.addEventListener('click', function () {
        newGame();
        window.time = '00:00';
        return;
    });
}
function timer() {
    var head_timer_counter = app === null || app === void 0 ? void 0 : app.querySelector('.head_timer_counter');
    //renderScreen();
    sec++;
    if (sec > 59) {
        min++;
        sec = 0;
    }
    if (head_timer_counter) {
        head_timer_counter.textContent = "".concat(min, " :").concat(sec);
    }
}
function progressGame() {
    var main = app === null || app === void 0 ? void 0 : app.querySelector('.startGame');
    var deck = main === null || main === void 0 ? void 0 : main.querySelector('.deck');
    var cards = deck === null || deck === void 0 ? void 0 : deck.querySelectorAll('.deck_cards_shirt');
    var counters = 0;
    var countersWin = 0;
    var previous;
    console.log(cards);
    cards === null || cards === void 0 ? void 0 : cards.forEach(function (control, index) {
        control.addEventListener('click', function () {
            if (window.deckT) {
                if (counters > 0 && previous.id[0] === window.deckT[index].id[0]) {
                    // alert('ók')
                    counters = -1;
                    previous = '';
                }
                if (counters > 0 &&
                    previous.id[0] != window.deckT[index].id[0] &&
                    previous != '') {
                    var head_timer_counter = app === null || app === void 0 ? void 0 : app.querySelector('.head_timer_counter');
                    if (head_timer_counter) {
                    }
                    window.time = head_timer_counter === null || head_timer_counter === void 0 ? void 0 : head_timer_counter.textContent;
                    loser();
                    (0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderNull)();
                    return;
                }
                previous = window.deckT[index];
                //@ts-ignore
                cards ? [index].src = window.deckT[index].src : Element;
            }
            counters++;
            countersWin++;
            if (countersWin === 6 && window.complexity === 'easy') {
                var head_timer_counter = app === null || app === void 0 ? void 0 : app.querySelector('.head_timer_counter');
                window.time = head_timer_counter === null || head_timer_counter === void 0 ? void 0 : head_timer_counter.textContent;
                Win();
                (0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderNull)();
                return;
            }
            if (countersWin === 12 && window.complexity === 'average') {
                var head_timer_counter = app === null || app === void 0 ? void 0 : app.querySelector('.head_timer_counter');
                window.time = head_timer_counter === null || head_timer_counter === void 0 ? void 0 : head_timer_counter.textContent;
                Win();
                (0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderNull)();
                return;
            }
            if (countersWin === 18 && window.complexity === 'difficult') {
                var head_timer_counter = app === null || app === void 0 ? void 0 : app.querySelector('.head_timer_counter');
                window.time = head_timer_counter === null || head_timer_counter === void 0 ? void 0 : head_timer_counter.textContent;
                Win();
                (0,_block_layout__WEBPACK_IMPORTED_MODULE_0__.renderNull)();
                return;
            }
        });
    });
    console.log(window.deckT);
}
function loser() {
    window.application.renderScreen('gameLost');
    var popUpScreen = app === null || app === void 0 ? void 0 : app.querySelector('.popUpScreen');
    var butter = popUpScreen === null || popUpScreen === void 0 ? void 0 : popUpScreen.querySelector('.head_button');
    butter === null || butter === void 0 ? void 0 : butter.addEventListener('click', function () {
        newGame();
        window.time = '00:00';
    });
}
function Win() {
    window.application.renderScreen('gameWin');
    var popUpScreen = app === null || app === void 0 ? void 0 : app.querySelector('.popUpScreen');
    var butter = popUpScreen === null || popUpScreen === void 0 ? void 0 : popUpScreen.querySelector('.head_button');
    butter === null || butter === void 0 ? void 0 : butter.addEventListener('click', function () {
        newGame();
        window.time = '00:00';
        return;
    });
}


/***/ }),

/***/ "./src/js/template.ts":
/*!****************************!*\
  !*** ./src/js/template.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateEngine": () => (/* binding */ templateEngine)
/* harmony export */ });
function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('');
    }
    if (typeof block === 'string' ||
        typeof block === 'number' ||
        block === true) {
        return document.createTextNode(block);
    }
    if (Array.isArray(block)) {
        var fragment_1 = document.createDocumentFragment();
        block.forEach(function (element) {
            fragment_1.appendChild(templateEngine(element));
        });
        return fragment_1;
    }
    var result = document.createElement(block.tag);
    if (block.cls) {
        var classes = [].concat(block.cls);
        classes.forEach(function (cls) {
            result.classList.add(cls);
        });
    }
    if (block.attrs) {
        var keys = Object.keys(block.attrs);
        keys.forEach(function (key) {
            result.setAttribute(key, block.attrs[key]);
        });
    }
    result.appendChild(templateEngine(block.content));
    return result;
}


/***/ }),

/***/ "./src/js/public/shirt.jpg":
/*!*********************************!*\
  !*** ./src/js/public/shirt.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c27630cd3c577f1634d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/style/style.css */ "./src/style/style.css");
/* harmony import */ var _application_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.ts */ "./src/js/application.ts");
/* harmony import */ var _application_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_application_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _template_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template.ts */ "./src/js/template.ts");
/* harmony import */ var _block_layout_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block_layout.ts */ "./src/js/block_layout.ts");
/* harmony import */ var _game_process_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_process.ts */ "./src/js/game_process.ts");






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map