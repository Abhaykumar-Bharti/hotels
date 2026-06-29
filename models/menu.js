const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },  

    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy', 'salty'],
        required: true
    },

    is_drink: {
        type: Boolean,
        default: false
    },

    ingredients: {
        type: [String],
        default: []
    },

    sales: {
        type: Number,
        default: 0
    }
})

const menu = mongoose.model('Menu', menuSchema);
module.exports = menu;