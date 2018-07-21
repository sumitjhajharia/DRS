const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
var socket = io('http://localhost:8000/');

const submitBtn = document.getElementById('submitBtn');

socket.on('connection', (data) => console.log(data));

submitBtn.addEventListener('click', (e) => {
    if(!document.getElementsByClassName('user-name')[0].value || !document.getElementsByClassName('secret-key')[0].value) {
            console.log("Need to fill values");
            return;
    };

    const modalpath = path.join('file://', __dirname, 'add.html');
    let win = new BrowserWindow({ width: 600, height : 400 })
    win.on('close', () => { win = null})
    win.loadURL(modalpath)
    win.show()

    socket.emit('init', {
        name : document.getElementsByClassName('user-name')[0].value,
        key : document.getElementsByClassName('secret-key')[0].value
    })
    

});