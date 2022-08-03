const app = document.querySelector('.app');
window.application.renderScreen("example");

const complexity = app.querySelectorAll('.complexity_choice_button');

complexity.forEach((control) => {
    control.addEventListener('click', ()=>{
        console.log(control.id);
        window.complexity= control.id;
    })
});

const start = app.querySelector('.complexity_button');
start.addEventListener('click',()=>{
    if (window.complexity==='') {
        alert('Пожалуста, выберите сложность');
        return;
    }
    beginningGame();

});
function beginningGame() {
    
    window.application.renderScreen("game");
    
}