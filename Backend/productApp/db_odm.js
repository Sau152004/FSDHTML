const mongoose = require("mongoose");
const { type } = require("os");
const mongo_URL="mongodb://localhost:27017/FSD-IT-B";  
// MongoClient.connect(mongo_URL)";
mongoose.connect(mongo_URL)
.then(()=>{
    console.log("mongodb is connected successufully");
})
.catch(err=>{
    console.log("DB error",err.message);
})


const userSchema= new mongoose.Schema({
    name:{type: String,required:true},
    email:{type: String, required:true,unique:true},
    age:{type:Number,required:true}
})

const User= mongoose.model("userdata",userSchema);
const createUser=async()=>{
    try{
        const newUser=new User({name: "Jarvish",email:"jarvish@gmail.com",age:30});
            const user = await newUser.save();
            console.log("User created successufully",user);
        
    }
     catch(err){
        console.log("USer creation err",err.message);
     }
}
// createUser()  

const getUser= async()=>{
    try{
       const users = await User.find();
       console.log("List of Users:",users);
    }
    catch(err){
     console.log("user data featching error",err.message);
    }
}
// getUser();

// -----------------Update the users--------------

const updateUser=async()=>{
    try{
      const updateduserData=await User.findOneAndUpdate({name:"Jarvish"},{$set:{name:"Root Yadav"}},{new:true})
      console.log("User Update succesfully",updateduserData);
    }
    catch(err){
    console.log("User Updation error",err.message)
    }
}
// updateUser();



// delete the usera

const deleteUser=async()=>{
    try{
   await User.deleteOne({name:Jarvish});
   console.log("User Deleted Successfully");
    }
    catch(err){
        console.log("User deletion error");

    }
}

deleteUser();


// sabhi ko ek method me rkhte hai app.
const app=async()=>{
    await createUser();
    await updateUser();
    await getUser();
    await deleteUser();
    await getUser();


}
app();
