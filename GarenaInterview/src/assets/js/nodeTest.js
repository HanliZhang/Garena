var http = require("http")
var server = http.createServer(function(req,res){
    if(req.url!=="/favicon.ico"){
        res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost:63342"});
        res.write("hello,this is from AJAX")
    }
    res.end();

});
server.listen(8888,"localhost",function(){
    console.log("Begin listening...");

});