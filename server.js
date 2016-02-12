// node's native http handler
var http = require('http');
// something for handling routes.  Could use express but it's BIG
var Router = require('node-simple-router');
var router = Router();

var PORT=8080;

// the default route
router.get('/', function(request, response) {
  response.end("Hello, James!");
});

//
// other routes.  processing logic in separate files
//

// update server's code to the latest out of GitHub
router.get('/update', require('./routes/update'));
// hit this url to restart the server
router.get('/restart', require('./routes/restart'));

var server = http.createServer(router);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
