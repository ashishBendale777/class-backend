const express = require("express")
const ProductController = require("../Controller/product.controller")

const router = express.Router()

router.get("/getProducts", ProductController.getAllProduct)
router.post("/addprodutc", ProductController.addProduct)
router.post("/find", ProductController.findProduct)
router.post("/delete", ProductController.deleteProduct)

router.put("/updaterating/:pid", ProductController.updateRating)

router.post("/prodbycolor", ProductController.prodByColor)

module.exports = router

//localhost:8080/api/getProducts

