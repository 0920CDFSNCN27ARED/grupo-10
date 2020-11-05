const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor funcionando en puerto 3000');
})

app.all('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/products', (req, res)=>{
    res.sendFile(__dirname + '/views/products.html')
});

app.get('/cart', (req, res)=>{
    res.sendFile(__dirname + '/views/productCart.html')
});

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html')
});

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html')
});