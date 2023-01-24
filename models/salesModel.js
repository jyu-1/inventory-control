const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
    saleDate: { type: Date, required: true },
    items: [
        {
            name: String,
            tags: [{ type: String }],
            price: { type: mongoose.Types.Decimal128, required: true },
            quantity: { type: Number, required: true },
            _id: false,
        },
    ],
    storeLocation: { type: String, required: true },
    customer: {
        gender: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true },
        satisfaction: { type: Number, required: true },
    },
    couponUsed: { type: Boolean, required: true },
    purchaseMethod: { type: String, required: true },
});

module.exports = mongoose.model("Sales", SalesSchema);
