const electron = require('electron')
const ipc = electron.ipcRenderer
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios')

const notification = {
    title: 'BTC Alert',
    body: 'BTC just beat your target price!',
    icon: path.join(__dirname, '../assets/images/btc.png')
}

ngOnInit();
getBTC();
setInterval ( getBTC, 30000 );

function ngOnInit(){
    var price = document.querySelector('h1')
    var targetPrice = document.getElementById('targetPrice')
    var targetPriceVal;    
}

function getBTC(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=INR')
    .then(res => {
        const cryptos = res.data.BTC.INR
        price.innerHTML = cryptos.toLocaleString('en-IN', { style:'currency', currency: 'INR' } );
        debugger;
        if(targetPrice.innerHTML != '' && targetPriceVal < res.data.BTC.INR ) {
            const myNotification = new window.Notification(notification.title,notification)
        }
    })
}

function clickMore(){
    const modalPath = path.join('file://', __dirname, 'add.html')
    // let win = new BrowserWindow({ width: 400, height: 200 })
    let win = new BrowserWindow({ frame: false, width: 400, height: 200 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
}

ipc.on('targetPriceVal', function(event,arg){
    targetPriceVal = Number(arg);
    targetPrice.innerHTML = targetPriceVal.toLocaleString('en-IN', { style:'currency', currency: 'INR' })
})

