import mongoose from "mongoose"

export const dbConnect=()=>{
    mongoose.connect(process.env.MONGOURI,{
        dbName: "JOB_SEEKER",
    }).then(()=>{
        console.log("Connected to database!");
    }).catch(()=>{
        console.log(`Some error occured while connecting to database ${err}`)
    })
}