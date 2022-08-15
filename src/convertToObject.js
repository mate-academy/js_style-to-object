'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arrOfString = sourceString
    .split('\n')
    .map(str => str.replace(/;/g, '').trim())
    .filter(str => (str !== ''));

  const obj = arrOfString.reduce((prev, str) => {
    const arr = str.split(':');
    const [property, value] = arr.map(i => i.trim());

    return {
      ...prev,
      [property]: value,
    };
  }, {});

  return obj;
}

module.exports = convertToObject;
