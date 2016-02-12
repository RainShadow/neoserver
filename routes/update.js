var spawnSync = require('child_process').spawnSync;

module.exports = function(request, response) {
  var ret = spawnSync('git', ['-C', '/Users/personal/Dropbox/projects/neoserver', 'pull']);
  // var ret = spawnSync('git', ['-C', '/home/pi/neoserver', 'pull']);
  response.end('Update says: '+ret.stdout+' '+ret.stderr);
};
