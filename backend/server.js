require('dotenv').config();
const app = require("./src/app");
const connectedDB = require("./src/db/db");



connectedDB()


app.listen(3000, ()=>{
    console.log('Server is Running on port 3000');
    
})