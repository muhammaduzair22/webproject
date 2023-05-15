const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
require("dotenv").config();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(bodyParser.json());

const userRoter = require("./Routes/userRoutes");
const jobRouter = require("./Routes/jobRoutes")
const applicationRouter = require("./Routes/applicationRoutes")

app.use('/user', userRoter)
app.use('/job', jobRouter)
app.use('/application', applicationRouter)

app.post('/upload', upload.single('file'), (req, res) => {
    // Handle file upload
    console.log(req.file);
    res.json({ message: 'File uploaded successfully' });
});

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muhammaduzair800@gmail.com',
        pass: '8951dd7c'
    }
});
app.post('/send-email', (req, res) => {
    const email = req.body.email;
    const randomNumber = Math.floor(Math.random() * 100) + 1;


    // Define the email options
    const mailOptions = {
        from: 'muhammaduzair800@gmail.com',
        to: email,
        subject: `LogIn OTP`,
        text: `New message from ${randomNumber}`
    };

    // Send the email using the transporter
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).send('Email sent successfully');
        }
    });
});




app.listen(process.env.PORT, () => {
    console.log(`App Listning at Port ${process.env.PORT}`)
})

mongoose.connect(process.env.MONGODB_URI).then((err) => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})

