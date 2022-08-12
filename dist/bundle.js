/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/application.js":
/*!*******************************!*\
  !*** ./src/js/application.js ***!
  \*******************************/
/***/ (() => {

window.complexity = ''
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]()
    },
    renderBlock: function (blockName, container, cls, content, attrs) {
        window.application.blocks[blockName](container, cls, content, attrs)
    },
    timers: [],
}
window.deckID = [
    6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1, 14.1, 6.2, 7.2, 8.2, 9.2, 10.2,
    11.2, 12.2, 13.2, 14.2, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3, 14.3,
    6.4, 7.4, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4,
]


/***/ }),

/***/ "./src/js/block_layout.js":
/*!********************************!*\
  !*** ./src/js/block_layout.js ***!
  \********************************/
/***/ (() => {

function renderExampleDiv({ container, cls, content }) {
    const div = {
        tag: 'div',
        cls: `${cls}`,
        content: `${content}`,
    }
    container.appendChild(templateEngine(div))
}
window.application.blocks['example-div'] = renderExampleDiv
function renderExampleButtonFalse({ container, cls, content, id }) {
    const div = {
        tag: 'div',
        cls: cls,
        content: content,
        attrs: {
            id,
        },
    }
    container.appendChild(templateEngine(div))
}
window.application.blocks['example-false'] = renderExampleButtonFalse
function renderExampleButton({ container, cls, content }) {
    const button = {
        tag: 'button',
        cls: cls,
        content: content,
    }
    container.appendChild(templateEngine(button))
}
window.application.blocks['example-button'] = renderExampleButton

function renderExampleScreenStart() {
    const app = document.querySelector('.app')

    window.application.renderBlock('example-div', {
        container: app,
        cls: 'main',
        content: '',
    })
    const main = app.querySelector('.main')
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'complexity',
        content: '',
    })

    const div = main.querySelector('.complexity')
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_text',
        content: 'Выбери сложность',
    })
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_choice_area',
        content: '',
    })

    const complexity_choice_area = div.querySelector('.complexity_choice_area')
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '1',
        id: 'easy',
    })
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '2',
        id: ['average'],
    })
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '3',
        id: ['difficult'],
    })

    window.application.renderBlock('example-button', {
        container: div,
        cls: 'complexity_button',
        content: 'Старт',
    })
}
window.application.screens['example'] = renderExampleScreenStart
function renderExampleImg({ container, cls, id, src }) {
    const img = {
        tag: 'img',
        cls: cls,
        attrs: {
            id: id,
            src: src,
        },
    }
    container.appendChild(templateEngine(img))
}
window.application.blocks['example-img'] = renderExampleImg

