module.exports = (server, app) => {
  app.io.on("connection", (socket) => {
    socket.on("init", (data) => {
      socket.join(data.room);
      console.log("Join a " + data.room);
      socket.to(data.room).emit("joinRoom", data);
    });

    socket.on("disconnect", () => {
      console.log("클라이언트 연결 해제");
      clearInterval(socket.interval); // 연결 해제 시에 interval을 지워줍니다.
    });

    socket.on("error", (error) => {
      console.error(error);
    });

    socket.on("send message", (data) => {
      app.io.to(data.room).emit("send message", data);
    });
  });

  

  return (req, res, next) => next();
};
