'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const elements = sourceString.split(';');
  const values = elements.filter((el) => el.length > 4);
  const clearValues = values.map((element) => {
    const arr = [];

    arr[0] = element.split(': ')[0].trim();
    arr[1] = element.split(': ')[1].trim();

    return arr;
  });

  const result = clearValues.reduce(function properties(acc, cur) {
    acc[cur[0]] = cur[1];

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
