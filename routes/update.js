function cmd_exec(cmd, args, cb_data, cb_end) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var self = this;

  self.exit = 0;  // Send a cb to set 1 when cmd exits
  self.stdout = "";
  child.stdout.on('data', function (data) { cb_data(self, data); });
  child.stdout.on('end', function () { cb_end(self); });
}

module.exports = function(request, response) {
  foo = new cmd_exec('git', ['-C ~/neoserver', 'pull'],
  // foo = new cmd_exec('ls', ['-ralt'],
    function (obj, data) {
      obj.stdout += data.toString();
    },
    function (obj) {
      obj.exit = 1;
      response.end('Update says: '+obj.stdout);
    }
  );
};
