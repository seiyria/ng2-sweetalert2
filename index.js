'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SweetAlertService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sweetalert = require('sweetalert2');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

require('sweetalert2/dist/sweetalert2.min.css');

var _lodash = require('lodash.assign');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SweetAlertService = exports.SweetAlertService = function () {
  function SweetAlertService() {
    _classCallCheck(this, SweetAlertService);
  }

  _createClass(SweetAlertService, [{
    key: 'swal',
    value: function swal() {
      return _sweetalert2.default.apply(undefined, arguments);
    }
  }, {
    key: 'prompt',
    value: function prompt(options) {
      var baseOptions = {
        showCancelButton: true,
        confirmButtonText: 'Submit',
        input: 'text'
      };
      return (0, _sweetalert2.default)((0, _lodash2.default)(baseOptions, options));
    }
  }, {
    key: 'confirm',
    value: function confirm(options) {
      var baseOptions = {
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        type: 'warning'
      };
      return (0, _sweetalert2.default)((0, _lodash2.default)(baseOptions, options));
    }
  }, {
    key: 'alert',
    value: function alert(options) {
      var baseOptions = {
        confirmButtonText: 'OK',
        type: 'info'
      };
      return (0, _sweetalert2.default)((0, _lodash2.default)(baseOptions, options));
    }
  }, {
    key: 'question',
    value: function question(options) {
      return this.alert((0, _lodash2.default)({ type: 'question' }, options));
    }
  }, {
    key: 'success',
    value: function success(options) {
      return this.alert((0, _lodash2.default)({ type: 'success' }, options));
    }
  }, {
    key: 'error',
    value: function error(options) {
      return this.alert((0, _lodash2.default)({ type: 'error' }, options));
    }
  }, {
    key: 'warn',
    value: function warn(options) {
      return this.alert((0, _lodash2.default)({ type: 'warn' }, options));
    }
  }, {
    key: 'info',
    value: function info(options) {
      return this.alert((0, _lodash2.default)({ type: 'info' }, options));
    }
  }]);

  return SweetAlertService;
}();
