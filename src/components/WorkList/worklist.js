import React, { useEffect, useState } from 'react';
import { Container, TextField, Button,List,ListItem,ListItemText,Checkbox,Typography } from '@material-ui/core';
import { Add,Delete } from '@material-ui/icons';
import useStyle from './style.js';
import { useDispatch,useSelector } from 'react-redux';
import { updateList } from '../../actions/lists.js';


function WorkList(props) {

    const [lists,setList] = useState({
        name:'',
        timeStamp:'',
        works:[]
    });

    const newList = useSelector((state) => props.listId ? state.lists.find((l)=>l._id === props.listId):null);

    const [item, setItem] = useState('');
    const [color, setColor] = useState('false');
    const dispatch = useDispatch();

    const classes = useStyle();

    useEffect(()=>{
        if(newList) {setList(newList);}
     },[newList]);

    function setYellow() {
        setColor(!color);
    }

    function changeItem(event) {
        setItem(event.target.value);
    }

    function addItem(event){
        event.preventDefault();
        lists.works=[...lists.works,item];
        console.log(lists);
        dispatch(updateList(props.listId,lists));
        setItem('');
    }

    function deleteIt(index){
    //    var array = lists.works.filter((item,id)=>{
    //        return index !== id;  
    //     });
    //     lists.works = array;
    //     dispatch(updateList(props.listId,lists));
    }

    return (
        <>
            <Container className={classes.Container} >
                <div className={classes.top} >
                    <TextField onChange={changeItem} className={classes.Input} variant="standard" label="Enter new Item" name={item} value={item} />
                    <Button onClick={addItem} style={{ backgroundColor: color ? 'green' : 'orange' }} onMouseOver={setYellow} onMouseOut={setYellow} className={classes.addButton} ><Add fontSize="large" /></Button>
                </div>
                { !lists.works.length ? <Typography variant="h4">List is empty </Typography>  : (
                <div className={classes.bottom}>
                    <List className={classes.list}>
                        {
                         lists.works.map((work,index)=>(
                           <ListItem key={index} id={index}>
                            <ListItemText primary={work} />
                            <Button onClick={deleteIt(index)}>Done</Button>
                         </ListItem>
                        ))}
                    </List>
                </div>
                )}
            </Container>
        </>
    );
}

export default WorkList;