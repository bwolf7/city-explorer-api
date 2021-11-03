const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('./weather.json')
app.get('/*', (req, res) => res.status(403).send('not found'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})