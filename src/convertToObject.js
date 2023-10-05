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
  const newString = sourceString.replace(/\s+/g, ' ').trim();
  const styleArray = newString.split(';');
  const styleObject = {};

  for (let i = 0; i < styleArray.length; i++) {
    const propName = styleArray[i].trim().split(':');

    if (propName.length === 2 && propName[0].trim()) {
      const property = propName[0].trim();
      const value = propName[1].trim();

      styleObject[property] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
