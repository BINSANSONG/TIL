function router(app) {
    app.get('/',(req,res)=>{
        res.render('index.html');
    });
    app.get('/main',(req,res)=>{
        res.render('main.html');
    })
}
module.exports = router;