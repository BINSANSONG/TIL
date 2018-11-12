const home = require('./routes/home');
const movies = require('./routes/movies');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const config = require('config');
const express = require('express');
const app = express();

console.log(app.get('env'));
console.log(app.get('debug'));

app.set('view engine','pug');
app.set('views', './views'); //default라 다르게 쓰고싶을 때 활용

app.use(helmet());

if(process.env.NODE_ENV==='development'){//app.get('env')==='development' 얘는 NODE_ENV없으면 default로 dev로 인식
startupDebugger('Morgan을 실행해여');
app.use(morgan('dev'));
dbDebugger('DB connecting');
}
// console.log(config.get('DB.password'));

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(logger);
app.use(auth);
app.use(home);
app.use('/api/movies',movies);



// CRUD
// CREATE READ UPDATE DESTROY/DELETE
// POST   GET  PUT    DELETE



/* 비구조화
const { value, error } = Joi.validate(req.body,schema); 와
const value = Joi.validate(req.body,schema).value;
const error = Joi.validate(req.body,schema).error; 이 두 줄이 같은 기능을 한다

*/




const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})