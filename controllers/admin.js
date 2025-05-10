const productsArray = [];

const getAdminProducts = (req, res) => {
    res.render("admin/add-product", { title: "Add product" });
} 

const addAdminProduct = (req, res) => {
    const { title } = req.body;
    const { id } = req.body
    productsArray.push({ title: title, id: id });
    res.redirect("/shop/products");
}

module.exports = {
    getAdminProducts: getAdminProducts,
    addAdminProduct: addAdminProduct,
    products: productsArray,
}