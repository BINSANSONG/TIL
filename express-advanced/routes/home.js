const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('index',{
        title: 'Happy!',
        greeting: 'Hello!',
    })
});

router.get('/:name',(req, res)=>{
    res.send(`Hi, ${req.params.name}`);
});

module.exports = router;