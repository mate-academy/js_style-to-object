'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styleArr = sourceString.split(';');

  styleArr.forEach(element => {
    const trim = element.trim();
    const firstIndex = trim.indexOf(':');
    const key = trim.slice(0, firstIndex).trim();
    const value = trim.slice(firstIndex + 1).trim();

    if (key !== '') {
      result[key] = value.toString();
    }
  });

  return result;
}

module.exports = convertToObject;
