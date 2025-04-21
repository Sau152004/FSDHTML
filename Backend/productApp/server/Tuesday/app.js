const express=require("express");
const app=express();
const dotenv=require("dotenv");
const userroute=require("./userRoutes.js")
const connectDB=require("./db.js")
dotenv.config();
const Port=process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/",userroute)
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})