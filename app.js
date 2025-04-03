const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const path = require("path");

const http = require("http");
const socketIO = require("socket.io");


const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", function (socket){
    console.log("connected from the web browser")
})

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
server.listen(3000);
