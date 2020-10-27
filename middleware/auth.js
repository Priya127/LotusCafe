const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

module.exports = function (req, res, next) {
    //Get token from header
    const token = req.header('x-auth-token');

    //check if not token

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    //Verify token

    try {
        jwt.verify(token, JWT_SECRET, (error, decoded) => {
            if (error) {
                res.status(401).json({ msg: "token is not valid" })
            }
            else {
                req.user = decoded.user;
                next();
            }
        });

    } catch (err) {
        console.error('something wrong with auth middleware');
        res.status(500).json({ msg: 'Server Error' });
    }



};