import {catchAsyncError} from "../middleware/catchAsyncError.js"
import ErrorHandler from "../middleware/error.js"
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const register=catchAsyncError(async(req,res,next)=>{
    const {name,email,phone,role,password} = req.body;
    if(!name || !email || !phone || !role || !password){
        return next(new ErrorHandler("Please fill all the columns in the form!"))
    }
    const isEmail=await User.findOne({email});
    if(isEmail){
        return next(new ErrorHandler("Email already exists!"))
    }

    const user= await User.create({
        name,email,phone,role,password,
    })
    // sendToken(user,200,res,"User Registered succssfully!");


    res.status(200).json({
        success: true,
        message: "User registered!",
        user,
    })
})

export const login=catchAsyncError(async(req,res,next)=>{
    const {password,email,role}=req.body;
    if(!password || !email || !role){
        return next( new ErrorHandler("Please fill all the boxes!",400));
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password!",400));
    }
    const passcheck=await user.comparePassword(password);
    if(!passcheck){
        return next(new ErrorHandler("Invalid Email or Password!",400));
    }
    if(user.role!=role){
        return next(new ErrorHandler(`User with provided email and ${role} not exist!`,404));
    }
    sendToken(user,200,res,"Login succssfully!");
    // res.status(200).json({
    //     success: true,
    //     message: "Successful login!",
    //     user,
    // })
})

// export const logout