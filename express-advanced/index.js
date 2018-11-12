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



app.get('/',(req, res)=>{
    res.render('index',{
        title: 'Happy!',
        greeting: 'Hello!',
    })
});

const data = [
    { id: 1, title: 'no' },
    { id: 2, title: 'nono' },
    { id: 3, title: 'nonono' },
]

// CRUD
// CREATE READ UPDATE DESTROY/DELETE
// POST   GET  PUT    DELETE


app.get('/api/movies',(req,res)=>{
    res.send(data);
});

app.get('/api/movies/:id',(req,res)=>{
    const movie = data.find((element)=>{
        return element.id==req.params.id;
    });
    if(!movie) res.status(404).send('없'); //약간 개발자 밈
    res.send(movie);
});

app.post('/api/movies/',(req,res)=>{
    const schema = { //받을 입력이 ~~할 것이다
        title: Joi.string().min(2).required(),
    }

    const result = Joi.validate(req.body, schema);

    if (result.error){
        return res.status(400).send(result.error.message);
    }

    const movie = {
        id: data.length +1,
        title: req.body.title
    };
    data.push(movie);
    res.send(movie);
});

app.put('/api/movies/:id',(req,res)=>{
    
    const schema = { //받을 입력이 ~~할 것이다
        title: Joi.string().min(2).required(),
    }

    const result = Joi.validate(req.body, schema);

    if (result.error){
        return res.status(400).send(result.error.message);
    }
    let updated = null;
    data.forEach((element)=>{
        if(element.id==req.params.id){
            element.title = req.body.title;
            updated = element;
        }
    })
    
    if(!updated){
        return res.status(404).send('없는 애를 수정 요청하셨어여')
    }
    res.send(updated);
    

});

app.delete('/api/movies/:id',(req,res)=>{
    let deleted = null;
    data.forEach((element,index)=>{
        if(element.id==req.params.id){
            deleted = element;
            data.splice(index,1);
        }
    })
    if(!deleted){
        return res.status(404).send('없는 애를 삭제 요청하셨어여');
    }
    res.send(deleted);
});
/* 비구조화
const { value, error } = Joi.validate(req.body,schema); 와
const value = Joi.validate(req.body,schema).value;
const error = Joi.validate(req.body,schema).error; 이 두 줄이 같은 기능을 한다

*/




const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})