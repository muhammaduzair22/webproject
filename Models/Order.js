const mongoose = require("mongoose")


const OrderSchema = mongoose.Schema({
    customerid: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    itemid: [
        {
            type: String,
            required: true
        }
    ],
    status: {
        type: String,
        enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
