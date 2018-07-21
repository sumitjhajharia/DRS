const electron = require('electron');
const remote = electron.remote;
const path = require('path');
const agreeTermsBtn = document.getElementById('agreeTermsBtn');


agreeTermsBtn.addEventListener('click', (e) => {
    var window = remote.getCurrentWindow();
    window.close();
});