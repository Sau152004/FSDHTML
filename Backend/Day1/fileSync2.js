const {myReadFile, myWriteFile, myAppendFile, myDeletefile, username}=require("./fileSync1");
myReadFile();

const data="My FSD Class";
 myWriteFile(data);

 myReadFile();
 myAppendFile(data);
 myReadFile();

 myDeletefile("dummy.txt");
 console.log("user name=",username);