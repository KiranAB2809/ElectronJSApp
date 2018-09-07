const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios')

ngOnInit();
getBTC();
setInterval ( getBTC, 30000 );

function ngOnInit(){
    var price = document.querySelector('h1')
    var targetPrice = document.getElementById('targetPrice')
}

function getBTC(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=INR')
    .then(res => {
        const cryptos = res.data.BTC.INR
        price.innerHTML = cryptos.toLocaleString('en-IN', { style:'currency', currency: 'INR' } );
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
