const products = require('../controllers/admin')

const getProducts = (req, res) => {
  res.render("shop/products", { title: "Shop", product: products.products });
};

const getCart = (req, res) => {
    res.render('shop/cart', { title: "Cart"})
}

const getCheckout = (req, res) => {
    res.render('shop/checkout', { title: "Checkout"})
}

const getProductDetail = (req, res) => {
    res.render('shop/product-detail', { title: "Product detail"})
}

const getHome = (req, res) => {
    res.render('shop/index', { title: "Homepage"})
}

module.exports = {
    getProducts: getProducts,
    getCart: getCart,
    getCheckout: getCheckout, 
    getProductDetail: getProductDetail,
    getHome: getHome
}