'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
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
