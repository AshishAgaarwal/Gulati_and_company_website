// const nodemailer = require("nodemailer");

// async function main() {


// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "ashish.dtu2021@gmail.com", // generated ethereal user
//       pass: "kxxtbdmpbiwrvize", // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "ashishaggarwal9876@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });


//   console.log("Message sent: %s", info.messageId);

//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

// }

// main().catch(console.error);

var nodemailer = require('nodemailer');
require('dotenv').config();

let email_add= process.env.NAME ;
let pass_email=process.env.PASS;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:email_add,
    pass:pass_email
  },
  port: 465,
  host: 'smtp.gmail.com'
});

const sendmail =(email,subject,num,cb,name)=>{

    var mailOptions = {
        from: email,
        to: 'ashishaggarwal9876@gmail.com',
        subject: subject,
        text: " Email sent from:- " + name +" \n "+ "Contact No is :- "+ num +" \n "+ "Email Id  is :- "+ email
      };
      console.log("hello");
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("idhar bhai")
         cb(error,null);
        } else {
            cb(null,info);
        }
      });

}

module.exports = sendmail;