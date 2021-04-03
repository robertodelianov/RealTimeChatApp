const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');

const router = require('./routes.js');
const { addUser, removeUser, usersInRoom } = require('./controllers.js');
const { addTypingUser, removeTypingUser, TypingInRoom } = require('./typing.js');

const app = express();
app.use(cors());
app.use(router);
const server = http.createServer(app);
const io = socketIo(server, ({
    cors: {
        header: '*'
    }
}));

io.on('connection', (socket) => {
    console.log('We have a new user');

    socket.on('join', ({ nickname, room }) => {
        addUser({ id: socket.id, nickname, room });
        socket.join(room)

        io.to(room).emit('roomInfo', ({ users: usersInRoom(room) }))
    })

    socket.on('sendMessage', ({ message, room, nickname }) => {
        io.to(room).emit('message', ({ nickname, message }))
    })

    socket.on('typing', ({ nickname, room }) => {
        addTypingUser({ id: socket.id, nickname, room })
        io.to(room).emit('usersTyping', ({ typingUsers: TypingInRoom(room)}) )
    })

    socket.on('noType', ({ room }) => {
        removeTypingUser(socket.id);
        io.to(room).emit('usersTyping', ({ typingUsers: TypingInRoom(room)}) )
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        console.log('User has been disconnected !');

        io.to(user.room).emit('roomInfo', ({ users: usersInRoom(user.room) }))
    })                                                                                         
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port: ${PORT} !`));