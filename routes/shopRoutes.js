const express = require('express')
const products = require('../routes/adminRoutes')

const router = express.Router()

router.get("/allProducts", (req, res) => {  
    res.render('shop/shop', {title: "Shop", product: products.products }) 
})

router.post("/addToCart", (req, res) => {
    console.log(req.body)
    res.redirect('/shop/allProducts')
})

module.exports = router;