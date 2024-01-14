// bring in all dependencies
require('dotenv').config();
const express = require('express');
//const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express()
// define variables
const PORT = process.env.PORT || 5000;// process.env.PORT allow to access in .env file the development port that is 8000 the (||) means or also use 5000 port
// Connect to the database
require('dotenv').config();
//require('./config/database.cjs');



app.listen(PORT, function () {
    console.log(`Express app running on port: ${PORT}`);
})