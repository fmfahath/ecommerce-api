const productModel = require('../models/productModel')

exports.getProducts = async (req, res, next) => {

    try {
        const products = await productModel.find({})

        res.json({
            success: true,
            products
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


exports.getSingleProduct = async (req, res, next) => {

    try {
        const product = await productModel.find({ _id: req.params.id })

        res.json({
            success: true,
            product
        })
    }
    catch (error) {

        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}