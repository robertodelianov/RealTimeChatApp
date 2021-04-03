import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( () => ({
  UserTitle: {
    display: 'block',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  RightTextBox: {
    position: 'relative',
    float: 'right',
    backgroundColor: '#1976d2',
    color: 'white',
    fontSize: '30px',
    borderRadius: '20px',
    padding: '20px',
  },
  GuestTitle: {
    display: 'block',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  LeftTextBox: {
    position: 'relative',
    float: 'left',
    backgroundColor: '#bcc4d1',
    color: 'black',
    fontSize: '30px',
    borderRadius: '20px',
    padding: '20px'
  },
}));
