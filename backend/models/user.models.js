import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({        
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

},{ timestamps: true });

 const UserModel = mongoose.model('User', userSchema);

    export default UserModel;