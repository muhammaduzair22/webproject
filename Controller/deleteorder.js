const jwt = require("jsonwebtoken");
const Order = require("../Models/Order");

let deleteOrder = (req, res) => {
    let id = (req.params.id)
    Order.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send("Delete Successfull");
        })
        .catch((err) => {
            res.status(500).send("Failed");
        });
};

module.exports = { deleteOrder };
