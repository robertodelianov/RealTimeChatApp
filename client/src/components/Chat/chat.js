import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Link, Redirect } from 'react-router-dom';
import { IconButton, Container, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';
import Bar from '../Bar/bar';
import Input from '../Input/input';
import Messages from '../Messages/messages';

  let socket;
  const CONNECTION_URL = 'http://localhost:5000';

const Chat = ({ nickname, room, setNickname, setRoom }) => {
  const classes = useStyles();
  const [ users, setUsers ] = useState('');
  const [ typingUsers, setTypingUsers ] = useState([]);
  const [ message, setMessage ] = useState('');
  const [ messages, setMessages ] = useState([]);

  useEffect( () => {
    if(nickname !== ''){
    socket = io(CONNECTION_URL)

    socket.emit('join', { nickname, room })

    }
  },[nickname, room]);

  useEffect( () => {
    if(nickname !== ''){
    socket.on('roomInfo', ({ users }) => {
      setUsers(users);
    })

    socket.on('message', ( message ) => {
      setMessages( (messages) => [ ...messages, message] );
    })

    socket.on('usersTyping', (users) => {
      setTypingUsers(users.typingUsers);
    })

    }
  }, []);

  useEffect( () => {
    if(nickname !== '' && message !== ''){
      socket.emit('typing', {nickname, room})
    }else if(nickname !== '' && message === ''){
      socket.emit('noType', { room })
    }
  }, [message])

  const submitMessage = () => {
    socket.emit('sendMessage', { message, room, nickname })
  }

  const getOut = () => {
    socket.disconnect();
  }

  return(
    <div>
      { (nickname === '')
      ? <Redirect to={'/'}></Redirect>
      : null
      }
      <Grid container>
        <Grid item xs={12} className={classes.Container}>
          <Bar getOut={getOut} users={users} room={room} />
          <Messages nickname={nickname} messages={messages} typingUsers={typingUsers} />
          <Input message={message} setMessage={setMessage} submitMessage={submitMessage} />
        </Grid>
      </Grid>
    </div>
  )
};

export default Chat;
