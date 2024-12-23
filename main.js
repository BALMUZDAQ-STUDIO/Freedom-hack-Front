const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:5173')
}

app.whenReady().then(createWindow)