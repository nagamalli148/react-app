const express= require("express")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

// localhost:3000
// localhost:4000

app.get("/adduser",(req,res)=> {
console.log("req.body");
res.send("Response Received" + req.body)
})

app.listen(4000, () => console.log("Server on local host: 4000"))
