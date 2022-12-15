const MESSAGE = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
  inputMovingDirection: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

const ERROR = Object.freeze({
  mustNotBeBlank: '[ERROR] 공백입니다. 값을 입력해주세요.\n',
  mustBeNumber: '[ERROR] 숫자로 입력해주세요.\n',
  mustBeInRange: '[ERROR] 다리의 길이는 3 ~ 20 이내여야 합니다.\n',
  mustBeString: '[ERROR] 이동할 칸은 U 또는 D의 문자로 입력해주세요.\n',
  mustBeUpperCase: '[ERROR] 대문자로 입력해주세요.\n',
  mustBeValidDirection: '[ERROR] 이동할 칸은 U 또는 D 여야 합니다.\n',
});

const BRIDGE_SIZE = Object.freeze({
  min: 3,
  max: 20,
});

const UP = Object.freeze({
  upperCase: 'U',
  lowerCase: 'u',
});

const DOWN = Object.freeze({
  upperCase: 'D',
  lowerCase: 'd',
});

const ZERO = Object.freeze(0);
const ONE = Object.freeze(1);
const BLANK = Object.freeze(' ');

const MOVE = Object.freeze({
  canGo: 'O',
  cantGo: 'X',
});

module.exports = {
  MESSAGE,
  ERROR,
  BRIDGE_SIZE,
  ZERO,
  ONE,
  BLANK,
  UP,
  DOWN,
  MOVE,
};
