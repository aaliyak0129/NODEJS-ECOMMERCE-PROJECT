const express = require('express')
const app = express();
require('dotenv').config()
const Port = (process.env.PORT) || 9000;
const cors=require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const adminRoute = require('./routes/AdminRoutes');


mongoose.connect(process.env.DBCON).then(()=>{
    console.log("MongoDB Database Established!!");
    
})
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/admin', adminRoute)
app.listen(Port, ()=>{
    console.log(`server run on ${Port}!!`);
    
})
const uploadRoute = require("./routes/uploadRoute");
app.use("/api", uploadRoute);
const razorpayRoutes = require('./routes/razorpayRoutes');
app.use('/api/razorpay', razorpayRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))