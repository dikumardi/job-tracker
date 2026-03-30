const mongoose = require('mongoose')

async function connectedDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        console.log('Successfully Connected to DB');
        
    }).catch((err) => {
        console.log('Failed to connect to database');
        
    });
}


module.exports = connectedDB