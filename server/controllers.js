const users = [];

const addUser = (user) => {
    users.push(user);
};

const removeUser = (id) => {
    const index = users.findIndex( (user) => user.id === id );
    if(index !== -1){
        return users.splice(index,1)[0]
    }
};

const usersInRoom = (room) => {
   const roomUsers = users.filter( (user) => user.room === room)

   return roomUsers;
};

module.exports = { addUser, removeUser, usersInRoom };