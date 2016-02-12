# Intro

A web server for configuring RainShadow's Raspberry Pi-based LED lighting system

# Development Setup

After SHH'ing in, all commands below are run on the Raspberry Pi.

## SSH in

host: raspberrypi
IP: 192.168.1.6  (this is mine, your milage may vary)

user/pw: pi/raspberry

## Get node.js

```bash
$ wget http://nodejs.org/dist/latest/node-v5.6.0-linux-armv6l.tar.gz
$ tar -xvf node-v5.6.0-linux-armv6l.tar.gz
$ cd node-v5.6.0-linux-armv6l/
$ sudo cp -R * /usr/local
```

## Get the repo

```bash
$ cd ~
$ git clone https://github.com/RainShadow/neoserver.git
```

## Get neoserver's node dependencies
```bash
$ sudo npm install
```

## Run it

```bash
$ node ~/neoserver/server.js
```

### Background and foreground it

```bash
# start it in the background
$ node ~/neoserver/server.js &
```

```bash
# bring it to the foreground
$ jobs
[1]+  Running                 node /home/pi/neoserver/server.js &
$ fg %1

# <CTRL>-c will kill it
```

# Hit the server from a browser

(Obviously not on the Raspberry but on some machine that can "see" it)

http://[the ip address from SSH'ing]:8080

  or

http://raspberrypi.local:8080
