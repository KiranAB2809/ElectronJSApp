const electron = require('electron')
const ipc = electron.ipcRenderer
const path = require('path')
const remote = electron.remote

ngOnInit();

function ngOnInit(){
    
}

function closeWindow(){
    var window = remote.getCurrentWindow();
    window.close();
}

function updateClick(){
    const notifyBtn = document.getElementById('notifyVal')
    console.log(notifyBtn)
    ipc.send('update-notify-value', notifyBtn.value)
    var window = remote.getCurrentWindow();
    window.close();
}
