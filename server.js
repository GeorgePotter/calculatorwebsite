var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Tax Bombshell Calculator</h1>');
    var msg = "Tories suck"
    res.end(<h2>msg</h2>)
}).listen(process.env.PORT);