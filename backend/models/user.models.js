const mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userSchema);