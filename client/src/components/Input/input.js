import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Grid } from '@material-ui/core';

import useStyles from './styles';

const Input = ({ message, setMessage, submitMessage }) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitMessage();
    setMessage('');
  }

  return(
    <Paper className={classes.Container}>
      <form onSubmit={handleSubmit}>
        <Grid container maxWidth='xl'>
          <Grid item xs={3}>
          <TextField className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} fullWidth color='primary' multiline='true' variant='filled' label='type a message' value={message} onChange={ (e) => setMessage(e.target.value)} />
          </Grid>
          <Grid item xs={8}>
          <Button className={classes.ChatButton} type='submit' variant='contained' color='secondary' fullWidth size='large'>CHAT</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
};

export default Input;
