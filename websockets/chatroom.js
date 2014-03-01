// broadcast incoming message to all clients
function receiveMessage(data, socket) {
	console.log(data);
    socket.broadcast.emit('message', data);
}

