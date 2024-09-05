const mongoose = require('mongoose')

const productSchema=mongoose.Schema({
    name: String,
    category: String,
    color: String,
    rating:Number
})

export const Product = mongoose.model('Product', productSchema);
