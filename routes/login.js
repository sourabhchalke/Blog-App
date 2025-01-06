const express = require('express');
const router = express();
const bcrypt = require('bcrypt');
const UserReg = require('../models/userReg');

router.get('/login', (req, res) => {
    res.render('./login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {

        const user= await UserReg.findOne({email});
        console.log(user);
        if(!user){
            res.status(400).send("User Not Found");
        }

        console.log(password);
        console.log(user.password);
        const decodePassword=await bcrypt.compare(password,user.password);

        if(!decodePassword){
            res.status(400).send("Incorrect Password");
        }

        res.send("Login Successfull");
    } catch (error) {
        console.log(error.stack);
    }

})

module.exports = router;