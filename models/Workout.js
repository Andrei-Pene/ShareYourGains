import mongoose from 'mongoose';


const Workout = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    workoutWalkthrough : {
        type : String,
        required : true
    },
    imgUrl : {
        type : String,
        required : true
    },
    createdDate : {
        type : Date,
        default : Date.now
    }



});

export default mongoose.model('workout',Workout);