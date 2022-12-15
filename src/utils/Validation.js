const { ZERO, ERROR, BRIDGE_SIZE } = require('./constants');

const Validation = {
  checkBlank(input) {
    if (input.length === ZERO) throw ERROR.mustNotBeBlank;
  },

  checkNumberType(input) {
    if (Number.isNaN(Number(input))) throw ERROR.mustBeNumber;
  },

  checkSizeRange(size) {
    if (size < BRIDGE_SIZE.min || size > BRIDGE_SIZE.max) {
      throw ERROR.mustBeInRange;
    }
  },
};

module.exports = Validation;
