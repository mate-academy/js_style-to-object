'use strict';

const sum = require('./sum');

test('add two numbers 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});
