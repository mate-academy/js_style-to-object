'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const inpArr = sourceString
    .split(':')
    .map(x => x.trim())
    .join(':')
    .split(';')
    .map(x => x.trim())
    .filter(x => x !== '');

  inpArr.forEach(el => {
    const tempString = el.split(':');

    obj[tempString[0]] = tempString[1];
  });

  return obj;
}

module.exports = convertToObject;
