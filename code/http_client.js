var http = require('http');

var options = {
    port : '8000',
    hostname : "localhost",
    path : "/zlib_file.js"
};

function handleResponse(response) {
    var serverData = "";
    response.on("data", function(data){
        serverData += data;
    });
    response.on("end", function(){
        console.log(serverData);
    });
}

http.request(options, function(response){
    handleResponse(response);
}).end();