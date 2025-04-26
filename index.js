const express = require('express');

const app = express();
app.get('/',(req,res)=>{
    res.send("My App is working fine...");
});
const PORT = 3000;
app.listen(PORT, () =>{
    console.log("app is listeneing port no : " + PORT);
}); 