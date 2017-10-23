const assert = require('assert');
const robot = require('../robot');
const board = require('../board');

const { place, report, state, move, getDirection, left, right } = robot();
const { isValidPosition } = board();

describe('Testing robot actions', () => {
  describe('A valid placement on the table', () => {
    it('should return 0, 0, NORTH as it was placed', () => {
      const expacted = 'Output 0, 0, NORTH';
      place(0, 0, 'NORTH');

      assert.equal(expacted, report());
    });
  });

  describe('An invalid placement on the table', () => {
    it('should throws an error since we are placing the robot in the wrong position', () => {
      place(0, 5, 'NORTH');

      assert.ifError(isValidPosition(state()));
    });
  });

  describe('Move the robot North', () => {
    it('should return a new position from 1,0 to 0, 4', () => {
      const expacted = 'Output 1, 4, NORTH';
      place(1, 0, 'NORTH');
      for (let i = 0; i < 4; i++) {
        move(getDirection());
      }

      assert.equal(expacted, report());
    });
  });

  describe('Move the robot to the left', () => {
    it('should return a new direction from North to West', () => {
      const expacted = 'WEST';
      place(0, 0, 'NORTH');

      assert.equal(expacted, left(getDirection()));
    });

    describe('Move the robot to the righ', () => {
      it('should return a new direction from West to North', () => {
        const expacted = 'NORTH';
        place(0, 0, 'WEST');

        assert.equal(expacted, right(getDirection()));
      });
    });

  });
});
