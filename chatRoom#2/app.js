/**
 * Created by Cang.Le on 2/23/2017.
 */


var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(3000);
console.log('server is running');


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

//Connections
io.sockets.on('connection', function(socket) {
    //verify connections
    connections.push(socket);
    console.log('Connected: ' + connections.length + ' sockets connected');

    //verify DisConnections
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    //send message
    socket.on('send message', function(data) {
        console.log(data);
        io.sockets.emit('new message', {msg: data, user: socket.username});
        //io.sockets.emit('new message', data, {user: socket.username});
    });

    //send new username
    socket.on('submit nickName', function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users', users);
    }










});
