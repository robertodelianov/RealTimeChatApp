import React from 'react';
import { Typography, Container } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';

import useStyles from './styles';
import Message from './Message/message';

const Messages = ({ nickname, messages, typingUsers }) => {
  const classes = useStyles();

  return(
    <ScrollToBottom className={classes.Container}>
      <Container maxWidth='lg'>
    { messages
      ? messages.map( (info) => <Message nickname={nickname} name={info.nickname} message={info.message} /> )
      : null
    }
    {
      typingUsers
      ? typingUsers.map( (info) => <Typography className={classes.Typing}>{info.nickname} is Typing!</Typography>)
      : null
    }
      </Container>
    </ScrollToBottom>
  )
};

export default Messages;
