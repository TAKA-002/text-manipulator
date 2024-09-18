const { app, BrowserWindow } = require("electron");
const path = require("path");

// 開発環境でのみelectron-reloaderを読み込む
if (process.env.NODE_ENV === "development") {
  try {
    const electronReloader = require("electron-reloader");
    electronReloader(module, {
      debug: true,
      watchRenderer: true,
    });
  } catch (err) {
    console.log("Error electron-reloader", err);
  }
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
  win.loadFile(path.join(__dirname, "../../dist/index.html"));

  // 開発環境でのみ開発者ツールを開く
  if (process.env.NODE_ENV === "development") {
    win.webContents.openDevTools();
  }
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
