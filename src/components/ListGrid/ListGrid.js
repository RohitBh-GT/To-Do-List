import React, { useEffect } from 'react';
import { CircularProgress,Grid} from '@material-ui/core';
import useStyles from './styles.js';
import Lists from '../Lists/Lists.js';
import { useSelector } from 'react-redux'; 

function ListGrid(){

     const lists = useSelector((state)=>state.lists);
     console.log(lists);

     useEffect(()=>{

     });

    const classes = useStyles();
    return(
      <>
      {!lists.length ? <CircularProgress /> :
         (<Grid className={classes.Grid} container alignItems='stretch' spacing={3}>
             {lists.map((list)=>(
                  <Grid key={list._id} item xs={12} sm={6} md={4} lg={3} >
                    <Lists list={list} />
                  </Grid> 
             ))}
          </Grid>   
         )
      }
      </>
    );
}

export default ListGrid;