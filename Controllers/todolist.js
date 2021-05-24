import mongoose from 'mongoose';
import AllLists from '../Models/lists.js';

export const getLists = async(req,res)=>{
    try {
        const list = await AllLists.find();
        res.status(200).json(list);
    } catch (error) {
        res.status(404).json(error);
    }
}    

export const createList = async(req,res)=>{
    const list = req.body;
    const newList = new AllLists(list); 
    try {
        await newList.save();
        res.status(201).json(newList);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const deleteList = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send('No post founde with this Id'));
    }
    
    const deleteList = await AllLists.findByIdAndRemove(id);
    res.json(deleteList);
}

export const findParticularList = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send('No post founde with this Id'));
    }
    const findByIdList = await AllLists.findById(id);
    res.json(findByIdList);
}

export const updateList = async(req,res) => {
    var _id = req.params.id;
    const newItem = req.body;

    if(!(mongoose.Types.ObjectId.isValid(_id))){
        return ( res.status(404).send('No post found with this Id'));
    } 
    
      const updatedPost = await AllLists.findByIdAndUpdate(_id,{...newItem,_id},{new:true});
      res.json(updatedPost);
}