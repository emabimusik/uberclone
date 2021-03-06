var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var index = require ("./routes/index");
var bookings = require("./routes/bookings");
//http://localhost:3000/api/driverLocation
var driverLocationSocket = require("./routes/driverLocation");
var driverLocation = require("./routes/driverLocation");
var app = express();
var port = 3000;
var socket_io = require("socket.io");
var io = socket_io();
app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// route
app.use("/",index);
app.use("/api",bookings);
//app.use("/api",driverLocationSocket);
app.use("/api",driverLocation);

 
io.listen(app.listen(port, function() {
    console.log("server runing in port",port);
})); 
app.io = io.on("connection",function(socket){
    console.log("Socket connected: " + socket.id);
    
});
app.io = io.on("disconnect",()=>{
    console.log("Socket Disconnected: ");
    
});