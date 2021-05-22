import React from 'react'
import { Paper, Typography, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import useStyles from './styles.js';

function Lists(props) {

    const classes = useStyles();
    return (
        <>
            <Paper className={classes.Paper}>
                <Typography className={classes.Date} variant="body2">{props.date}</Typography>
                <Typography className={classes.Typography} variant="h6">{props.name} List</Typography>
                <Button variant="outlined" color="secondary">
                    See List
                </Button>
                <Button aria-label="Delete">
                    <Delete className={classes.DeleteButton} color="secondary" />
                </Button>
            </Paper>
        </>
    );
}

export default Lists;