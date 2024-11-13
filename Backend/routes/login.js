const express = require('express');
const router = express.Router();
const User = require('../models/SignUpSchema')
const bycrypt = require('bcrypt');


router.post('/login', async(req, res) => {
    email = req.body.email;
    password = req.body.password;
    const response = await User.findOne({ email: email});
    const validPassword = await bycrypt.compare(req.body.password, response.password)
    if(validPassword){
        res.status(200).json({ message: "Login successful"});
    } else {
        res.status(401).json({ message: "Invalid credentials"});
    }
});
module.exports = router;