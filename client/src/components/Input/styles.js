import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
    Container: {
      backgroundColor: '#1976d2',
    },
    FormElements: {
      '& .MuiInputBase-root':{
        height: 100,
      },
      backgroundColor: 'white',
      marginLeft: '20px',
    },
    ChatButton: {
      height: 100,
      backgroundColor: '#81c784',
      marginLeft: '30px',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '25px',
      color: 'white',
    }
}));
