import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
   Container:{
       margin:'2rem'
   }, 
   AppBar:{
       backgroundColor:'orange',
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center'
   },
   title:{
       color:'white',
       fontFamily:'cursive'
   }
}));

export default useStyles;