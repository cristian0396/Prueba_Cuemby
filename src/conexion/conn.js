var mongoose = require('mongoose');

const URI = "mongodb+srv://Christian:cris@cluster0.ryffw.mongodb.net/Cuemby_db?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connectec..!');
}

module.exports = connectDB;