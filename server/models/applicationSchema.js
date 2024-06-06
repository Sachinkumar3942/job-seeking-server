import mongoose from "mongoose";
import validator from "validator";

const applicationSchema=new mongoose.Schema({
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
    coverLetter:{
        type:String,
        required:[true,"Please provide a cover letter!"],
    },
    address:{
        type:String,
        required:[true,"Please provide address!"],
    },
    resume:{
        public_id:{
            type: String, 
            required: true,
        },
        url: {
            type:String,
            required:true,
        },
    },
    applicantId:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role:{
            type: String,
            enum:["Job Seeker"],
            required: true,
        },
    },
    employerId:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role:{
            type: String,
            enum:["Employer"],
            required: true,
        },
    },
});

export const Application=mongoose.model("Application",applicationSchema);