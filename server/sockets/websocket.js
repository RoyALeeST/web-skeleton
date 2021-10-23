const socketIO = require('socket.io');
const server = require('http').createServer();
server.listen(4444, () => {
    console.log("Socket IO is lestineng on port 4444");
});

module.exports = socketIO(server);