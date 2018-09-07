const electron = require('electron')
const path = require('path')
const remote = electron.remote

function closeWindow(){
    var window = remote.getCurrentWindow();
    window.close();
}