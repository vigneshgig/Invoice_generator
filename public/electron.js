const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
const isDev = require("electron-is-dev");
const url = require("url");
let mainWindow = null;
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 1024,
    title: "GeethamHouse",
  });
  mainWindow.maximize();
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : url.format({
          pathname: path.join(__dirname, `../build/index.html`),
          protocol: "file:",
          slashes: true,
        })
  );
  // mainWindow.loadURL(

  // );
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });
}
