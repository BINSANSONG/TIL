const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hello-mongo',{ useNewUrlParser: true })
    .then(()=>console.log('connected to mongodb'))
    .catch(error=>console.error(error.message));

    // Available schema datatypes 
//   : String, Number, Date, Buffer, Boolean, ObjectID, Array

const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: String,
    tags: {
        type:Array,
        //custom Validata
        validate:{
            validator:function(v){return v&&v.length > 0},
            message: 'You have to input tags',
        }
    },
    date: { type: Date, default: Date.now},
    isPublished: Boolean,
});


const Course = mongoose.model('Course',courseSchema);

// CRUD CREATE

// CREATE
async function createCourse(){
    const course = new Course({
        name: 'nodenode',
        author: 'binginb',
        tags: [],
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
createCourse();

// READ
async function getCourses(){
    const courses = await Course
    //.find({price: {$gt:10}})
        .find({isPublished:true})
        .limit(10)
        .sort({name:-1})
        .select({name:1,tags:1}) //select('name tags')
    console.log(courses);
}

// UPDATE
// 1. Query find first -> change -> save
async function updateCourse(id){
    const course = await Course.findById(id);
    if(!course) return;

    course.author = 'binsan';
    course.tags=['song','bin','san'];

    const result = await course.save();
    console.log(result);
}
// updateCourse('5bea63caa4f6c50e58ab7d90');
// 2. Update first
async function updateCourses(){
    const result = await Course.updateMany({isPublished:true},{
        $set: {
            author:'bing',
        }
    });
    console.log(result);
}
// updateCourses();

// Delete
async function removeCourse(id){
    const result = await Course.deleteOne({_id:id});
    console.log(result);
}

// removeCourse('5bea63caa4f6c50e58ab7d90');