const app = require('./src/app');
const config = require('./src/config/config');
const logger = require('./src/config/logger');


let server;

server = app.listen(config.port , () => logger.info("App is listening in port " + config.port));

 function exitHandler() {
    if(server) {
        server.close(() => {
         logger.info("Server closed");
            process.exit(1);
        })
    }
 }

 const unexpectedErrorHandler = (error) => {
   logger.error(error);
    exitHandler();
 }

 process.on('uncaughtException' , unexpectedErrorHandler);
 process.on('unhandledRejection' , unexpectedErrorHandler);

 process.on('SIGTERM' , () => {
   logger.info("SIGTERM received");
    if(server)
           server.close();
 });

 process.on('SIGINT', () => {
   logger.info("SIGINT received ")
     if(server) 
          server.close();
 })