import mongoose from 'mongoose';
import { TodoListSchema } from './list.js';

const ListsSchema = new mongoose.Schema({
    name:String,
    works:[TodoListSchema],
    timeStamp:{
        type:Date,
        default:new Date()
    }
});

const allLists = mongoose.model('AllLists',ListsSchema);

export default allLists;