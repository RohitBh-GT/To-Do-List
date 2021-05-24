import React, { useEffect } from 'react'
import { Paper, Typography, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import useStyles from './styles.js';
import { deleteSinglelist } from '../../actions/lists.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Lists({list}) {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{

    });

    var today = new Date(list.timeStamp);
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }; 
    var day = today.toLocaleDateString("en-US",options);

    function deleteIt(){
        dispatch(deleteSinglelist(list._id));
    }

    const toPath = `/lists/${list._id}`;

    return (
        <>
            <Paper className={classes.Paper}>
                <Typography className={classes.Date} variant="body2">{day}</Typography>
                <Typography className={classes.Typography} variant="h6">{list.name} List</Typography>
                <Button component={Link} to={toPath} variant="outlined" color="secondary">
                    See List
                </Button>
                <Button onClick={deleteIt} aria-label="Delete">
                    <Delete className={classes.DeleteButton}  color="secondary" />
                </Button>
            </Paper>
        </>
    );
}

export default Lists;