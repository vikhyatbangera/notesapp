import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import noteRoute from "./routes/note.route.js"

const app =express()
dotenv.config()
const port= process.env.PORT || 4002


//Database Connection Code
try{
    mongoose.connect(process.env.MONGOURI)
    console.log("Connected to mongodb")
}
catch(error){
    console.log("Error Connecting To Mongodb", error)
}
app.get('/',(req,res)=>{
    res.send("Hello World")
}
)

//Routing Middleware
app.use(express.json())
app.use("/api/v1/noteapp",noteRoute)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
}
)