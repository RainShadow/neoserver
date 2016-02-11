
# SSH in

host: raspberrypi
IP: 192.168.1.6

user/pw: pi/raspberry

# Get node.js

```bash
$ wget http://nodejs.org/dist/latest/node-v5.6.0-linux-armv6l.tar.gz
$ tar -xvf node-v5.6.0-linux-armv6l.tar.gz
$ cd node-v5.6.0-linux-armv6l/
$ sudo cp -R * /usr/local
```

# Create a simple node script (server.js in ~/Public)

```javascript
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
```

# Run it

```bash
$ node ~/Public/server.js
```

## Background and foreground it

```bash
# start it in the background
$ node ~/Public/server.js &
```

```bash
# bring it to the foreground
$ jobs
[1]+  Running                 node /home/pi/Public/server.js &
$ fg %1

# <CTRL>-c will kill it
```

# Hit it from the browser

http://<ip address>:8080

  or

http://raspberrypi.local:8080
