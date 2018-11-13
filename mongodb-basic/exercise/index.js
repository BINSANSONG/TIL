const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exercise-basic',{ useNewUrlParser: true })
    .then(() => console.log('db connected'))
    .catch(error => console.error(error.message));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price: Number,
});


const Course = mongoose.model('Course',courseSchema);


async function ex1() {
    const courses = await Course
        .find({isPublished:true, tags:'backend'})
        .sort({name:1})
        .select('name author');

    console.log(courses);
}

async function ex2(){
    const courses = await Course
        .find({isPublished:true})
        .find({tags:{$in:['backend','frontend']}})
        .sort({price:-1})
        .select('name price tags');
    
    console.log(courses);
}

async function ex3(){
    const courses = await Course
        .find()
        .or({price:{$gte:15}})
        .or({name:{$regex: /.*js.*/i }})
    
    console.log(courses);
}

// ex1();
// ex2();
ex3();