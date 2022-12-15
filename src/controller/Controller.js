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
      WinningBridge.validateSize(size);
    } catch (error) {
      OutputView.printMessage(error);
      this.inputBridgeSize();
    }

    this.makeWinningBride(size);
  }

  makeWinningBride(size) {
    this.winningBridge.make(size);
    // console.log(this.winningBridge.getWinningBridge());

    this.inputMovingDirection();
  }

  inputMovingDirection() {
    InputView.readMoving(this.validateMoving.bind(this));
  }

  validateMoving(direction) {
    try {
      BridgeGame.validateMoving(direction);
    } catch (error) {
      OutputView.printMessage(error);
      this.inputMovingDirection();
    }

    this.move(direction);
  }

  move(direction) {
    const CAN_MOVE = this.bridgeGame.canMove(direction, this.winningBridge);
    // console.log(CAN_MOVE);
  }
}

module.exports = Controller;
