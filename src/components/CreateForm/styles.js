import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    Form:{
        margin:'auto',
        display:'flex',
        flexDirection:'row',
        marginTop:'6rem',
        alignItems:'center',
        justifyContent:'center'
    },
    Button:{
        backgroundColor:'#33dc33',
        color:'white'
    }
}));

export default useStyles;