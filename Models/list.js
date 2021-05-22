import mongoose from 'mongoose';

export const TodoListSchema = new mongoose.Schema({
    work:String
});

const TodoList = mongoose.model('TodoList',TodoListSchema);

export default TodoList;