import React,{ useState } from 'react';
import { TextField,Button } from '@material-ui/core';
import { Create } from '@material-ui/icons';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { createNewList } from '../../actions/lists.js';

function CreateForm(){
    const [listName,setListName] = useState({
        name:'',
        works:[]
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    function setList(event){
        setListName({...listName,name:event.target.value});
        event.preventDefault();
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(createNewList(listName));
        setListName({
            name:'',
            work:[]
        });
    }

   return (
       <>
        <form className={classes.Form} autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TextField name={listName.name} value={listName.name} onChange={setList} variant="outlined" label="Create new list" />
            <Button type="submit" variant="contained" className={classes.Button} >Create <Create /></Button>
        </form>
       </>
   )
}

export default CreateForm;