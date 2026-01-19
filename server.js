const express = require("express"); //import express
const app = express() //lértehoz egy appot(szervert)

app.get("/",(req,res)=> { //ha valki get adatot kér így valszolok
    res.send("hello from express");
})

app.get("/about", (req,res)=>{
    res.send("this is the about page");
})
app.get("/contact", (req,res)=>{
    res.send("this is the contact page");
})
app.get("/product", (req,res)=> {
    res.json([
        { id:1, name:"laptop",price: 1299},
        { id:2, name:"Mouse",price:50}
    ])
})
app.get("/product/:id",(req,res)=>{
    const id = Number(req.params.id)
    const product = [
        { id:1, name:"laptop",price: 1299},
        { id:2, name:"Mouse",price:50}        
    ]
    const requestedProduct = product.find((product)=> product.id === id)
})
app.listen(3000,()=>{ //hallgatja/figyeli a 3000es portot
    console.log("the server is running");
})