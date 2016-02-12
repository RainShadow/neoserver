var fork = require('child_process').fork;

module.exports = function(request, response) {
  // fork('/Users/personal/Dropbox/projects/neoserver/server.js');
  fork('/home/pi/neoserver/server.js');
  process.exit(0);
};
