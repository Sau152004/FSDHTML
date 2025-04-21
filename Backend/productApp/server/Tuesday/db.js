const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const url=process.env.ATLAS_URL || "mongodb://localhost:27017/userappDB";
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://ysaurabh0704:Saurabh2004@cluster0.2jphs.mongodb.net/dbdata?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MONGODB Connected");
    }
    catch(err){
        console.log("DB ERROR:",err.message);
    }
}
module.exports=connectDB;