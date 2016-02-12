// node's native http handler
var http = require('http');
// something for handling routes.  Could use express but it's BIG
var Router = require('node-simple-router');
var router = Router();

var PORT=8080;

// add our (we are 'app') cwd
global.app = global.app || {};  // add ourselves (if we're not already there)
global.app.cwd = process.cwd();

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
require(global.app.cwd+'/routes/dev')(router, '/dev');
// a simple git API
require(global.app.cwd+'/routes/git')(router, '/git');
// a very simple API for restarting the server
require(global.app.cwd+'/routes/restart')(router, '/restart');

var server = http.createServer(router);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
