// const mypromise=new Promise(
//     (resolve , reject)=>{
//         let a= 12;
//         if(a>10){
//             // resolve("data resolveed");
//             resolve({name:"rahul", branch:"IT"})
//         }
//         else{
//             reject("Data is rejected");
//         }
//     }
// );
// // mypromise.then(msg=>console.log(msg))
// // mypromise.then(msg=>console.log(msg.name))
// mypromise.then(msg=>console.log(msg.branch))
// .catch(error=>console.log(error))
// .finally(()=>console.log("finally Executed"));
const output=document.getElementById("output");

const data=fetch("https://dummyjson.com/recipes");
data.then(
    (res)=>{
        console.log(res);
        res.json().then(
            (response)=>{
                console.log(response.recipes[0].name);
                
                output.innerHTML=response.recipes[0];
                console.log(output)
            
            }
            
        )
        
    }
)

