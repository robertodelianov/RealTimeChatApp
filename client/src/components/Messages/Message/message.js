import React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';

import useStyles from './styles';

const Message = ({ nickname, name, message }) => {
  const classes = useStyles();

  return(
    <Grid container>
    { nickname === name
      ? (
        <Grid item xs={12}>
          <Typography className={classes.UserTitle}>{name}</Typography>
          <Typography className={classes.RightTextBox}>{message}</Typography>
        </Grid>
      )
      : <Grid item xs={12}>
        <Typography className={classes.GuestTitle}>{name}</Typography>
        <Typography className={classes.LeftTextBox}>{message}</Typography>
      </Grid>
    }
    </Grid>
  )
}

export default Message;
