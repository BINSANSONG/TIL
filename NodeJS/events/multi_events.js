const EventEmitter = require('events');

class Emitter extends EventEmitter{};

emitter = new Emitter();

emitter.on('knock', ()=>{
    console.log('누구세요?');
});
emitter.on('knock', () =>{
    console.log('저리가세요!');
});
emitter.once('knock1', ()=>{
    console.log('한번만말해');
});

emitter.emit('knock');
emitter.emit('knock1');
emitter.emit('knock1');

emitter.removeAllListeners();

emitter.emit('knock');
