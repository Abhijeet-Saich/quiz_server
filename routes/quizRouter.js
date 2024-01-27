const express = require('express');
const quizRouter = express.Router();

const {verifyController} = require('../controllers/authController');
const userdata = require('../data/users');


quizRouter.get('/',verifyController,(req,res)=>{
    res.send("Data yaha se ayego");
})


module.exports = quizRouter;