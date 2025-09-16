const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 900,
    icon: 'assets/game.ico'
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
