const {Client}=require("pg");
const client = new Client({
    host: 'localhost',
    port: 5432,
    database:'FSD-IT-B',
    user: 'postgres',
    password:'admin'
});
client.connect()
.then(()=>{
    console.log("POSTGRESQL connected");
})
.catch(err=>{
    console.log("DB error",err.message);
});

const createUser=async()=>{
try{
    const res =await client
    .query("insert into users(name,email,age)values('gaurav yadav','gauravyadav@gmail.com',18)")
    console.log("Users created Successufully",res.rowCount);
}
catch(err){
    console.log("insert query error",err.message)
}

}
// createUser();


const getUser=async()=>{
    try{
        const res =await client
        .query("select * from order by age desc")
        console.log("User Data",res.rows);
    }
    catch(err){
        console.log("select query error",err.message)
    }
    
    }

// getUser();  

    const updateUser=async()=>{
        try{
            const res =await client
            .query("update users set email='gauravyadav@gmail.com' where name='gaurav yadav' " )
            console.log("Users edited Successufuly",res.rowCount);
        }
        catch(err){
            console.log("Update query error",err.message)
        }
        
        }
        // updateUser();
  

        const deleteUser = async () => {
            try {
                const res = await client.query("DELETE FROM users");
                console.log("Users deleted successfully", res.rowCount);
            } catch (err) {
                console.log("Delete query error:", err.message);
            }
        };
        
        // deleteUser();
        



            const app=async()=>{
                await createUser();
                await getUser();
                await updateUser();
                // await getUser();
            }
           app();