function renderExampleScreenGameShirt() {
    const app = document.querySelector('.app')
    const deck = app.querySelector('.deck')
    deck.innerHTML = ''
    const arr = easy()
    for (let i = 0; i < window.deckT.length; i++) {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[i],
            src: './src/js/Img/shirt.jpg',
        })
    }
}
window.application.screens['gameShirt'] = renderExampleScreenGameShirt
function renderExampleScreenGameDisplay() {
    const app = document.querySelector('.app')
    app.innerHTML = ''
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'startGame',
        content: '',
    })
    const main = app.querySelector('.startGame')
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'head',
        content: '',
    })
    const head = main.querySelector('.head')
    window.application.renderBlock('example-div', {
        container: head,
        cls: 'head_timer',
        content: '',
    })
    const timer = main.querySelector('.head_timer')
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_box',
        content: '',
    })
    const box = main.querySelector('.head_timer_box')

    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'min',
    })
    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'sek',
    })
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_counter',
        content: '00.00',
    })
    window.application.renderBlock('example-button', {
        container: head,
        cls: 'head_button',
        content: 'Начать заново ',
    })
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'deck',
        content: '',
    })
    const deck = main.querySelector('.deck')
    // for (let i = 1; i < 5; i++) {
    //     for (let j = 6; j < 15; j++) {
    //         window.application.renderBlock('example-img', {
    //             container: deck,
    //             cls: 'deck_cards_shirt',
    //             id: `${i - 5}` + `.${j}`,
    //             src: `./src/js/Img/${j}.${i}.png`,
    //         })
    //     }
    // }
}
window.application.screens['gameDisplay'] = renderExampleScreenGameDisplay
function renderExampleComplexity() {
    const app = document.querySelector('.app')
    const main = app.querySelector('.startGame')
    const deck = main.querySelector('.deck')
    let arr =0
    if (window.complexity === 'easy') {
        arr = easy()
    }
    if (window.complexity === 'average') {
        arr = average()
    }
    if (window.complexity === 'difficult') {
        arr = difficult()
    }
    
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[i],
            src: `./src/js/Img/${arr[i]}.png`,
        })
    }
    window.deckT = deck.querySelectorAll('.deck_cards_shirt')
}
window.application.screens['gameComplexity'] = renderExampleComplexity
function easy() {
    let arr = []
    let counter = 0
    for (let i = 0; i < 10; i = i + 9) {
        for (let j = 0; j < 3; j++) {
            arr[counter] = window.deckID[j + i]
            counter++
        }
    }
    console.log(arr)
    function shuffle() {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    shuffle()

    return arr
}
function average() {
    let arr = []
    let counter = 0
    for (let i = 0; i < 10; i = i + 9) {
        for (let j = 0; j < 6; j++) {
            arr[counter] = window.deckID[j + i]
            counter++
        }
    }
    console.log(arr)
    function shuffle() {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    shuffle()

    return arr
}
function difficult() {
    let arr = []
    let counter = 0
    for (let i = 0; i < 10; i = i + 9) {
        for (let j = 0; j < 9; j++) {
            arr[counter] = window.deckID[j + i]
            counter++
        }
    }
    console.log(arr)
    function shuffle() {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    shuffle()

    return arr
}



/***/ }),

/***/ "./src/js/game_process.js":
/*!********************************!*\
  !*** ./src/js/game_process.js ***!
  \********************************/
/***/ (() => {

const app = document.querySelector('.app')
window.application.renderScreen('example')

const complexity = app.querySelectorAll('.complexity_choice_button')

complexity.forEach((control) => {
    control.addEventListener('click', () => {
        console.log(control.id)
        window.complexity = control.id
    })
})

const start = app.querySelector('.complexity_button')
start.addEventListener('click', () => {
    if (window.complexity === '') {
        alert('Пожалуста, выберите сложность')
        return
    }
    startGame()
})
function startGame() {
    window.application.renderScreen('gameDisplay')

    window.application.renderScreen('gameComplexity')

    setTimeout(() => {
        window.application.renderScreen('gameShirt')
        easyGame()
    }, 5000)
}
function easyGame() {
    const main = app.querySelector('.startGame')
    const deck = main.querySelector('.deck')

    let cards = deck.querySelectorAll('.deck_cards_shirt')

    let counters = 0
    let countersWin = 0
    let previous
    console.log(cards)
    cards.forEach((control, index) => {
        control.addEventListener('click', () => {
            if (
                counters > 0 &&
                `${previous.id}`[0] === `${window.deckT[index].id}`[0]
            ) {
                // alert('ók')
                counters = -1
                previous = ''
            }
            if (
                counters > 0 &&
                `${previous.id}`[0] != `${window.deckT[index].id}`[0] &&
                previous != ''
            ) {
                alert('Увы вы проиграли')
                return
            }

            previous = window.deckT[index]
            cards[index].src = window.deckT[index].src
            counters++
            countersWin++
            if (countersWin === 6 && window.complexity === 'easy') {
                alert('Вы выйграли')
            }
            if (countersWin === 12 && window.complexity === 'average') {
                alert('Вы выйграли')
            }
            if (countersWin === 18 && window.complexity === 'difficult') {
                alert('Вы выйграли')
            }
        })
    })
    console.log(window.deckT)
}


/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ (() => {

const noop = () => {}

function request({
    method = 'GET',
    url,
    type = 'json',
    checkStatusInResponse = false,
    onSuccess = noop,
    onError = noop,
}) {
    const req = new XMLHttpRequest()

    req.open(method, url)
    req.responseType = type

    req.onload = function (event) {
        const target = event.target

        if (target.status !== 200) {
            onError(target.statusText)
            return
        }

        if (checkStatusInResponse && target.response.status !== 'ok') {
            onError(target.statusText)
            return
        }
        onSuccess(target.response)
    }
    req.onerror = function () {
        onError()
    }
    req.send()
}


/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/***/ (() => {

function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('')
    }
    if (
        typeof block === 'string' ||
        typeof block === 'number' ||
        block === true
    ) {
        return document.createTextNode(block)
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment()

        block.forEach((element) => {
            fragment.appendChild(templateEngine(element))
        })

        return fragment
    }

    const result = document.createElement(block.tag)

    if (block.cls) {
        const classes = [].concat(block.cls)
        classes.forEach((cls) => {
            result.classList.add(cls)
        })
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs)

        keys.forEach((key) => {
            result.setAttribute(key, block.attrs[key])
        })
    }

    result.appendChild(templateEngine(block.content))

    return result
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./src/js/application.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "./src/js/template.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "./src/js/request.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block_layout */ "./src/js/block_layout.js");
/* harmony import */ var _block_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_block_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _game_process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_process */ "./src/js/game_process.js");
/* harmony import */ var _game_process__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_process__WEBPACK_IMPORTED_MODULE_4__);






})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map