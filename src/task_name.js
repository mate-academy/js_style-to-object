const assert = require('assert');
const splitInteger = require('./splitInteger');

describe('splitInteger', function () {
  it('should return a single element when numberOfParts is 1', function () {
    assert.deepStrictEqual(splitInteger(8, 1), [8]);
  });

  it('should split the value evenly when divisible perfectly', function () {
    assert.deepStrictEqual(splitInteger(6, 2), [3, 3]);
  });

  it('should handle cases where the value does not divide evenly', function () {
    assert.deepStrictEqual(splitInteger(17, 4), [4, 4, 4, 5]);
  });

  describe('when splitting with various parts', function () {
    it('return a sorted array where max-min difference <= 1', function () {
      assert.deepStrictEqual(splitInteger(32, 6), [5, 5, 5, 5, 6, 6]);
    });

    it('should return multiple equal elements when divisible', function () {
      assert.deepStrictEqual(splitInteger(9, 3), [3, 3, 3]);
    });

    it('should handle small values with a large number of parts', function () {
      assert.deepStrictEqual(splitInteger(5, 4), [1, 1, 1, 2]);
    });

    it('should work with large numbers and multiple parts', function () {
      assert.deepStrictEqual(
        splitInteger(100, 9),
        [11, 11, 11, 11, 11, 11, 11, 12, 12],
      );
    });
  });
});
