import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme)=>({
    Container:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'2rem',
        border:'2px solid black',
        borderRadius:'6px',
        width:'60%',
        background:'white'
    },
    Input:{
        margin:'8px',
        color:'red',
        width:'88%'
    },
    addButton:{
        color:'white',
        backgroundColor:'green',
        margin:'9px'
    },
    top:{
        display:'flex',
        flexDirection:'row'
    },
    list:{
        width: '100%',
        maxWidth: '360',
        backgroundColor: theme.palette.background.paper,
    }
}));

export default useStyle;