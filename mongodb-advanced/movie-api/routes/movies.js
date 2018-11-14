const {Movie,validateMovie} = require('../models/movie');
const {Genre} = require('../models/genre');
const express = require('express');
const router = express.Router();

/* Route */
router.get('/', async (req,res)=>{
    const movies = await Movie.find().sort('title');
    res.send(movies);
});

router.post('/', async (req,res)=>{
    const error = validateMovie(req.body).error;
    if(error) return res.status(400).send(error.message);

    const genre = await Genre.findById(req.body.genreId);
    
    let movie = new Movie(req.body);
    movie = await movie.save();
    res.send(movie);
})

router.get('/:id',async (req,res)=>{
    const movie = await Movie.findById(req.params.id);
    if(!movie) return res.status(404).send('not found');
    res.send(movie);
})

router.patch('/:id',async (req,res)=>{
    const {error} = validateMovie(req.body);
    if(error) return res.status(400).send(error.message);

    const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(movie);
})

router.delete('/:id',async (req,res)=>{
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if(!movie) return res.status(404).send('not found');
    res.send(movie);
})

module.exports = router;