// middleware function to see if user is logged in
// import jwt 
const jwt = require('jsonwebtoken');
// impor tmulter
const multer = require('multer');
const checkLoggedIn = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, 'ilovescotchscotchyscotchscotch', (err, decoded) => {
            if (err) {
                return res.json({ eemessage: 'Failed to authenticate token.' });
            } else {

                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            emessage: 'No token provided.'
        });
    }
}

const checkIfAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        next()
    } else {
        return res.status(403).send({
            emessage: 'You are not an admin.'
        });
    }
}

const UploadImage = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './images/');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});




module.exports = {
    checkLoggedIn,
    UploadImage,
    checkIfAdmin
}