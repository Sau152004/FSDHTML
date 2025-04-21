// const { MongoClient } = require("mongodb");
// const  mongo_URL = "mongodb+srv://ysaurabh0704:Saurabh@2004@cluster0.2jphs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// MongoClient.connect(mongo_URL)
// .then(client=>{
//     console.log("MongoDB is connected");
// })
// .catch(err=>{
//     console.log("DB error",err.message);
// });




const { MongoClient } = require("mongodb");

// Define the MongoDB connection URL
const mongo_URL = "mongodb+srv://ysaurabh0704:Saurabh@2004@cluster0.2jphs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // For local MongoDB
// OR use your MongoDB Atlas URL if using cloud: 
// const mongo_URL = "mongodb+srv://username:password@cluster.mongodb.net/productApp?retryWrites=true&w=majority";

MongoClient.connect(mongo_URL)
  .then(client => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });


