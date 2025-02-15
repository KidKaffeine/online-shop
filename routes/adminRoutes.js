const express = require('express')
const path = require('path')

const router = express.Router()

router.get("/products", (req, res) => {
  res.render('admin', { title: "Admin Page", heading: "Test"})
  // res.sendFile(path.join(__dirname, '../', 'resources', 'views', 'admin.html'))
})

router.post("/addProduct", (req, res) => {
    console.log(req.body)
    res.redirect('/shop/allProducts')
})

module.exports = router;