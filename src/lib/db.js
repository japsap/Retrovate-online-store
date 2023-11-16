import mongoose from "mongoose";

export async function db(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Retrovate-online-store')
        console.log('Database connected!');
    } catch(err){
        console.log(err)
    }
}