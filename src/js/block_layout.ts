import {templateEngine} from './template';

function renderExampleDiv( container:Element, cls, content ) {
    const div = {
        tag: 'div',
        cls,
        content,
    };
    
    container.appendChild(templateEngine(div));
}
window.application.blocks['example-div'] = renderExampleDiv;
function renderExampleButtonFalse( container:Element, cls, content, id ) {
    const div = {
        tag: 'div',
        cls,
        content,
        attrs: {
            id,
        },
    };
    container.appendChild(templateEngine(div));
}
window.application.blocks['example-false'] = renderExampleButtonFalse;
function renderExampleButton( container:Element, cls, content ) {
    const button = {
        tag: 'button',
        cls,
        content,
    };
    container.appendChild(templateEngine(button));
}
window.application.blocks['example-button'] = renderExampleButton;

function renderExampleScreenStart() {
    

    const app = document.querySelector('.app');
    if (app) {
        app.innerHTML = '';
        window.application.renderBlock('example-div',
        app,
        'main',
        '',
    );
    }

    
    const main = app?.querySelector('.main');
    if (main) {
        window.application.renderBlock('example-div', 
        main,
        'complexity',
        '',
    );
    }
    

    const div = main?.querySelector('.complexity');
    if (div) {
        window.application.renderBlock('example-div',
        div,
        'complexity_text',
        'Выбери сложность',
    );
    }
    if (div) {
        window.application.renderBlock('example-div',div,
        'complexity_choice_area',
        '',
    );
    }
    

    const complexity_choice_area = div?.querySelector(
        '.complexity_choice_area'
    );
    if (complexity_choice_area) {
        window.application.renderBlock('example-false',
    complexity_choice_area,
    'complexity_choice_button',
        '1',
        'easy',
    );
    window.application.renderBlock('example-false', complexity_choice_area,
        'complexity_choice_button',
        '2',
        'average',
    );
    window.application.renderBlock('example-false',complexity_choice_area,
        ['complexity_choice_button'],
        '3',
        ['difficult'],
    );
    }
    
    if (div) {
        window.application.renderBlock('example-button',div,
        'complexity_button',
        'Старт',
    );
    }
    
}
window.application.screens['example'] = renderExampleScreenStart;
function renderExampleImg(container:Element, cls, id, src ) {
    const img = {
        tag: 'img',
        cls: cls,
        attrs: {
            id: id,
            src: src,
        },
    };
    container.appendChild(templateEngine(img));
}
window.application.blocks['example-img'] = renderExampleImg;
import IMG from "./public/shirt.jpg"

function renderExampleScreenGameShirt() {
    const app = document.querySelector('.app');
    const deck = app?.querySelector('.deck');
    if (deck) {
        deck.innerHTML = '';
    }
    const arr = easy();
    if (deck) {
        window.deckT?.forEach((_, index) => {
        window.application.renderBlock('example-img',deck,
            'deck_cards_shirt',
            arr[index],
            IMG
        );
    });
    }
    
}
window.application.screens['gameShirt'] = renderExampleScreenGameShirt;
function renderExampleScreenGameDisplay() {
    const app = document.querySelector('.app');
    if (app) {
        app.innerHTML = '';
    }
    if (app) {
        window.application.renderBlock('example-div',app,
        'startGame',
        '',
    );
    }
    
    const main = app?.querySelector('.startGame');
    if (main) {
        window.application.renderBlock('example-div', main,
        'head',
        '',
    );
    }
    const head = main?.querySelector('.head');
    if (head) {
        window.application.renderBlock('example-div',head,'head_timer','',
    );
    }
    
    const timer = main?.querySelector('.head_timer');
    if (timer) {
        window.application.renderBlock('example-div',timer,'head_timer_box',
        '',
    );
    }
    
    const box = main?.querySelector('.head_timer_box');
if (box) {
    window.application.renderBlock('example-div',box,'head_timer_type',
        'min',
    );
    window.application.renderBlock('example-div',  box,
        'head_timer_type',
        'sek',
    );
}
    if (timer) {
        window.application.renderBlock('example-div',timer,
        'head_timer_counter',
        '00.00',
    );
    }
    if (head) {
        window.application.renderBlock('example-button', head,
        'head_button',
        'Начать заново ',
    );
    }
    if (main) {
        window.application.renderBlock('example-div', 
        main,
        'deck',
        '',
    );
    }
    
}
window.application.screens['gameDisplay'] = renderExampleScreenGameDisplay;
import * as CARD from "./public/shirt.jpg"

