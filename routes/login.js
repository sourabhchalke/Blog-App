const express = require('express');
const router = express();
const bcrypt = require('bcrypt');
const UserReg = require('../models/userReg');

router.get('/login', (req, res) => {
    res.render('./login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);
    try {

        const user= await UserReg.findOne({email});
        // console.log(user);
        if(!user){
            return res.status(400).render('./login',{
                error:"User Not Found",
            });
        }

        // console.log(password);
        // console.log(user.password);
        const decodePassword=await bcrypt.compare(password,user.password);

        if(!decodePassword){
           return res.status(400).render('./login',{
                error:"Incorect Password",
            });
        }
        const name=user.fullname;
        // res.send("Login Successfull");
       return res.render('home');
    } catch (error) {
       return res.status(400).render('./login',{
            error:"Incorect Password",
        });
    }

})

module.exports = router;