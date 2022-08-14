const app = document.querySelector('.app');
let sec = 0;
let min = 0;
function newGame() {
    renderScreen();
    sec = 0;
    min = 0;
    window.application.renderScreen('example');

    const complexity = app.querySelectorAll('.complexity_choice_button');

    complexity.forEach((control) => {
        control.addEventListener('click', () => {
            console.log(control.id);
            window.complexity = control.id;
        });
    });

    const start = app.querySelector('.complexity_button');
    start.addEventListener('click', () => {
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

    setTimeout(() => {
        window.application.renderScreen('gameShirt');
        progressGame();

        window.application.timers.push(setInterval(timer, 1000));
    }, 5000);
    const head = app.querySelector('.head');
    const butter = head.querySelector('.head_button');

    butter.addEventListener('click', () => {
        newGame();
        window.time = '00:00';
        return;
    });
}


function timer() {
    const head_timer_counter = app.querySelector('.head_timer_counter');
    //renderScreen();
    sec++;
    if (sec > 59) {
        min++;
        sec = 0;
    }
    head_timer_counter.textContent = `${min} :${sec}`;
}
function progressGame() {
    const main = app.querySelector('.startGame');
    const deck = main.querySelector('.deck');
    let cards = deck.querySelectorAll('.deck_cards_shirt');

    let counters = 0;
    let countersWin = 0;
    let previous;
    console.log(cards);
    cards.forEach((control, index) => {
        control.addEventListener('click', () => {
            if (counters > 0 && previous.id[0] === window.deckT[index].id[0]) {
                // alert('ók')
                counters = -1;
                previous = '';
            }
            if (
                counters > 0 &&
                previous.id[0] != window.deckT[index].id[0] &&
                previous != ''
            ) {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                );
                window.time = head_timer_counter.textContent;
                loser();
                renderScreen();
                return;
            }

            previous = window.deckT[index];
            cards[index].src = window.deckT[index].src;
            counters++;
            countersWin++;
            if (countersWin === 6 && window.complexity === 'easy') {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                );
                window.time = head_timer_counter.textContent;
                Win();
                renderScreen();
                return;
            }
            if (countersWin === 12 && window.complexity === 'average') {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                );
                window.time = head_timer_counter.textContent;
                Win();
                renderScreen();
                return;
            }
            if (countersWin === 18 && window.complexity === 'difficult') {
                const head_timer_counter = app.querySelector(
                    '.head_timer_counter'
                );
                window.time = head_timer_counter.textContent;
                Win();
                renderScreen();
                return;
            }
        });
    });
    console.log(window.deckT);
}
function loser() {
    window.application.renderScreen('gameLost');
    const popUpScreen = app.querySelector('.popUpScreen');
    const butter = popUpScreen.querySelector('.head_button');

    butter.addEventListener('click', () => {
        newGame();
        window.time = '00:00';
        return;
    });
}
function Win() {
    window.application.renderScreen('gameWin');
    const popUpScreen = app.querySelector('.popUpScreen');
    const butter = popUpScreen.querySelector('.head_button');

    butter.addEventListener('click', () => {
        newGame();
        window.time = '00:00';
        return;
    });
}
