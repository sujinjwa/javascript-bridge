const Validation = require('../utils/Validation');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');

class WinningBridge {
  #winningBridge = [];

  validateSize(size) {
    Validation.checkBlank(size);
    Validation.checkNumberType(size);
    Validation.checkSizeRange(size);
  }

  make(size) {
    this.#winningBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  canMove(direction) {}
}

module.exports = WinningBridge;
