const mongoose = require('mongoose');
const {MONGODB_URI} = require('./keys');        //dependancy for global variables


const db = MONGODB_URI
const connectDB = async () =>  {
    try{
        await mongoose.connect(db,{
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true 
            });
        console.log('MongoDB connected...')
    }
    catch(err){
       console.error(err.message);
       //exit process with failure
       process.exit(1);
    }
}

module.exports = connectDB;