const mongoose = require('mongoose');

function connecDb(){
    mongoose
        .connect('mongodb://localhost:27017/backend-tutorial')
        .then(()=>{
            console.log("mongodb connected...");
        })
        .catch(()=>{
            console.log("Error in mongodb connection....");
        });
}

module.exports = connecDb;
