

const nodemailer = require("nodemailer");

const sendEmail =(to, url, txt) => {
  
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_KEY,
      },
    });
     
    

    var mailOptions = {
      from: "kumariujwalas@gmail.com",
      to: to,
      subject: "DevAT Channel",
      html: `
          <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
          <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the DevAT channel.</h2>
          <p>Congratulations! You're almost set to start using DEVAT✮SHOP.
              Just click the button below to validate your email address.
          </p>
          
          <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
      
          <p>If the button doesn't work for any reason, you can also click on the link below:</p>
      
          <div>${url}</div>
          </div>
      `
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if(err) return err;
        return data
    })
  };


module.exports = sendEmail;
