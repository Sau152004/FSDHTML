const fs=require("node:fs");   // all package come with node
 function myReadFile(){

 
try{
const data=fs.readFileSync("dummy.txt","utf-8");
console.log("File Data:",data.toString()); // to convert into String
}
catch(err){
    console.log("File Rading error:",err.message);
}
 }


 const myWriteFile=(data)=>{
     try{
     fs.writeFileSync("dummy.txt",data);
     console.log("Successfully write file");
     }
     catch(err){
        console.log("File Writting Error:",err.message);
     }
 }

 const myAppendFile=(data)=>{
    try{
        fs.appendFileSync("dummy.txt",data);
        console.log("Appended data Successfully");

    }
    catch(err){
        console.log("File Appending Error:",err.message);
    }
 }

 const myDeletefile=(filename)=>{
    try{
        fs.unlinkSync(filename);
        console.log("Successfully deleted file",filename);

    }
    catch(err){
        console.log("File Deleting Error",err.message);

    }
 }
 module.exports={
    myReadFile:myReadFile,
    myWriteFile:myWriteFile,
    myAppendFile:myAppendFile,
    myDeletefile:myWriteFile,
    username:"Saurabh"
 }

//  module banaana hai to comment kr diya ahai
//   myReadFile();
//   const data="Hello Saurabh How are you!"
//   //myWriteFile(data);
//   myAppendFile(data);
//   myReadFile();
//   myDeletefile("dummy.txt"); dummy.txt file delete ho jayegee
//   myReadFile();  //File Rading error: ENOENT: no such file or directory, open 'D:\Btech2022_2026\ThirdYear2024-2025\Traning\FSDITC\FSDHTML\FSDHTML\Backend\Day1\dummy.txt'
