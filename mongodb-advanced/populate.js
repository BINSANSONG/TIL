const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relation', { useNewUrlParser: true })
    .then(()=>console.log('connected'))
    .catch(error=>console.error(error.message));

const Author = mongoose.model('Author', new mongoose.Schema({
    name:{
        type:String,
        minlength: 2,
        required: true,
    },
    github: String,
}));

const Course = mongoose.model('Course',new mongoose.Schema({
    name: String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author',
    }
}));

async function createAuthor(name,github) {
    const author = new Author({ name, github, });
    try {
        const result = await author.save();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

async function createCourse(name,author) {
    const course = new Course({name,author});
    try {
        const result = await course.save();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
// createAuthor('bing','bing@github.com');
// createCourse('mongoose','5beb8bd16ba7de1f8c7c108f');

async function listCourse() {
    const courses = await Course
        .find()
        .populate('author')
        .select('name');

    console.log(courses);
}

listCourse();