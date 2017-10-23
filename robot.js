const robot = () => {

  // Initialising the private variables
  let _isPlaced = false;
  let _x = -1;
  let _y = -1;

  let newPosition = (type, oldPosition) => {
    const callback = {
      NORTH: {
        left: () => {
          return 'WEST';
        },

        right: () => {
          return 'EAST';
        },
      },

      SOUTH: {
        left: () => {
          return 'EAST';
        },

        right: () => {
          return 'WEST';
        },
      },

      EAST: {
        left: () => {
          return 'NORTH';
        },

        right: () => {
          return 'SOUTH';
        },
      },

      WEST: {
        left: () => {
          return 'SOUTH';
        },

        right: () => {
          return 'NORTH';
        },
      },
    };

    return callback[type][oldPosition]();
  };

  const robotAction = (type) => {

    const callback = {
      NORTH: () => {
        return _y === 4 ? 4 : _y++;
      },

      SOUTH: () => {
        return _y === 0 ? 0 : _y--;
      },

      EAST: () => {
        return _x === 4 ? 4 : _x++;
      },

      WEST: () => {
        return _x === 0 ? 0 : _x--;
      },

      default: () => {
        return console.log('Unknown action');
      },
    };
    return (callback[type] || callback['default'])();

  };

  return {

    setIsPlaced: (isPlaced) => {
      _isPlaced = isPlaced;
    },

    getIsPlaced: () => {
      return _isPlaced;
    },

    getDirection: () => {
      return _direction;
    },

    setDirection: (direction) => {
      _direction = direction;
    },

    place: (x, y, direction) => {

      _x = x;
      _y = y;
      _direction = direction;
    },

    move: (direction) => {

      robotAction(direction);
    },

    left: (direction) => {
      const LEFT = 'left';
      return newPosition(direction, LEFT);
    },

    right: (direction) => {
      const RIGHT = 'right';
      return newPosition(direction, RIGHT);
    },

    report: () => {
      return `Output ${_x}, ${_y}, ${_direction}`;
    },

    state: () => {
      return {
        x: _x,
        y: _y,
      };
    },
  };
};

module.exports = robot;
