const {app, BrowserWindow} = require('electron') 
const url = 'https://github.com'
// const path = require('path')

let win  

function createWindow() { 
    win = new BrowserWindow({width: 1200, height: 700})
    
    // win.setAppDtails()
    win.center()
    win.removeMenu()
    win.loadURL(url) 
}  

app.on('ready', createWindow) 