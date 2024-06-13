exports.getProducts = (req, res, next) => {
    res.json({
        success: true,
        message: "Get Product working!"
    })
}

exports.getSingleProduct = (req, res, next) => {
    res.json({
        success: true,
        message: "Get single Product working!"
    })
}