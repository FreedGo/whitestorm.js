'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _Light2 = require('../core/Light');

var _Light3 = _interopRequireDefault(_Light2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpotLight = function (_Light) {
  (0, _inherits3.default)(SpotLight, _Light);

  /**
   * Point light.
   *
   * @param {Object} params.light.color - Light color.
   * @param {Object} params.light.intensity - Light intensity.
   * @param {Object} params.light.distance - Light distance.
   * @param {Object} params.light.angle - Light angle.
   * @param {Object} params.light.exponent - Light exponent.
   * @param {Object} params.light.decay - Light decay.
   */

  function SpotLight() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, SpotLight);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SpotLight).call(this, params, 'spotlight'));

    _this.build(params);

    (0, _get3.default)((0, _getPrototypeOf2.default)(SpotLight.prototype), 'wrap', _this).call(_this);
    (0, _get3.default)((0, _getPrototypeOf2.default)(SpotLight.prototype), 'wrapShadow', _this).call(_this);
    return _this;
  }

  (0, _createClass3.default)(SpotLight, [{
    key: 'build',
    value: function build() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _scope = this;

      return new _promise2.default(function (resolve) {
        _scope.setNative(new THREE.SpotLight(params.light.color, params.light.intensity, params.light.distance, params.light.angle, params.light.exponent, params.light.decay));

        if (params.helper) _scope.helper = new THREE.SpotLightHelper(_scope.light);

        resolve();
      });
    }
  }]);
  return SpotLight;
}(_Light3.default);

exports.default = SpotLight;
//# sourceMappingURL=SpotLight.js.map