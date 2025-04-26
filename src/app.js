const express = require('express');
const sampleRouter = require("./routes/sample_routes");
const sinchanRouter= require("./routes/sinchan_routes");

const morgan = require('morgan');

const app = express();
//middleware....in betweeb req and res
app.use(morgan('combined')); //we can give dev also
//morgan is the logger
app.use(express.json); //to recieve the payload as json



app.get('/',(req,res)=>{
    res.send("This is in Homee ");
});
app.use('/sample' , sampleRouter);
app.use('/sinchan',sinchanRouter);
module.exports = app;
// const PORT = 3000;
// app.listen(PORT, ()=>{
//     console.log("Server is running on port => " + PORT);
// });