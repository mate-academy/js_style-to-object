'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const initialString = sourceString.replace(/[\n]/g, '');
  const transformedToArr = initialString
    .split(';')
    .map(i => i.trim())
    .filter(i => i !== '');

  const resultObject = {};

  for (let i = 0; i < transformedToArr.length; i++) {
    const rule = transformedToArr[i].split(':');

    resultObject[rule[0].trim()] = rule[1].trim();
  }

  return resultObject;
}

module.exports = convertToObject;
