const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const Controller = require('../src/controller/Controller');
const BridgeMaker = require('../src/BridgeMaker');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('예외 테스트', () => {
    runException(['a']);
  });

  test('기능 테스트 : 이동할 수 없는 칸 선택한 이후 재시도를 선택하면 게임 재기한다', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 0, 1, 1, 1]);
    mockQuestions(['6', 'U', 'D', 'U', 'R', 'D', 'D', 'R', 'U', 'U', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   |   | O | O | O ]',
      '[   | O | O |   |   |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 3',
    ]);
    expectBridgeOrder(
      log,
      '[ O |   |   | O | O | O ]',
      '[   | O | O |   |   |   ]'
    );
  });

  test('기능 테스트 : 이동할 수 없는 칸 선택한 이후 종료를 선택하면 게임을 종료한다', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
    mockQuestions(['20', 'D', 'U', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   | O |   ]',
      '[ O |   | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[   | O |   ]', '[ O |   | X ]');
  });

  test('예외 테스트 : 이동할 칸으로 잘못된 값을 입력받은 경우 에러 메시지 출력 후 그 부분부터 다시 입력 받는다', () => {
    runException([15, 'a', 'u', 123]);
  });

  test('예외 테스트 : 재시작 또는 종료 여부에 대해 잘못된 값을 입력받은 경우 에러 메시지 출력 후 그 부분부터 다시 입력 받는다', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 1, 1]);
    mockQuestions(['3', 'D', 'r', 123, 'quit', 'R', 'U', 'U', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ERROR] 소문자가 아닌 대문자를 입력해주세요.',
      '최종 게임 결과',
      '[ O | O | O ]',
      '[   |   |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
  });

  test('checkSuccess 메서드 기능 테스트 : 이동할 수 없는 칸을 선택한 경우 inputGameCommand 메서드가 호출된다', () => {
    const controller = new Controller();
    controller.inputGameCommand = jest.fn();

    const inputGameCommand = controller.inputGameCommand;
    controller.checkSuccess(false);

    expect(inputGameCommand).toBeCalledTimes(1);
  });
});
