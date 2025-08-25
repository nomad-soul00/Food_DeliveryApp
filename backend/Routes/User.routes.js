import express from 'express';
import UserModel from '../models/user.models.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);

        

        try {
            const { name, email, password, phoneNumber, address } = req.body;
            await UserModel.create({
                name, email, password: securePassword, phoneNumber, address
            });

            res.json({ success: true });

        } catch (error) {
            console.log("Error in userModel: ", error);
            res.json({ success: false, error })

        };
    });


userRoute.post('/loginuser',
    async (req, res) => {
        try {
            const { email, password } = req.body;
            let user = await UserModel.findOne({ email })

            if (!user) {
                return res.status(400).json({ success: false, error: "User not found" });
            }

            if (user.password !== password) {
                return res.status(400).json({ success: false, error: "Provide correct credentials" });
            }

            res.json({ success: true }).send("User logged in successfully");

        } catch (error) {
            console.log("Error in userModel: ", error);
            res.json({ success: false, error })
        };
    });

export default userRoute;