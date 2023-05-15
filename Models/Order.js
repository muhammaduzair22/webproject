const mongoose = require("mongoose")


const OrderSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    orderItems: [
     {
        foodItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodItem',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
     }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    createdAt: {
    type: Date,
    default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
