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
  const stylesArr = sourceString
    .split(';')
    .map(elem => elem
      .replace('\n', '')
      .split(':')
      .map(property => property.trim())
    );

  const obj = stylesArr.reduce((result, [key, value]) => {
    if (key) {
      result[key] = value;
    }

    return result;
  }, {});

  return obj;
}

module.exports = convertToObject;