function renderExampleComplexity() {
    
    const app = document.querySelector('.app');
    const main = app?.querySelector('.startGame');
    const deck = main?.querySelector('.deck');
    let arr = [];
    arr = complexityS(window.complexity);
    console.log(arr);
    arr.forEach((element, index) => {
        if (deck) {
            window.application.renderBlock('example-img',deck,
            'deck_cards_shirt',
            arr[index],
            `./src/js/Img/${element}.png`,
        );
        }
        
    });
    window.deckT = deck?.querySelectorAll('.deck_cards_shirt');
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
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
const createCards = (count) => {
    let arr: number[] = [];
    let counter: number = 0;
    for (let i = 0; i < 10; i += 9) {
        for (let j = 0; j < count; j++) {
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
export  function renderNull():void {
    for (let i = 0; i < window.application.timers.length; i++) {
        clearInterval(window.application.timers[i]);
    }
}
function renderExampleAlink( container:Element, cls, content ) {
    const a = {
        tag: 'a',
        cls,
        content,
    };
    container.appendChild(templateEngine(a));
}
window.application.blocks['example-link'] = renderExampleAlink;

function renderExampleScreenLost() {
    const app = document.querySelector('.app');
    if (app) {
        window.application.renderBlock('example-div', app,
        'overlay',
        '',
    );
    }
    
    const overlay = app?.querySelector('.overlay');
    if (overlay) {
        window.application.renderBlock('example-div',overlay,
        'popUpScreen',
        '',
    );
    }
    
    const popUpScreen = app?.querySelector('.popUpScreen');
    if (popUpScreen) {
        window.application.renderBlock('example-img',popUpScreen,
        'popUpScreen_img_lost',
        'loser',
        `./src/js/Img/loser.png`,
    );
    window.application.renderBlock('example-div', popUpScreen,
        'popUpScreen_result',
        'Вы проиграли!',
    );
    window.application.renderBlock('example-div',popUpScreen,
        'popUpScreen_time',
        'Затраченное время:',
    );
    window.application.renderBlock('example-div', popUpScreen,
        'popUpScreen_time_counter',
    );
    window.application.renderBlock('example-button', popUpScreen,
        'head_button',
         'Начать снова ',
    );
    }
    
}
window.application.screens['gameLost'] = renderExampleScreenLost;
function renderExampleScreenWin() {
    const app = document.querySelector('.app');
    if (app) {
        window.application.renderBlock('example-div',app,
        'overlay',
        '',
    );
    }
    
    const overlay = app?.querySelector('.overlay');
    if (overlay) {
        window.application.renderBlock('example-div', overlay,'popUpScreen',
        '',
    );
    }
    
    const popUpScreen = app?.querySelector('.popUpScreen');
    if (popUpScreen) {
        window.application.renderBlock('example-img',popUpScreen,
        'popUpScreen_img_lost',
        'loser',
        `./src/js/Img/win.png`,
    );
    window.application.renderBlock('example-div',popUpScreen,
       'popUpScreen_result',
         'Вы выиграли!',
    );
    window.application.renderBlock('example-div',  popUpScreen,'popUpScreen_time',
        'Затраченное время:',
    );
    window.application.renderBlock('example-div',popUpScreen,
        'popUpScreen_time_counter',
        
    );
    window.application.renderBlock('example-button', popUpScreen,
        'head_button',
       'Начать снова ',
    );
    }
    
}
window.application.screens['gameWin'] = renderExampleScreenWin;
