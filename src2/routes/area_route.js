const express = require('express');

const areaRouter = express.Router();

areaRouter.post('/circle',(req,res)=>{
    const{radius} = req.body;
    const sum = parseInt(radius);
    res.send("The area of circle is -> " + (sum*sum*3.14));
});

areaRouter.post('/rect',(req,res)=>{
    const{length,breadth} = req.body;
    const l = parseInt(length);
    const b = parseInt(breadth);
    res.send("The area of rectangle is -> " + (l*b));
});

areaRouter.post('/square',(req,res)=>{
    const{side} = req.body;
    const sum = parseInt(side);
    res.send("The area of square is -> "  + (sum*sum));
});

module.exports = areaRouter;