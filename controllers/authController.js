const jwt = require('jsonwebtoken');
const {v4 : vid} = require('uuid')
const userdata = require('../data/users');


const loginController = (req,res) => {

    const {username,password} = req.body;
    const isVerified = userdata.users.some(ele => username === ele.username && password === ele.password);
    
    if(isVerified){
        const token = jwt.sign(username,process.env.SECRET_KEY);
        res.json({username,token});
    }else{
        res.status(401).json("Invalid Credentials");
    }
}


const signupController = (req,res) => {
    
    const {username,password,emailId} = req.body;
    const ifExist = userdata.users.some(ele => username === ele.username);
    if(ifExist){
        res.json({message : "User alreay exist"});
    }
    else{
        const id = vid()
        const token = jwt.sign(username,process.env.SECRET_KEY);
        const newUser = {vid,username,password,emailId};
        userdata.users = [...userdata.users,newUser];
        res.json({message : `A user with username : ${username} and token : ${token} has been created`})
    }
}

const verifyController = (req,res,next) =>{
        const token = req.headers.authorization;
        try {
            const validUser = jwt.verify(token,process.env.SECRET_KEY);
            // console.log(validUser.Id)
            req.user = {userId : validUser.Id};
            return next()
        } catch (error) {
            console.log(error);
        }
}



module.exports = {loginController,signupController,verifyController};