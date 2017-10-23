const assert = require('assert');
const fileReader = require('../fileReader');

const { readFile } = fileReader();

describe('Testing file reader', () => {
  describe('Read file from a text file', () => {
    it('should return true when reading was successful', () => {

      const expacted = true;

      assert.ok(expacted, readFile('./test/test1.txt'));
    });
  });
});
