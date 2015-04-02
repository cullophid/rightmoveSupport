'use strict';
var say = require('say');
var replies = [
  'Have you tried turning it off, and on again?',
  'Is it plugged in?',
  'Have you tried googling it?'
];

module.exports = function (req, res, next) {
  console.log('SPEAKING');
  say.speak('Alex', getRandomReply());
  return res.send('Speaking');
};
function getRandomReply () {
  var i = Math.round(Math.random() * (replies.length -1));
  return replies[i];
}
