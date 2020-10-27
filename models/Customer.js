const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true,
      
    },
    time:{
        type:String,
        required:true
    },
    reset:{
        type:Boolean
    }
});

module.exports = Customer = mongoose.model('customer', CustomerSchema)