'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedStr = sourceString.split(';').map(i => i.split(':'));
  const trimStr = splitedStr.map(x => x.map(i => i.trim()));
  const withoutBlank = trimStr.filter(x => x.length > 1);
  const result = withoutBlank.reduce((prev, [prop, val]) => ({
    ...prev, [prop]: val,
  }), {});

  return result;
}

module.exports = convertToObject;
