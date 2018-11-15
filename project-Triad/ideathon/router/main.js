function router(app) {
    app.get('/',(req,res)=>{
        res.render('index.html');
    });
    app.get('/1',(req,res)=>{
        res.render('index1.html');
    })
    app.get('/2',(req,res)=>{
        res.render('index2.html');
    })
}
module.exports = router;