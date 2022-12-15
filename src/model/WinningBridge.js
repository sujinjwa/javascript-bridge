const Validation = require('../utils/Validation');

class WinningBridge {
  validateSize(size) {
    Validation.checkBlank(size);
    Validation.checkNumberType(size);
    Validation.checkSizeRange(size);
  }
}

module.exports = WinningBridge;
