const { app, BrowserWindow } = require("electron");
const path = require("path");

const pathFileIndex = path.join(__dirname, "public/index.html");

let mainWindow; // Ventana principal

// Crea la ventana con sus propiedades
function createWindow() {
  mainWindow = new BrowserWindow({ width: 400, height: 550, resizable: false });
  mainWindow.loadFile(pathFileIndex);
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
