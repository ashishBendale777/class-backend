const Product = require("../model/product.model")

exports.getAllProduct = async (req, res) => {

    try {
        const prodData = await Product.find()
        res.status(200).json(prodData)
    } catch (error) {
        res.status(500).json(error)

    }
}


exports.addProduct = async (req, res) => {

    try {
        let reqData = req.body
        const newProd = await Product.create(reqData)
        res.status(200).json(newProd)
    } catch (error) {
        res.status(500).json(error)

    }

}
