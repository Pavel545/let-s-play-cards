function renderExampleDiv(container, cls, content) {
  const div = {
    tag: "div",
    cls: `${cls}`,
    content: `${content}`,
  };
  container.appendChild(templateEngine(div));
}
window.application.blocks["example-div"] = renderExampleDiv;
function renderExampleButtonFalse({ container, cls, content, id }) {
  const div = {
    tag: "div",
    cls: `${cls}`,
    content: `${content}`,
    attrs: {
      id: id,
    },
  };
  container.appendChild(templateEngine(div));
}
window.application.blocks["example-false"] = renderExampleButtonFalse;
function renderExampleButton({ container, cls, content }) {
  const button = {
    tag: "button",
    cls: `${cls}`,
    content: `${content}`,
  };
  container.appendChild(templateEngine(button));
}
window.application.blocks["example-button"] = renderExampleButton;

function renderExampleScreenStart() {
  const app = document.querySelector(".app");

  window.application.renderBlock("example-div", app, "main", "");
  const main = app.querySelector(".main");
  window.application.renderBlock("example-div", main, "complexity", "");

  const div = main.querySelector(".complexity");
  window.application.renderBlock("example-div", {
    containeer: div,
    cls: "complexity_text",
    content: "Выбери сложность",
  });
  window.application.renderBlock("example-div", {
    containeer: div,
    cls: "complexity_choice_area",
    content: "",
  });

  const complexity_choice_area = div.querySelector(".complexity_choice_area");
  window.application.renderBlock("example-false", {
    container: complexity_choice_area,
    classes: ["complexity_choice_button"],
    content: "1",
    dataAttrs: ["easy"],
  });
  window.application.renderBlock("example-false", {
    container: complexity_choice_area,
    classes: ["complexity_choice_button"],
    content: "2",
    dataAttrs: ["average"],
  });
  window.application.renderBlock("example-false", {
    container: complexity_choice_area,
    classes: ["complexity_choice_button"],
    content: "3",
    dataAttrs: ["difficult"],
  });

  window.application.renderBlock("example-button", {
    container: div,
    cls: "complexity_button",
    content: "Старт",
  });
}
window.application.screens["example"] = renderExampleScreenStart;

function renderExampleScreenGame() {
  const app = document.querySelector(".app");
  app.innerHTML = "";
}
window.application.screens["game"] = renderExampleScreenGame;
