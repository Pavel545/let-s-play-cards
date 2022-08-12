function renderExampleDiv({ container, cls, content }) {
    const div = {
        tag: 'div',
        cls,
        content,
    };
    container.appendChild(templateEngine(div));
}
window.application.blocks['example-div'] = renderExampleDiv;
function renderExampleButtonFalse({ container, cls, content, id }) {
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
function renderExampleButton({ container, cls, content }) {
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

    window.application.renderBlock('example-div', {
        container: app,
        cls: 'main',
        content: '',
    });
    const main = app.querySelector('.main');
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'complexity',
        content: '',
    });

    const div = main.querySelector('.complexity');
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_text',
        content: 'Выбери сложность',
    });
    window.application.renderBlock('example-div', {
        container: div,
        cls: 'complexity_choice_area',
        content: '',
    });

    const complexity_choice_area = div.querySelector('.complexity_choice_area');
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '1',
        id: 'easy',
    });
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '2',
        id: ['average'],
    });
    window.application.renderBlock('example-false', {
        container: complexity_choice_area,
        cls: ['complexity_choice_button'],
        content: '3',
        id: ['difficult'],
    });

    window.application.renderBlock('example-button', {
        container: div,
        cls: 'complexity_button',
        content: 'Старт',
    });
}
window.application.screens['example'] = renderExampleScreenStart;
function renderExampleImg({ container, cls, id, src }) {
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

function renderExampleScreenGameShirt() {
    const app = document.querySelector('.app');
    const deck = app.querySelector('.deck');
    deck.innerHTML = '';
    const arr = easy();
    window.deckT.forEach((index) => {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[index],
            src: './src/js/Img/shirt.jpg',
        });
    });
}
window.application.screens['gameShirt'] = renderExampleScreenGameShirt;
function renderExampleScreenGameDisplay() {
    const app = document.querySelector('.app');
    app.innerHTML = '';
    window.application.renderBlock('example-div', {
        container: app,
        cls: 'startGame',
        content: '',
    });
    const main = app.querySelector('.startGame');
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'head',
        content: '',
    });
    const head = main.querySelector('.head');
    window.application.renderBlock('example-div', {
        container: head,
        cls: 'head_timer',
        content: '',
    });
    const timer = main.querySelector('.head_timer');
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_box',
        content: '',
    });
    const box = main.querySelector('.head_timer_box');

    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'min',
    });
    window.application.renderBlock('example-div', {
        container: box,
        cls: 'head_timer_type',
        content: 'sek',
    });
    window.application.renderBlock('example-div', {
        container: timer,
        cls: 'head_timer_counter',
        content: '00.00',
    });
    window.application.renderBlock('example-button', {
        container: head,
        cls: 'head_button',
        content: 'Начать заново ',
    });
    window.application.renderBlock('example-div', {
        container: main,
        cls: 'deck',
        content: '',
    });
    const deck = main.querySelector('.deck');
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
window.application.screens['gameDisplay'] = renderExampleScreenGameDisplay;
function renderExampleComplexity() {
    const app = document.querySelector('.app');
    const main = app.querySelector('.startGame');
    const deck = main.querySelector('.deck');
    let arr = [];
    arr = complexityS(window.complexity);
    console.log(arr);
    arr.forEach((element, index) => {
        window.application.renderBlock('example-img', {
            container: deck,
            cls: 'deck_cards_shirt',
            id: arr[index],
            src: `./src/js/Img/${element}.png`,
        });
    });
    window.deckT = deck.querySelectorAll('.deck_cards_shirt');
}
function complexityS(arr) {
    switch (arr) {
        case 'easy':
            arr = easy();
            break;
        case 'average':
            arr = average();
            break;
        case 'difficult':
            arr = difficult();
            break;
        default:
            break;
    }
    return arr;
}
window.application.screens['gameComplexity'] = renderExampleComplexity;
function easy() {
    let arr = [];
    let counter = 0;
    for (let i = 0; i < 10; i += 9) {
        for (let j = 0; j < 3; j++) {
            arr[counter] = window.deckID[j + i];
            counter++;
        }
    }
    console.log(arr);
    
    arr = shuffle(arr);

    return arr;
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}
function average() {
    let arr = [];
    let counter = 0;
    for (let i = 0; i < 10; i +=  9) {
        for (let j = 0; j < 6; j++) {
            arr[counter] = window.deckID[j + i];
            counter++;
        }
    }
    console.log(arr);
    arr = shuffle(arr);

    return arr;
}
function difficult() {
    let arr = [];
    let counter = 0;
    for (let i = 0; i < 10; i +=  9) {
        for (let j = 0; j < 9; j++) {
            arr[counter] = window.deckID[j + i];
            counter++;
        }
    }
    console.log(arr);
    arr = shuffle(arr);

    return arr;
}
