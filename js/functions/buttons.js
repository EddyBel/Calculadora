window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  const input = document.querySelector(".input-operation");
  const output = document.querySelector(".container-output");

  const display = new Display(input, output);
  const constraints = new Constraints(buttons, input);

  constraints.Main(() => display.runOperation());
});
