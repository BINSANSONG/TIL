const genres = require('./routes/genres');
const movies = require('./routes/movies');
const mongoose = require('mongoose');

const express = require('express');
const app = express();

/* connect DB */
mongoose.connect('mongodb://localhost/video-api',{ useNewUrlParser: true })
    .then(()=>console.log('connected'))
    .catch(error=>console.error(error.message));
/* Middlewares */
app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/movies',movies);

/* Server */
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));