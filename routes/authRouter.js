const express = require('express');
const {loginController,signupController} = require('../controllers/authController')
const authRouter = express.Router();

authRouter.post('/login',loginController);
authRouter.post('/signup',signupController);

module.exports = authRouter