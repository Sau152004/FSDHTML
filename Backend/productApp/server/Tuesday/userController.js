const User=require("./userModel.js")
// console.log(User);

const getAllUsers=async(req,res)=>{
    try{
       const users=await User.find();
       res.status(200).json(users);
    }
    catch(err){
      res.status(500).json({message: err.message})
    }
  
}
const getEmail=async(req,res)=>{
    try{
        const email=req.params.email;
        const user=await User.findOne({email});
          res.status(200).json(user);
       }
        catch(err){
          res.status(500).json({message: err.message})
        }
      }

      const addUser=async(req,res)=>{
        try{
            const {name,email,password,role}=req.body;
            const newUser=new User({
                name,email,password,role
            })
            await newUser.save();
            res.status(201).json(newUser);
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
      }
      editUser=async(req,res)=>{
        try{
            const {name,email}=req.body;
            const user=await User.findByIdAndUpdate(req.params.id,{name,email},{new:true});
            res.status(200).json(user);
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
      }
      deleteUser=async(req,res)=>{
        try{
            const user=await User.findByIdAndDelete(req.params.id);
            res.status(200).json(user);
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
      }

      updateUser=async(req,res)=>{
        try{
            const {name,email}=req.body;
            const user=await User.findByIdAndUpdate(req.params.id,{name,email},{new:true});
            res.status(200).json(user);
        }
        catch(err){
            res.status(500).json({message: err.message})
        }
      }     


// console.log(getAllUsers);
module.exports={getAllUsers,getUserByEmail,addUser,editUser,deleteUser,updateUser}
