require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/linkedIn', (req, res) => {
    res.send('faizanali')
})

app.get('/docs', (req, res) => {
    res.send('Getting started')
})

app.get('/login', (req, res) => {
    res.send('login through google')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
