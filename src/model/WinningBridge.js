const Validation = require('../utils/Validation');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');

class WinningBridge {
  #upperBridge = [];
  #lowerBridge = [];

  validateSize(size) {
    Validation.checkBlank(size);
    Validation.checkNumberType(size);
    Validation.checkSizeRange(size);
  }

  make(size) {
    BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
}

module.exports = WinningBridge;
