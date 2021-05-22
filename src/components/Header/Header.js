import React from 'react';
import { Container,AppBar,Typography,Toolbar } from '@material-ui/core';
import useStyles from './style.js';


function Header(){
    const classes = useStyles();
    return(
        <Container className={classes.Container} maxWidth="lg">
            <AppBar className={classes.AppBar} position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h3">
                        Your To-Do Lists
                    </Typography>
                </Toolbar> 
            </AppBar>
        </Container>
    )
}

export default Header;