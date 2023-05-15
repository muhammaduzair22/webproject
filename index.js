const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json())
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const userRouter = require("./Routes/userRoutes");

app.use('/user', userRouter)


app.listen(process.env.PORT, () => {
    console.log(`App Listning at Port ${process.env.PORT}`)
})

mongoose.connect(process.env.MONGODB_URI).then((err) => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})

