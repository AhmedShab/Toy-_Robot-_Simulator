const board = () => {

  const width = 4;
  const height = 4;

  const isWithInBound = (position) => {

    return (position.x > width || position.x < 0) ? false : true;
  };

  const isHeightInBound = (position) => {

    return (position.y > height || position.y < 0) ? false : true;
  };

  return {
    isRobotOnBoard: (isPlaced) => {
      if (!isPlaced)
      throw new Error('The robot have not been placed on the board yet!');
    },

    isValidPosition: (position) => {
      if (!(isWithInBound(position) && isHeightInBound(position))) {
        throw new Error('The position of the robot is invalid!');
      }
    },

  };
};

module.exports = board;
