const express = require("express");
const app = express();
const sendMail = require('./mail'); //import sendmail function

const PORT = process.env.PORT || 4000;

const path = require('path');

app.use(express.static(path.join(__dirname,'webpages')));


app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'webpages','index.html'))
});

app.post('/form',(req,res)=>{
    const{name,subject,email,num}=req.body;
    console.log('Data:', req.body);


    sendMail(email,subject,num,function(err,data){
        if(err){
            console.log("mil gya")
            res.status(500).json({message:'Internal Error'});
        }else{
            
            res.sendFile(path.join(__dirname,'webpages','thankyou.html'))

            // res.json({message:'Email Sent !!!!!'});
        }
    },name)

});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });

  