import React from 'react';
import { Container,Grid} from '@material-ui/core';
import useStyles from './styles.js';
import Lists from '../Lists/Lists.js' 

function ListGrid(){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }; 
    var day = today.toLocaleDateString("en-US",options);

    const classes = useStyles();
    return(
      <>
         <Grid className={classes.Grid} container alignItems='stretch' spacing="3">
             <Grid item xs={12} sm={6} md={4} lg={3} >
                  <Lists name="Shopping" date={day} />
             </Grid>   
             <Grid item xs={12} sm={6} md={4} lg={3} >
                  <Lists name="Shopping" date={day} />
             </Grid>   
             <Grid item xs={12} sm={6} md={4} lg={3} >
                  <Lists name="Shopping" date={day} />
             </Grid>   
             <Grid item xs={12} sm={6} md={4} lg={3} >
                  <Lists name="Shopping" date={day} />
             </Grid>    
         </Grid>
      </>
    );
}

export default ListGrid;