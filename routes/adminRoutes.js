const express = require('express')

const router = express.Router()

router.get("/products", (req, res) => {
    res.status(200).json({message: "Get products"})
})

router.post("/addProduct", (req, res) => {
    res.status(204).json({message: "Add products"})
})

module.exports = router;