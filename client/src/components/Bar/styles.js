import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
    Container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#1976d2',
    },
    ExitButton: {
      float: 'left',
    },
    CurrentlyChatting: {
      fontSize: '20px',
      color: 'lightgreen',
      letterSpacing: '2px',
    },
    OnlineUsers: {
      fontSize: '15px',
      color: 'white'
    },
    OnlineIcon: {
      color: 'lightgreen',
    },
    ExitButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    Room: {
      color: 'white',
      fontStyle: 'italic',
      fontSize: '13px',
    },
}));
