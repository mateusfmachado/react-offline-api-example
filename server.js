const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 15000

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send({ ok: true })
})

app.post('/', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log('Running on localhost:'+PORT)
})