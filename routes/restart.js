var fork = require('child_process').fork;

module.exports = function(router, route) {
  // restarts the server by forking a new server process then killing this one
  router.put(route, function(request, response) {
    fork(__dirname+'/../server.js');  // since this file is in the ./routes dir...
    process.exit(0);
  });
};
