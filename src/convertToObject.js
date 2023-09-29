'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const copyOfSourceString = sourceString.replace(/\n/g, '').trim().split(' ');
  const copyOfSourceStringWithoutSpaces = copyOfSourceString
    .filter(item => item !== '')
    .join(' ').replace(/(\s+)(:)/g, '$2').replace(/\s*;\s*/g, ';')
    .split(';')
    .filter(item => item !== ' ' && item !== '');

  const result = copyOfSourceStringWithoutSpaces.map(item => {
    const parts = item.split(': ');

    return [parts[0], parts[1]];
  }).flat();

  const key = [];
  const value = [];
  const finalObjectResults = {};

  result.reduce((acc, val, i) => {
    i % 2 === 0 ? key.push(val) : value.push(val);
  }, 0);

  key.forEach((k, v) => {
    finalObjectResults[k] = value[v];
  });

  return finalObjectResults;
}

module.exports = convertToObject;
