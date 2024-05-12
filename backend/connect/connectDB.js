const mongoose = require('mongoose');

const connect = async (req, res) =>{
    try{
        await mongoose.connect("I can't show this soon use env file").then(()=>{
            console.log("DB Connected");
        })
    } catch (error){
        res.status(400).json({
            message : "DB not connected"
        })
        console.log(error);
    }
};

connect(); 