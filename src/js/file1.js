function renderExampleMain(container, cls) {
    let main = {
      tag: "div",
      cls: `${cls}`,
    };
    container.appendChild(templateEngine(main));
  }
window.application.blocks["example-main"] = renderExampleMain;

function renderExampleScreenStart() {
    const app = document.querySelector(".app");
    app.textContent = "";
  
    window.application.renderBlock("example-main",app, 'main');
  
    window.application.renderBlock(
      "example-button",
      content,
      "login_button",
      "Login"
    );
  }
  window.application.screens["example"] = renderExampleScreen;