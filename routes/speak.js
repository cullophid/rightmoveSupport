'use strict';
var say = require('say');
var gpio = require('rpi-gpio');
var exec = require('exec');
var querystring = require('querystring');
var LED1 = 12;
var LED2 = 16;
gpio.setup(LED1, gpio.DIR_OUT);
gpio.setup(LED2, gpio.DIR_OUT);

module.exports = function (req, res, next) {
  var message = req.body.message;
  console.log('SPEAK');
  console.log(message);
  if (!message) {
    return res
      .status(400)
      .send('No message');
  }
  // lightsOn();
  exec(['mplayer', 'http://tts-api.com/tts.mp3?' + querystring.stringify({q:message})], function () {
    // lightsOff()  ;
});
  return res.send('Speaking');
};

function lightsOn () {
  gpio.write(LED1, true);
  gpio.write(LED2, true);
}

function lightsOff () {
  gpio.write(LED1, true);
  gpio.write(LED2, true);
}
