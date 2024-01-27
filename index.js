const express = require('express');
const cors = require('cors');
const env = require('dotenv');
env.config(); //linking .env file to app

//importing routes
const quizRouter = require('./routes/quizRouter');
const authRouter = require('./routes/authRouter');
const categoriesRouter = require('./routes/categoriesRouter');

//importing data
const quizzes = require('./data/quizzes');
const userdata = require("./data/users");


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;


app.get('/',(req,res) =>{
    res.send("Server is giving response");
})


app.use('/auth',authRouter);
app.use('/quiz',quizRouter);
app.use('/categories',categoriesRouter);


app.listen(PORT,()=>{
    console.log("SERVER IS ON!!")
})