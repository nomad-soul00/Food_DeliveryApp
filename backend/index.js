import express from 'express'
import cors from 'cors'

import connectToDatabase from './db.js'
import userRoute from './Routes/User.routes.js'
import displayRouter from './Routes/displayData.routes.js'
import orderRouter from './Routes/Order.routes.js'

const app = express()
const port = 5000
 
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/display', displayRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    await connectToDatabase();

})

