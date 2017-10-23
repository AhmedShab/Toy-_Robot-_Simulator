const robotFactory = require('./robot');
const boardFactory = require('./board');

let board = boardFactory();
let robot = robotFactory();

const parser = () => {
  const evalPlace = (placeCommand) => {

    let x = parseInt(placeCommand[0]);
    let y = parseInt(placeCommand[1]);
    let direction = placeCommand[2];

    try {
      board.isValidPosition({ x, y });
      robot.setIsPlaced(true);
      robot.place(x, y, direction);
    } catch (err) {
      console.log(err.message);
    }
  };

  const evalMove = () => {
    try {
      board.isValidPosition(robot.state());
      robot.move(robot.getDirection());
    } catch (err) {
      console.log(err.message);
    }
  };

  const evalLeft = () => {
    const newPosition = robot.left(robot.getDirection());
    robot.setDirection(newPosition);
  };

  const evalRight = () => {
    const newPosition = robot.right(robot.getDirection());
    robot.setDirection(newPosition);
  };

  const evalReport = () => {
    console.log(robot.report());
  };

  return {
    eval: (commands) => {

      const allCommands = {
        PLACE: 'PLACE',
        MOVE: 'MOVE',
        LEFT: 'LEFT',
        RIGHT: 'RIGHT',
        REPORT: 'REPORT',
      };

      commands = commands.split(' ');

      switch (commands[0]) {
        case allCommands.PLACE:

          let placeCommand = commands.slice(1, 2).toString().split(',');
          evalPlace(placeCommand);

          break;

        case allCommands.MOVE:

          try {
            board.isRobotOnBoard(robot.getIsPlaced());
            evalMove();
          } catch (err) {
            console.log(err.message);
          }

          break;

        case allCommands.LEFT:
          try {
            board.isRobotOnBoard(robot.getIsPlaced());
            evalLeft();
          } catch (err) {
            console.log(err.message);
          }

          break;

        case allCommands.RIGHT:
          try {
            board.isRobotOnBoard(robot.getIsPlaced());
            evalRight();
          } catch (err) {
            console.log(err.message);
          }

          break;

        case allCommands.REPORT:

          try {
            board.isRobotOnBoard(robot.getIsPlaced());
            evalReport();
          } catch (err) {
            console.log(err.message);
          }

          break;

        default:
          return 'Unknown commands';
      }
    },

  };
};

module.exports = parser;
