const productModel = require('../models/productModel')

exports.getProducts = async (req, res, next) => {

    const products = await productModel.find({})

    res.json({
        success: true,
        products
    })
}


exports.getSingleProduct = async (req, res, next) => {

    const product = await productModel.find({ _id: req.params.id })

    res.json({
        success: true,
        product
    })
}