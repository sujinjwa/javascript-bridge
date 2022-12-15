const MESSAGE = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
  inputMovingDirection: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  inputGameCommand:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  gameResult: '최종 게임 결과\n',
});

const SUCCESS_RESULT = (result) =>
  `게임 성공 여부: ${result ? '성공' : '실패'}`;

const RETRY_COUNT = (count) => `총 시도한 횟수: ${count}`;

const ERROR = Object.freeze({
  mustNotBeBlank: '[ERROR] 공백입니다. 값을 입력해주세요.\n',
  mustBeNumber: '[ERROR] 숫자로 입력해주세요.\n',
  mustBeInRange: '[ERROR] 다리의 길이는 3 ~ 20 이내여야 합니다.\n',
  mustBeString: '[ERROR] 문자로 입력해주세요.\n',
  mustBeUpperCase: '[ERROR] 대문자로 입력해주세요.\n',
  mustBeValidDirection: '[ERROR] 이동할 칸은 U 또는 D 여야 합니다.\n',
  mustBeValidCommand:
    '[ERROR] 재시도 또는 종료 명령어는 R 또는 Q 여야 합니다.\n',
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

const RETRY = Object.freeze({
  upperCase: 'R',
  lowerCase: 'r',
});

const QUIT = Object.freeze({
  upperCase: 'Q',
  lowerCase: 'q',
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
  SUCCESS_RESULT,
  RETRY_COUNT,
  ZERO,
  ONE,
  BLANK,
  UP,
  DOWN,
  RETRY,
  QUIT,
  MOVE,
};
