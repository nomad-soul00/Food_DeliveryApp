import express from 'express'

import connectToDatabase from './db.js'
import userRoute from './Routes/User.routes.js'

const app = express()
const port = 5000

app.use(express.json());

app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    await connectToDatabase();

})

