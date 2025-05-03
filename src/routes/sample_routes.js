const express = require('express');

const sampleRouter = express.Router();

sampleRouter.get('/',(req,res) =>{
    res.send("This is inside sample router")
});

module.exports = sampleRouter;
/*
need to create a db list any have multiples qureies with params
moviesRouter.get('/',(req,res)=>{
    const query = req.query;
    if(query.from && query.to){
        const from = parseInt(query,from);
        const to = parseInt(query,to);
        const resultArray = db.slice(from,to+1);

    }
});*/