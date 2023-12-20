'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const splitedOrigin = sourceString.split(';');

  const trimmed = splitedOrigin.map(item => {
    const splited = item.split(':');

    return splited.map(i => i.trim());
  });

  const withoutEmptyStrings = trimmed.filter((item) => item.length === 2);

  const resultObj = {};

  for (let i = 0; i < withoutEmptyStrings.length; i++) {
    resultObj[withoutEmptyStrings[i][0]] = withoutEmptyStrings[i][1];
  }

  return resultObj;
}

module.exports = convertToObject;
