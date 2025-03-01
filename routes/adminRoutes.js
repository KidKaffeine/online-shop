const express = require("express");

const router = express.Router();

const productsArray = [];

router.get("/products", (req, res) => {
  res.render("admin/admin", { title: "Admin Page" });
});

router.post("/addProduct", (req, res) => {
  const { title } = req.body;
  productsArray.push({ title: title });
  res.redirect("/shop/allProducts");
});

module.exports = {
  router: router,
  products: productsArray,
};
