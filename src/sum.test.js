'use strict';
/* global require, describe, test, expect */

const sum = require('./sum');

describe('sum', () => {
  test('should return a sum of positive numbers', () => {
    expect(sum(1, 2))
      .toBe(3);
  });

  test('should return a sum of negative numbers', () => {
    expect(sum(-1, -2))
      .toBe(-3);
  });
});
