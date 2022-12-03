window.addEventListener("DOMContentLoaded", () => {
  const buttonHistory = document.querySelector(".button-history");
  const buttonReturn = document.querySelector(".button-back-history");
  const sectionHistory = document.querySelector(".HISTORY");

  buttonHistory.addEventListener("click", () => {
    sectionHistory.style.transform = "translateX(0%)";
    renderHistory();
  });

  buttonReturn.addEventListener("click", () => {
    sectionHistory.style.transform = "translateX(-100%)";
    removeRenderHistory();
  });
});
