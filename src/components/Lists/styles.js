import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    Paper:{
        border:'1px solid black',
        borderRadius:'10px',
        backgroundColor: '#fae07a',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/connected.png")',
        padding:'1rem',
    },
    Typography:{
        color:'black',
        fontWeight:'500',
        paddingBottom:'0.8rem'
    },
    DeleteButton:{
        position:'absolute',
        float:'right'
    },
    PaperCreate:{
        border:'1px solid black',
        borderRadius:'10px',
        backgroundColor:'#7afa93',
        padding:'1rem'
    },
    Date:{
        fontSize:'0.7rem',
        color:'grey'
    }
}));

export default useStyles;