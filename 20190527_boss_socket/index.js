var fs = require("fs")
var options = {
	port: 5050
}

var http = require("http").createServer()
http.listen(options.port)
var io = require('socket.io')(http)

console.log('server socket '+options.port)

io.on('connection',(socket)=>{
	console.log('a user connection')
})





// var app = require('express')()
// var port = 4000
// app.listen(port,()=>{
// 	console.log('api listen on 4000')
// })

// app.get('',(req, res)=>{
// 	res.send('hello')
// })

// io.on('get_user',(req, res)=>{
// 	res.send('this user id is 66')
// })