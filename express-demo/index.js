const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('hphp');
})

app.get('/api',(req,res)=>{
    const data = {
        ceo: 'john',
        director:'neo',
        naver:'naver',
    };
    res.send(data);
})

app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
});

// /api/post/2018?q=js&sort=name&reccom=true
app.get('/api/post/:year',(req,res)=>{
    res.send(req.query);
})

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));