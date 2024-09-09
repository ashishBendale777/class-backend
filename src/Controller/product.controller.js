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

exports.findProduct = async (req, res) => {
    try {

        const prod = await Product.findById(req.body.id)
        res.status(200).json(prod)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })
    }
}

exports.deleteProduct = async (req, res) => {
    try {

        const prod = await Product.findByIdAndDelete(req.body.id)
        res.status(200).json(prod)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })
    }
}
