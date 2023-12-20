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

  const strParts = sourceString.split(';');

  strParts.forEach(element => {
    const [prop, value] = element.split(':').map(part => part.trim());

    if (prop && value) {
      resultObj[prop] = value;
    }
  });

  return resultObj;
}

module.exports = convertToObject;
