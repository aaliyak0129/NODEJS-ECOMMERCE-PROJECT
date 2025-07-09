
const express = require('express')
const route = express.Router();
const adminController = require('../controllers/AdminControllers')


route.post('/adminlogin', adminController.AdminLogin);


module.exports=route;