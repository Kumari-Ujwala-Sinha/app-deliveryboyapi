const mongoose = require('mongoose')


const otpSchema = new mongoose.Schema({
    
    emailv: {
        type: String
    },
    code: {
        type: String,
      
    },
    expireIn: {
        type: Number,
   
    },
    activation_tokenv : {
        type: String,
    
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Otp", otpSchema)