const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        
    },
    lastName: {
        type: String,
        required: true,
      
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = Subscriber = mongoose.model('subscriber', SubscriberSchema)