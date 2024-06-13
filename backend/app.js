const express = require('express')
const app = express();
const dotenv = require('dotenv')
const path = require('path')
const products = require('./routes/product')
const orders = require('./routes/order')

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })


app.use('/api/v1/', products)
app.use('/api/v1/', orders)


app.listen(process.env.PORT, () => {
    console.log(`Server listenig port:${process.env.PORT} - ${process.env.NODE_ENV}`);
})