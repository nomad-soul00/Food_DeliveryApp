import express from 'express';
import UserModel from '../models/user.models.js';
import { body, validationResult } from 'express-validator';

const userRoute = express.Router();

userRoute.post('/',
    //express validators
    [
        body('email', "Invalid Email").isEmail(),
        body('password', 'incorrect password').isLength({ min: 6 })
    ],
    async (req, res) => {

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        try {
            const { name, email, password, phoneNumber, address } = req.body;
            await UserModel.create({
                name, email, password, phoneNumber, address
            });
            
            res.json({sucess: true}).send("User registered successfully");

        } catch (error) {
            console.log("Error in userModel: ", error);
            res.json({sucess: false, error})
           
        };
    });

export default userRoute;