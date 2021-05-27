import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import todoListRoute from './Routes/todolist.js';
import dotenv from 'dotenv';

dotenv.config();
const app =express();

app.use(bodyParser.urlencoded({limit:'30mb',extended:'true'}));
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(cors());

app.use('/lists',todoListRoute);

app.get('/',(req,res)=>{
    res.send('Welcome To to-do list React app');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true })
         .then(app.listen(PORT,()=>{
             console.log(`Database successfully connected to port ${PORT}`);
         }))
         .catch((err)=>{
             console.log(err);
         });
mongoose.set('useFindAndModify',false);         