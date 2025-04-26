const express = require('express');

const arithRouter = require("./routes/arith_route");
const areaRouter = require("./routes/area_route");

const morgan = require("morgan");
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welcome to Mathician ...");
});

app.use('/arith',arithRouter);
app.use('/area',areaRouter);


module.exports = app;