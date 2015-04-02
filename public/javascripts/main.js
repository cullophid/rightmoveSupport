(function () {
  'use strict';
  var replies = [
    'Have you tried turning it off, and on again?',
    'Is it plugged in?',
    'Have you tried googling it?'
  ];

  setup();

  function setup () {
    $('#speak').on('submit', speak);
  }

  function speak () {
    var player = document.getElementById('player');
    player.src = getRandomReplyUrl();
    player.load();
    player.play();
    return false;
  }
  function getRandomReplyUrl () {
    var i = Math.round(Math.random() * (replies.length -1));
    return 'http://tts-api.com/tts.mp3?q=' + encodeURIComponent(replies[i]);
  }

})();
