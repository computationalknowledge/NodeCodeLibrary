
const express = require('express');

const app = express();

app.get('/help', (req, res) =>{
res.send('help.png')
});

 app.listen('8000', () => {
console.log('Welcome')
});
