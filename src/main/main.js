const { app, BrowserWindow } = require("electron");
const electronReloader = require("electron-reloader");
const path = require("path");

if (process.env.NODE_ENV === "development") {
  electronReloader(module, {
    debug: true,
    watchRenderer: true,
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // ここを修正
  win.loadFile(path.join(__dirname, "../../dist/index.html"));

  // 開発ツールを開く（開発中は便利だが、製品版ではコメントアウトする）
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
