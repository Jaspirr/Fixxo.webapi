const mongoose = require('mongoose')

const schema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {type: String},
    tag: {type: String},
    rating: {type: Number},
    imageURL: {type: String},


})

module.exports = mongoose.model("product", schema)
