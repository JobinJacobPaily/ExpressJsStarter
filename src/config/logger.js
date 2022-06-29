const { transports, format } = require('winston');
const winston = require('winston');
const config = require('./config');

const logger = winston.createLogger({
    level: config.env === "development" ? "debug" : "info",
});

const console = new transports.Console({
    format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.colorize(),
        format.align(),
        format.printf(log => `${log.timestamp}: ${[log.level]}: ${log.message}`)
    )
});

const file = new transports.File({
    filename : 'logs/translator.log',
    format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(log => `${log.timestamp}: ${[log.level]}: ${log.message}`)
    )
});

if (config.env === "development")
    logger.add(console);
else
    logger.add(file);



module.exports = logger;



    
            