const express = require('express');
const sinchanRouter = express.Router();


// handler
sinchanRouter.get('/friends',(req,res)=>{
    const li = ['emi',"boby","sandu"];
    res.send(li.toString());
});
//similarly do for family and all 





module.exports = sinchanRouter;