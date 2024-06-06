import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter your name!"],
        minLength:[3,"Name must contain atleast three characters!"],
        maxLength: [30,"Name can't exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true,"Please enter your email!"],
        validate:[validator.isEmail,"Please provide a valid email!"],
    },
    phone: {
        type: Number,
        required: [true,"Please enter your phone!"],  
    },
    password: {
        type: String,
        required: [true,"Please enter your password!"],
        minLength:[8,"Password must contain atleast eight characters!"],
        maxLength:[32,"Password can't exceed 32 characters"],
        select: false,
    },
    role: {
        type: String,
        required: [true,"Please select a role!"],
        enum: ["Job Seeker","Employer"],
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
});

//password encryption when user register or modify password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
});

//comparing the entered password and saved password
userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

//GENERATING A JWT TOKEN WHEN A USER REGISTERS OR LOGINS, IT DEPENDS ON OUR CODE THAT WHEN DO WE NEED TO GENERATE THE JWT TOKEN WHEN THE USER LOGIN OR REGISTER OR FOR BOTH. 
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  
  export const User = mongoose.model("User", userSchema);