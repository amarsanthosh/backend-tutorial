const express = require('express');
const sampleRouter = require("./routes/sample_routes");

const app = express();

app.get('/',(req,res)=>{
    res.send("This is in Homee ");
});
app.use('/sample' , sampleRouter);
module.exports = app;
// const PORT = 3000;
// app.listen(PORT, ()=>{
//     console.log("Server is running on port => " + PORT);
// });