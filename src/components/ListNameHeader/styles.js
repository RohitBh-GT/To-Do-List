import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    TitleBox:{
        textAlign:'center',
        backgroundColor:'purple',
        color:'white',
        fontWeight:'bold',
        border:'2px solid black',
        borderRadius:'6px',
        padding:'5px',
        margin:'2rem'
    },
    Container:{
        width:'50%',
        margin:'auto'
    },
    TimeStamp:{
        color:'yellow',
        
    }
}));

export default useStyle;