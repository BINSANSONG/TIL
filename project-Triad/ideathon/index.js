
const express = require('express');
const app = express();
const router = require('./router/main')(app);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening ${port} port`));
