var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Tax Bombshell Calculator a</h1>'
    );
res.end(<h2>msg</h2>)
}).listen(process.env.PORT);