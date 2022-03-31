const app=require("./index")

const connect=require("./configs/db")


app.listen(5100, async ()=>{
    try{
        await connect()
        console.log("port 5100 is working fine")
    }
    catch
    {
         connsole.log("port is stoped something went wrong")
    }
})