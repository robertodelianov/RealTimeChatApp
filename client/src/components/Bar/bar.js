import React from 'react';
import { Paper, IconButton, Typography, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Bar = ({ getOut, users, room }) => {
  const classes = useStyles();

  return(
    <Paper className={classes.Container}>
      <Link to={'/'}>
          <Button variant='contained' color='secondary' onClick={getOut} fullWidth>
            <ExitToAppIcon fontSize='large' />
          </Button>
      </Link>
      <Button className={classes.Room}>Welcome to room, {room}</Button>
      <Button className={classes.CurrentlyChatting}>CURRENTLY ONLINE</Button>
      {users
        ? users.map( (info) => (
        <Button key={info.id} className={classes.OnlineUsers}><FaceIcon className={classes.OnlineIcon}/>{info.nickname}</Button>
      ))
        : null }
    </Paper>
  )
};

export default Bar;
