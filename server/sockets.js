module.exports = function (socketio) {

    socketio.on('connection', function (socket) { 

        console.log("A user connected !!!");

        socket.on('init', function (data) {
            if (data && data.key) {
                var room = data.key;
                console.log(room , "joined");
                    socket.join(room);
            }
        });

        socket.on('disconnect', function () {
            console.log('user disconnected', socket.rooms);
        });
    });
}