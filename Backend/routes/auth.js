const express = require('express');
const Router = express.Router();
const User = require('../models/SignUpSchema');
const bycrypt = require('bcrypt');
const salt = 10;


Router.post('/signup', async (req, res) => {
    try {
        console.log("signUp body: ",req.body);
        const hashedPassword = await bycrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error("eroor is ",error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = Router;