const express = require("express")
const router = express.Router()


router.get("/", (req,res)=> {
    res.json([
        { id:1, name:"laptop",price: 1299},
        { id:2, name:"Mouse",price:50}
    ])
})
router.get("/special",(req,res)=> {
    const specialProduct = {
        name: "magic mouse",
        price: 1000
    }
})

router.get("/:id",(req,res)=>{
    const id = Number(req.params.id)
    const product = [
        { id:1, name:"laptop",price: 1299},
        { id:2, name:"Mouse",price:50}        
    ]
    const requestedProduct = product.find((product)=> product.id === id)
    res.json(requestedProduct)
})


router.post("/",(req,res)=> {
    const {name,price} = req.body
    const newProduct = {
        name,
        price,
    }
    console.log(newProdduct)
    res.json({message: "New product added", product:newProduct})
})

module.exports = router