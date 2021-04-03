import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Join from './components/Join/join';
import Chat from './components/Chat/chat';

const App = () => {
  const [ nickname, setNickname ] = useState('');
  const [ room, setRoom ] = useState('');

  return(
    <Router>
        <Route path='/' exact component={ () => <Join nickname={nickname} setNickname={setNickname} setRoom={setRoom} /> } />
        <Route path='/chat' component={ () => <Chat nickname={nickname} room={room} setNickname={setNickname} setRoom={setRoom} /> } />
    </Router>
  )
};

export default App;
