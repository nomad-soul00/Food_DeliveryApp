import express from 'express';
import UserModel from '../models/user.models.js';

const userRoute = express.Router();

userRoute.post('/', async (req, res) => {
    try{
    const { name, email, password, phoneNumber, address } = req.body;
        await UserModel.create({
            name, email, password, phoneNumber, address
        });    

        res.send("User registered successfully"); 

    }catch(error){
        console.log("Error in userModel: ",error);
    };      
});

export default userRoute;