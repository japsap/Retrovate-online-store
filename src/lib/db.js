import mongoose from "mongoose";

export async function db(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database connected!');
    } catch(err){
        console.log(err)
    }
}