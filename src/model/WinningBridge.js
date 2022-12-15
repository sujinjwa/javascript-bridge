const Validation = require('../utils/Validation');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const { UP, DOWN } = require('../utils/constants');

class WinningBridge {
  #winningBridge = [];

  static validateSize(size) {
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

  isSameDirection(direction, currentPosition) {
    return this.#winningBridge[currentPosition] === direction;
  }

  getWinningBridge() {
    return this.#winningBridge;
  }

  isSameLength(currentBridge) {
    return this.#winningBridge.length === currentBridge.length;
  }
}

module.exports = WinningBridge;
