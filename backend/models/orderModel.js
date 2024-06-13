const mongoose = require('mongoose')

const orderSchemea = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    createdAt: Date
});

const orderModel = mongoose.model('Order', orderSchemea)

module.exports = orderModel; 