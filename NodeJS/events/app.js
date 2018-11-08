const EventEmitter = require('events');
const Logger = require('./logger')
const logger = new Logger();
logger.on('logMessage', (arg) =>{
    console.log('listener 호출',arg);
});
logger.on('logging', (arg) =>{
    console.log(arg.data);
});

logger.log('This is message!');
