/* eslint-disable no-console */


var app = require("express")();
// var server = require("http").Server(app);
var io = require("socket.io")(5050);

// server.listen(5050);
// WARNING: app.listen(80) will NOT work here!

app.get("/", function(req, res) {
  // res.sendFile(__dirname + '/index.html');
  res.send("hello server");
});

var message = [{ name: "系統", message: "歡迎使用 VUE 聊天室" }];

/**
 * 說明:
 * io 代表對大家的連線
 * socket 代表對個人的連線
 */

io.on("connection", function(socket) {
  console.log("cocket連線", socket.id);

  // 歷史訊息
  socket.emit("allMessage", message);

  socket.on("message", obj => {
    console.log(`${obj.name}說: ${obj.message}`);
    message.push(obj);
    io.emit("newMessage", obj);
  });
});
