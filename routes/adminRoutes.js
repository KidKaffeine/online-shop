const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/admin")

router.get("/products", adminControllers.getAdminProducts );

router.post("/addProduct", adminControllers.addAdminProduct );

module.exports = router;
