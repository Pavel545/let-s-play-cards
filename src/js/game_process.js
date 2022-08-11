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
