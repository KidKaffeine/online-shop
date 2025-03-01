const express = require('express')
const router = express.Router()

const shopController = require('../controllers/shop')


router.get("/products", shopController.getProducts )

router.get('/cart', shopController.getCart)

router.get('/checkout', shopController.getCheckout )

router.get('/product-detail/:id', shopController.getProductDetail)

router.get('/', shopController.getHome)



module.exports = router;