import mongoose from 'mongoose';

const ListsSchema = new mongoose.Schema({
    name:String,
    works:[String],
    timeStamp:{
        type:Date,
        default:new Date()
    }
});

const allLists = mongoose.model('AllLists',ListsSchema);

export default allLists;