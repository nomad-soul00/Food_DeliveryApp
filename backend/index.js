const express = require('express')
const connectToDatabase = require("./db.js")

const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    await connectToDatabase();

})
