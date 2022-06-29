const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const logger = require('./config/logger');

const routes = require('./routes');

const app = express();

//parse json request body
app.use(express.json());

//add headers for security purpose
app.use(helmet());

//sanitizing user inputs
app.use(xss());

//enable cors and prefight request
app.use(cors());
app.options('*' , cors());

app.use(express.urlencoded({
    extended : true
}));

app.use('/' , routes);


app.get('/' , (req , res) => res.send("Endpoints are accessible ! "));

//manage unknown routes
app.use((req , res , next) => {
logger.info(`${req.originalUrl} was  not found `);
res.status(404).json(`{statusCode : 20002 , message : "path not found" }`);
});

module.exports  = app;


