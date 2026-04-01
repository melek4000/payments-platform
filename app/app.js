const express = require('express');
const app = express();

app.get('/', (req,res)=>res.send("Payments API OK"));
app.get('/pay', (req,res)=>res.send("Payment processed"));
app.get('/health', (req,res)=>res.send("healthy"));

app.listen(4000, ()=>console.log("running"));

