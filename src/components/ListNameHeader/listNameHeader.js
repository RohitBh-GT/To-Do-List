import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';

function ListNameHeader(props){

    const [list,setList] = useState({
        name:'',
        timeStamp:''
    });

    const classes = useStyles();
   const newList = useSelector((state) => props.listId ? state.lists.find((l)=>l._id === props.listId):null);

   useEffect(() => {
       if(newList) setList({
           name:newList.name,
           timeStamp:newList.timeStamp
       });
   },[newList]);

   return (
       <>
       <div className={classes.Container}>
        <div className={classes.TitleBox}>
            <Typography variant="h5">{list.name} List</Typography>
            <Typography className={classes.TimeStamp} variant="body2">{list.timeStamp}</Typography>
        </div>
        </div>
       </>
   )
}

export default ListNameHeader;