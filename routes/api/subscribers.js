const express = require("express");
const router = express.Router()
const { check, validationResult } = require("express-validator")
const Subscriber = require("../../models/Subscriber");




// @route GET /subscriber
// desc   Get user by token
// @access Private

router.get("/",async (req, res) => {
    try {
        const subscriber = await Subscriber.find();
        res.json(subscriber);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }

});

// @route   Post api/subscriber
// @desc    Register subscriber
// @access  Public


router.post("/",[
    check("firstName", "First Name is required").not().isEmpty(),
    check("lastName", "Last Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { firstName,lastName, email } = req.body
        try {
            //if subscriber exists
            let subscriber = await Subscriber.findOne({ email })
            if (subscriber) {
                res.status(400).json({ errors: [{ msg: "User already exists!" }] });
                
            }
            subscriber = new Subscriber({
                firstName,
                lastName,
                 email
            });
           
            await subscriber.save();
            res.status(200).send(subscriber)
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error")
        }



    });


module.exports = router;