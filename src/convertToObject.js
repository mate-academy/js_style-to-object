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
  const sourceInObject = {};

  sourceString
    .split(';')
    .forEach(element => {
      const elementSplit = element.split(':');

      if (elementSplit[1]) {
        sourceInObject[elementSplit[0].trim()] = elementSplit[1].trim();
      }
    });

  return sourceInObject;
}

module.exports = convertToObject;
