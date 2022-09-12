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
  const newSourceArray = sourceString.split(';')
    .map(string => string.split(':').map(style => style.trim()));

  const sourseObject = {};

  newSourceArray.forEach(item => {
    if (item[0] !== '') {
      sourseObject[item[0]] = item[1];
    }
  });

  return sourseObject;
}

module.exports = convertToObject;
