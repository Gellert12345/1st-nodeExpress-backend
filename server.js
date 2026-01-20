const cors = require("cors")
const express = require("express"); //import express
const productRouter = require("./product")
const app = express() //lértehoz egy appot(szervert)

app.use(cors({
    origin: ["https://localhost:5500","https://127.0.0.0.1:5500"]
}))
app.use((req,res,next)=> {
    console.log(req.method,req.path)
    next()
})
app.use(express.json())

app.use("./product",productRouter)

app.get("/",(req,res)=> { //ha valki get adatot kér így valszolok
    res.send("hello from express");
})

app.get("/about", (req,res)=>{
    res.send("this is the about page");
})
app.get("/contact", (req,res)=>{
    res.send("this is the contact page");
})

app.get("/message",(req,res)=>{
    res.json({message: "hello from the backend"})
})

app.post("/message", (req,res => {
    const {name,message} = req.body
    console.log("new message:",name,message)
    res.json({message:"thanks for your message"})
}))

app.listen(3000,()=>{ //hallgatja/figyeli a 3000es portot
    console.log("the server is running");
})