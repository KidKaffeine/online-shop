const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/allProducts", (req, res) => {    
    res.sendFile(path.join(__dirname, '../', 'resources', 'views', 'shop.html'))
})

router.post("/addToCart", (req, res) => {
    console.log(req.body)
    res.redirect('/allProducts')
})

module.exports = router;