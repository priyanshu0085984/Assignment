const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:Number,
    name:String,
    description:String,
    ean:String,
    upc:String,
    image:String,
    images:[{
        title:String,
        description:String,
        url:String
    }],
    net_price: String,
            taxes: String,
            price: String,
            categories: [String],
            tags:[String] 
});

module.exports = mongoose.model('Product', ProductSchema);