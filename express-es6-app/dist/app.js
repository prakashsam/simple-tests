'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(config) {
    _classCallCheck(this, App);

    this.port = config.port;
    this.express = (0, _express2.default)();
  }

  _createClass(App, [{
    key: 'start',
    value: function start() {
      this.express.listen(this.port, function () {
        console.log('Example app listening on port ' + this.port);
      }.bind(this));
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      this.express.get('/', function (req, res) {
        res.send('Hello World!');
      });
    }
  }]);

  return App;
}();

exports.default = App;