const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb+srv://rahulkumar:bjENbINKJ1DPnz5f@e-comerce-api.btfinea.mongodb.net/E-comerce-API?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
// bjENbINKJ1DPnz5f
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;