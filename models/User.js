import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    likes : {
        type : Array,
        required : true
    },
    workouts : {
        type : Array,
        required : true
    }




})

export default mongoose.model('user',userSchema);