w.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector(".App"); // Contenedor de aplicacion
  const buttonTheme = document.querySelector(".container-button-theme"); // Boton que cambia el tema

  //   Funcion de cambio de tema
  const toggleTheme = () => {
    const appClass = app.classList;

    if (appClass[1] === "light") {
      appClass.remove("light");
      appClass.add("dark");
    } else {
      appClass.remove("dark");
      appClass.add("light");
    }
  };

  //   Evento click del boton
  buttonTheme.addEventListener("click", toggleTheme);
});
