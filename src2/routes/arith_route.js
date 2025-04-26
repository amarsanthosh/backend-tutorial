const express = require('express');

const arithRouter = express.Router();

arithRouter.get('/operations/all', (req,res)=>{
    const li = ['add','sub','mul','div'];
    res = send("The list of operations are -> " + li.toString );
});

arithRouter.get('/add/:a/:b',(req,res)=>{
    const a1 = parseInt(req.params.a);
    const a2 = parseInt(req.params.b);
    const sum = a1+a2;
    res.send("The Sum of two numbers is -> " + sum);
});

arithRouter.get('/sub/:a/:b',(req,res)=>{
    const a1 = parseInt(req.params.a);
    const a2 = parseInt(req.params.b);
    const sum = a1-a2;
    res.send("The Sub of two numbers is -> " + sum);
});

arithRouter.get('/mul/:a/:b',(req,res)=>{
    const a1 = parseInt(req.params.a);
    const a2 = parseInt(req.params.b);
    const sum = a1*a2;
    res.send("The mul of two numbers is -> " + sum);
});
arithRouter.get('/div/:a/:b',(req,res)=>{
    const a1 = parseInt(req.params.a);
    const a2 = parseInt(req.params.b);
    const sum = a1/a2;
    res.send("The div of two numbers is -> " + sum);
});
module.exports = arithRouter;