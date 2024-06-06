import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title:{
        type: String,
        required: [true,"Please provide a title!"],
        minLength:[3,"Title can't be smaller than 3 characters!"],
        maxLength:[30,"Title can't exceed 30 characters!"],
    },
    description:{
        type:String,
        required: [true,"Please provide a description!"],
        minLength:[30,"Description can't be less than 30 characters!"],
        maxLength:[300,"Description can't exceed 300 character"],
    },
    category:{
        type: String,
        required:[true,"Please provide a category!"],
    },
    country:{
        type:String,
        required:[true,"Please provide your country name"],
    },
    city:{
        type:String,
        required:[true,"Please provide a city name"],
    },
    location: {
        type: String,
        required: [true, "Please provide location."],
        minLength: [20, "Location must contian at least 20 characters!"],
    },
    fixedSalary: {
        type:Number,
        minLength:[4,"Salary can't be less than 4 digits"],
        maxLength:[10,"Salary can't be more than 10 digits"],
    },
    salaryFrom: {
        type:Number,
        minLength:[4,"Salary can't be less than 4 digits"],
        maxLength:[10,"Salary can't be more than 10 digits"],
    },
    salaryTo: {
        type:Number,
        minLength:[4,"Salary can't be less than 4 digits"],
        maxLength:[10,"Salary can't be more than 10 digits"],
    },
    expired: {
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default:Date.now,
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    },
})

export const Job=mongoose.model("Job",jobSchema);


