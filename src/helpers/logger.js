const { transports, format } = require('winston');
const winston  = require('winston');
const config = require('../config/config');


const logger = winston.createLogger({
    level: "info",
});

const console = new transports.Console({
    format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.colorize(),
        format.align(),
        format.printf(log => `${log.timestamp}:${log.message}`)
    )
});

const file = new transports.File({
    filename : 'logs/translator.log',
    format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(log => `${log.timestamp}:${log.message}`)
    )
});

if (config.env === "development")
    logger.add(console);
else
    logger.add(file);

const logging  = (isDebug , object , apiUrl) => {
    if(isDebug == 1) {
        logger.info(`api Id : ${apiUrl.id} \n api Url : ${apiUrl.url} \n data : ${JSON.stringify(object)}`);
    }
};

module.exports ={
    logging
}