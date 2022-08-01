function renderExampleDiv(container, cls, content) {
    let main = {
      tag: "div",
      cls: `${cls}`,
      content: `${content}`,
    };
    container.appendChild(templateEngine(main));
}
window.application.blocks["example-div"] = renderExampleDiv;
function renderExampleButtonFalse(container, cls, content,id) {
    let main = {
      tag: "div",
      cls: `${cls}`,
      content: `${content}`,
      attrs: {
        id : id,
      }
    };
    container.appendChild(templateEngine(main));
}
window.application.blocks["example-false"] = renderExampleButtonFalse;
function renderExampleButton(container, cls, content) {
    let main = {
      tag: "button",
      cls: `${cls}`,
      content: `${content}`,
    };
    container.appendChild(templateEngine(main));
}
window.application.blocks["example-button"] = renderExampleButton;

function renderExampleScreenStart() {
    const app = document.querySelector(".app");
    
    window.application.renderBlock("example-div",app, 'main','');
    const main = app.querySelector('.main');
    window.application.renderBlock("example-div",main, 'complexity','');
    
    const div = main.querySelector('.complexity')
    window.application.renderBlock("example-div" ,div, 'complexity_text','Выбери сложность');
    window.application.renderBlock("example-div" ,div, 'complexity_choice_area','');
    
    const complexity_choice_area = div.querySelector('.complexity_choice_area');
    window.application.renderBlock("example-false" ,complexity_choice_area, 'complexity_choice_button','1','easy');
    window.application.renderBlock("example-false" ,complexity_choice_area, 'complexity_choice_button','2','average');
    window.application.renderBlock("example-false" ,complexity_choice_area, 'complexity_choice_button','3','difficult');
    
    window.application.renderBlock("example-button" ,div, 'complexity_button','Старт');
  }
window.application.screens["example"] = renderExampleScreenStart;

function renderExampleScreenGame() {
    const app = document.querySelector(".app");
    app.innerHTML = "";
  }
window.application.screens["game"] = renderExampleScreenGame;