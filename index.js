const express = require('express')
const app = express();
const port = 5000;
const allData = require('./data.json')

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/alldata', (req, res) =>{
    res.send(allData)
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})