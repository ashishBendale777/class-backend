const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    color: String,
    rating: Number
})

module.exports = mongoose.model('Product', productSchema);



// {
//     "name": "mobile",
//     "category": "Elec",
//     "color": "red",
//     "rating": 2.4
// }