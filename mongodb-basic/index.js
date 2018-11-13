const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hello-mongo',{ useNewUrlParser: true })
    .then(()=>console.log('connected to mongodb'))
    .catch(error=>console.error(error.message));

    // Available schema datatypes 
//   : String, Number, Date, Buffer, Boolean, ObjectID, Array

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now},
    isPublished: Boolean,
});

const Course = mongoose.model('Course',courseSchema);

// CRUD CREATE
async function createCourse(){
    const course = new Course({
        name: 'DApp',
        author: 'john',
        tags: ['Ethereum', 'Blockchain', 'DApp'],
        isPublished: false,
    });
    
    try {
        const result = await course.save();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
    // course.save()
    //     .then(result=>console.log(result))
    //     .catch(error=>console.log(error));
}


async function getCourses(){
    const courses = await Course
    //.find({price: {$gt:10}})
        .find({isPublished:true})
        .limit(10)
        .sort({name:-1})
        .select({name:1,tags:1}) //select('name tags')
    console.log(courses);
}

getCourses();