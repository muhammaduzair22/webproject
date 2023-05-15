const jwt = require("jsonwebtoken");
const Order = require("../Models/Order");


let createOrder = (req, res) => {
    let { customerid, deliveryAddress, itemid, totalAmount, status, createdAt } = req.body;

    let order = new Order({
        customerid,
        deliveryAddress,
        itemid,
        totalAmount,
        status,
        createdAt
    });
    order.save().then((order) => {
        res.status(200).send({ "Message": "new job successfully created", order: order })
    }).catch((err) => {
        res.status(500).send({ "Message": "There was some Error", err: err })
    })
}

module.exports = { createOrder }