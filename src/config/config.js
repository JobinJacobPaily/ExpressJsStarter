const dontenv = require('dotenv');
const Joi = require('joi');
const path = require('path');

dontenv.config({path : path.join(__dirname , '../../.env' )});
console.log(process.env.PORT);

const envVarSchema = Joi.object()
.keys({
    PORT: Joi.number().default(8080), 
    NODE_ENV : Joi.string().valid('production','development','test','stage').required()
    //add required keys here for building  validation schema
}).unknown();

const {value : envVars , error} = envVarSchema.prefs({errors : {label : 'key'}}).validate(process.env);

if(error) {
    throw new Error(`Config validation error : ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port : envVars.PORT
}

