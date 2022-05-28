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
  const resultObj = {};
  const oneLineArr = sourceString.split(';');

  oneLineArr.forEach(line => {
    const properties = line.split(':').map(property => property.trim(' '));

    if (properties[1]) {
      resultObj[properties[0]] = properties[1];
    }
  });

  return resultObj;
}

module.exports = convertToObject;
