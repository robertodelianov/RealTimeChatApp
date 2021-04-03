import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Join = ({ nickname, setNickname, setRoom, location }) => {
  const classes = useStyles();
  const [ name, setName ] = useState('');
  const [ myRoom, setMyRoom ] = useState('');

  const handleJoin = () => {
    setNickname(name);
    setRoom(myRoom);
  }

  return(
    <Grid container className={classes.Container}>
        <Grid item xs={12} md={8} lg={4} className={classes.FormContainer}>
            <Typography className={classes.Title}>JOIN</Typography>
            <TextField className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} variant='filled' label='nickname' onChange={ (e) => setName(e.target.value)} />
            <TextField className={classes.FormElements} InputLabelProps={{ style: {fontSize: 30}}} inputProps={{ style: {fontSize: 30}}} variant='filled' label='room' onChange={ (e) => setMyRoom(e.target.value)} />
            { (name !== '' && myRoom !== '')
            ? <Link to={'/chat'}>
              <Button className={classes.FormElements} variant='contained' color='primary' fullWidth onClick={handleJoin}>JOIN</Button>
            </Link>
            : <Link to={'/'}>
              <Button className={classes.FormElements} variant='contained' color='primary' fullWidth>JOIN</Button>
            </Link>
            }
        </Grid>
    </Grid>
  )
};

export default Join;
