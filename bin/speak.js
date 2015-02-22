var speak = require('../routes/speak');
var req = {
  body : {
    message : 'Test Message'
  }
};
var res = {
  status : function () {},
  send : function () {}
};
speak(req, res);
