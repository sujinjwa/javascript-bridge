const { ZERO, ERROR, BRIDGE_SIZE, UP, DOWN } = require('./constants');

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

  checkStringType(input) {
    if (!Number.isNaN(Number(input))) throw ERROR.mustBeString;
  },

  checkUpperCase(input) {
    if (input === UP.lowerCase || input === DOWN.lowerCase) {
      throw ERROR.mustBeUpperCase;
    }
  },

  checkValidDirection(input) {
    if (!(input === UP.upperCase || input === DOWN.upperCase)) {
      throw ERROR.mustBeValidDirection;
    }
  },
};

module.exports = Validation;
