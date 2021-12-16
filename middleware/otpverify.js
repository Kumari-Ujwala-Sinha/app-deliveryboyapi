const Otp = require('../models/otpModel')


const otpverify =async (req, res, next) => {
    const data =await Otp.findOne({code:req.body.otpcode,emailv:req.body.emailv})
    try {
       
        if(data){
            let currentTime=new Date().getTime()
            let diff = data.expireIn-currentTime

            console.log(data.code)
            console.log(data.activation_tokenv)
            
            if(diff < 0){
                return res.status(400).json({msg:"otp expired"})
            }else{
                req.activation_token=data.activation_tokenv
                req.otpverify_id=data._id
                next()
            }
        }
       
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = otpverify