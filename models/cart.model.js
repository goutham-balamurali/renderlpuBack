
const mongoose = require("mongoose");
const { productSchema } = require("./product.model");
const config = require("../config/config");
const cartSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    cartItems: [
        {
            product: productSchema,
            quantity: Number
        }
    ],
    paymentOption: {
        type: String,
        default: config.default_payment_option
    }
})

const Cart = mongoose.model("Cart", cartSchema)
module.exports.Cart = Cart