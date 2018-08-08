const express = require('express')  // importing express from express
const app = express() // use express object in app variable

app.get('/', (req, res) => res.send('Hello World!'))  // get root file 'localhost:3000/'

app.get('/test', (req, res) => res.send('This is test page')) // get test link 'localhost:3000/test'

// app.put('/hello-one', (req, res) => res.send('Hello World Testing Two!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))