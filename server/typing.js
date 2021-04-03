const users = [];

const addTypingUser = (typingUser) => {
    const index = users.findIndex( (user) => user.id === typingUser.id)
    if(index === -1){
        users.push(typingUser)
    };
};

const removeTypingUser = (id) => {
    const index = users.findIndex( (user) => user.id === id );
    if(index !== -1){
        return users.splice(index,1)[0]
    }
};

const TypingInRoom = (room) => {
    const typingUsers = users.filter( (user) => user.room === room)
 
    return typingUsers;
 };

module.exports = { addTypingUser, removeTypingUser, TypingInRoom };