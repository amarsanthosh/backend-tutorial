const express = require('express');

const sampleRouter = express.Router();

sampleRouter.get('/',(req,res) =>{
    res.send("This is inside sample router")
});

module.exports = sampleRouter;