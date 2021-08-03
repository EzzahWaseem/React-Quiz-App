

import express from 'express';


import User  from "../models/User.js";


const routerUser = express.Router();

export const getUsersList = async (req, res) => { 
    try {
        const userList = await User.find();
                console.log('userList',userList)
        res.status(200).json(userList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser =  (req, res) => { 
    console.log('post user',req.body)
    const { email, password } = req.body;
     User.findOne({email:email},(err,user)=>{
         console.log('userrr',user)
        if (user) {
            if(password=== user.password){
                res.send({ message: 'User Fetch' ,user:user})
            }
            else{
                res.send({ message: 'Password missmatch'})

            }
        } else {
         console.log('userrr error',user)

            res.send({ message: 'User is not Registered' })
            
        }
    })
}



export const createUser = async (req, res) => {
    const { firstName, lastName, email, password, reEnterpassword,isAdmin,isUser } = req.body;
    console.log('req user',req.body)
    await User.findOne({email:email},(error,user)=>{
        if (user) {
            res.status(200).json({ message: 'User already Registered' })
        } else {
            const newUser = new User({ firstName, lastName, email, password, reEnterpassword,isAdmin,isUser })
            console.log('new user',newUser)
            try {
                newUser.save();
                res.status(201).json(newUser);
                return;
            } catch (error) {
                res.status(409).json({ message: error.message });
            }
        }
    })

}





export default routerUser;