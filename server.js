// node's native http handler
var http = require('http');
// something for handling routes.  Could use express but it's BIG
var Router = require('node-simple-router');
var router = Router();

var PORT=8080;

// the default route
router.get('/', function(request, response) {
  router.render_template_file('public/index.html', {}, function(exists, html) {
    response.end(html);
  });
});

//
// other routes defined in separate files
//

// a dev page from which one can update and restart the server
require(__dirname+'/routes/dev')(router, '/dev');
// a simple git API
require(__dirname+'/routes/git')(router, '/git');
// a very simple API for restarting the server
require(__dirname+'/routes/restart')(router, '/restart');

var server = http.createServer(router);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
