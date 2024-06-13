const orderModel = require('../models/orderModel')

exports.createOrder = async (req, res, next) => {

    // console.log(req.body)

    const cartItems = req.body;
    const amount = cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)
    const status = "pending";

    const newOrder = await orderModel.create({ cartItems, amount, status })

    res.json({
        success: true,
        newOrder
    })
}  