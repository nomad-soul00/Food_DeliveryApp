import express from 'express'
import OrderModel from '../models/Order.models.js';

const orderRouter = express.Router();

orderRouter.post('/orderData', async (req, res) => {
    let { order_data, order_date, email } = req.body;
    await order_data.splice(0, 0, { Order_date: order_date });

    let eId = await OrderModel.findOne({ 'email': email })
    console.log(eId);

    if (eId === null) {
        try {
            await OrderModel.create({
                email,
                order_data
            })
        } catch (error) {
            console.log(error.message);
        }
    } else {
        try {
            await OrderModel.findOneAndUpdate({ email }, {
                $push: { order_data: data }
            }).then(() => {
                res.json({ success: true })
            })

        } catch (error) {
            res.send("Server Error: ", error.message)
        }
    }
})


export default orderRouter;