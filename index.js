const express = require('express');
const app = express();

//var port = 3000;
const config = require('./config/appConfig.js');
const mongoose = require ('mongoose');
const router = express.Router();
const cors = require('cors');
const bodyParser= require('body-parser');

//const config = require('./config/appConfig.js');
app.get('/',(req,res) => res.send('Helo World!'))

mongoose.connect(config.db,(req,res)=>{
    console.log(res);
});
console.log(config.port);

//app.listen(port,()=>{console.log("listening port", port)})
app.listen(config.port,()=> console.log('App listening'));


