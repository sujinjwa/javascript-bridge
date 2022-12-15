const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeGame = require('../model/BridgeGame');
const WinningBridge = require('../model/WinningBridge');
const { MESSAGE } = require('../utils/constants');

class Controller {
  constructor() {
    this.winningBridge = new WinningBridge();
    this.bridgeGame = new BridgeGame();
  }
  init() {
    OutputView.printMessage(MESSAGE.gameStart);

    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.validateSize.bind(this));
  }

  validateSize(size) {
    try {
      this.winningBridge.validateSize(size);
    } catch (error) {
      OutputView.printMessage(error);
      this.inputBridgeSize();
    }

    this.makeWinningBride(size);
  }

  makeWinningBride(size) {
    this.winningBridge.make(size);

    this.inputMovingDirection();
  }

  inputMovingDirection() {
    InputView.readMoving(this.validateMoving.bind(this));
  }

  validateMoving(direction) {
    try {
      this.bridgeGame.validateMoving(direction);
    } catch (error) {
      OutputView.printMessage(error);
      this.inputMovingDirection();
    }
  }
}

module.exports = Controller;
