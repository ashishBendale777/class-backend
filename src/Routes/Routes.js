const express = require("express")
const ProductController = require("../Controller/product.controller")

const router = express.Router()

router.get("/getProducts", ProductController.getAllProduct)
router.post("/addprodutc", ProductController.addProduct)

module.exports = router

//localhost:8080/api/getProducts

