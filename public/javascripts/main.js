(function () {
  'use strict';
  setup();
  function setup () {
    $('#speak').on('submit', speak);
  }
  function speak () {
    var message = $('[name=message]').val();
    $.post('/speak', {message: message}, function (res) {
      console.log(res);
    });
    return false; // to prevent for submit!
  }
})();
