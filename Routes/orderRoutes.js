
const { createOrder } = require("../Controller/createorder")
const { deleteOrder } = require("../Controller/deleteorder")

const orderRouter = require("express").Router();


orderRouter.post("/createOrder", createOrder)
orderRouter.delete("/deleteOrder/:id", deleteOrder)


module.exports = orderRouter;



