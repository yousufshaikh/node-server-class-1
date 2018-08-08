const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/index.html', (req, res) => res.send('This is index.html page'))

// app.put('/hello-one', (req, res) => res.send('Hello World Testing Two!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))