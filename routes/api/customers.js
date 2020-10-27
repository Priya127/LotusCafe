const express = require("express");
const router = express.Router()
const { check, validationResult } = require("express-validator")
const Customer = require("../../models/Customer");



// @route GET /customer
// desc   Get user by token
// @access Private

router.get("/",async (req, res) => {
    try {
        const customer = await Customer.find();
        res.json(customer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }

});

// @route   Post api/customer
// @desc    Register customer
// @access  Public


router.post("/",[
    check("fullName", "Full Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail()
    
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { fullName,email,date,time} = req.body
        try {
            //if customer exists
            let customer = await Customer.findOne({ email: req.body.email })
            if (customer) {
                if (customer.fullName !== req.body.fullName) {
                    res.status(400).json({
                        errors: [{
                            msg: `User already exists, if you are the user-
                    please enter the correct name associated with this email !` }]
                    });
                }

                if (customer.fullName === req.body.fullName) {
                    customer.date = req.body.date
                    customer.time = req.body.time
                    customer.reset= true
                    await customer.save()
                    res.status(200).send(customer)
                }
            }
            customer = new Customer({
                fullName,
                email,
                date,
                time
            });
           
            await customer.save();
            res.status(200).send(customer)
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error")
        }



    });


module.exports = router;