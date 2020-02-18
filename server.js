var io = require('socket.io').listen(3000);


io.sockets.on("connection", arranque);

/*
var http = require('http');
const express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));
const server =http.createServer(app);
app.set('port', 3001);

server.listen(app.get('port'), function(){


    console.log('servidor')
})

*/
function arranque(socket)
{
    socket.on("datos_cliente", regresar_datos);

}

function regresar_datos(data)
{
    io.sockets.emit("datos_servidor", data);
}

/*
try {
    var webSocket = io.connect('http:/localhost');

} catch (e) {
    console.log(e);
}
*/



console.log('Servidor iniciado ');
