const router = require('express').Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Sign IN

router.post("/register", async (req, res) =>{
    try{
        const {email, username, password} = req.body;
        const checkUser = await User.findOne({email : email}); // email : email === email as both key and value have same name email. 
        if (checkUser){
            return res.json({message : "User Exists"});
        }
        const Salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, Salt);
        const user = new User({email, username, password: hashPassword});

         user.save().then(()=>
            res.status(200).json({message: " user created successfully "})
        );
    }catch(error){
        res.status(400).json({message : "unable to create"});
        console.log(error);
    }
});


router.post("/signin", async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
    
    const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
    );

    if (!isPasswordCorrect){
        res.status(400).json({message: "invalid password"});
    }
    const {password, ...others} = user._doc;
    res.status(200).json({others});
    }catch(error){
        res.status(400).json({message : "error occurs"});
        console.log(error);
    }
    
})

module.exports = router;