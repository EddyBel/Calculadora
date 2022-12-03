const { app, BrowserWindow } = require("electron");
const path = require("path");

const pathFileIndex = path.join(__dirname, "public/index.html");
const pathFileHistory = path.join(__dirname, "public/History");

let mainWindow; // Ventana principal
let windowHistory;

// Crea la ventana con sus propiedades
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 550,
    resizable: false,
    autoHideMenuBar: true,
  });
  mainWindow.loadFile(pathFileIndex);
  mainWindow.on("closed", () => (mainWindow = null));
}

function createHistoryWindow() {
  windowHistory = new BrowserWindow({});
  windowHistory.loadURL(pathFileHistory);
  windowHistory.on("close", () => (windowHistory = null));
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
