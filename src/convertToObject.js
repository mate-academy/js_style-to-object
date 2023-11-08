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
  const propsDividedToStrings = sourceString.split(';');

  const resultObject = {};

  propsDividedToStrings.forEach((prop) => {
    if (prop.includes(': ')) {
      const propTemp = prop.split(': ').map((proper) => proper.trim());

      resultObject[propTemp[0]] = propTemp[1];
    }
  });

  return resultObject;
}

module.exports = convertToObject;
