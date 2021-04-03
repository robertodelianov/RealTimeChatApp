import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  },
  FormContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  FormElements: {
    '& .MuiInputBase-root':{
      height: 100,
    },
    height: 100,
    fontSize: '30px',
    marginBottom: '10px',
    borderRadius: '30px',
  },
  Title: {
    display: 'block',
    textAlign: 'center',
    fontSize: '80px',
    fontWeight: 'bold',
    letterSpacing: '10px',
  }
}));
