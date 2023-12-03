'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string wit
 * h styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 *related CSS properties (see an exampl in
  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString.split(';').filter(Boolean);

  const stylesObject = {};

  for (const styleDeclaration of styleArr) {
    const [property, value] = styleDeclaration.trim().split(':');

    if (property && value) {
      stylesObject[property.trim()] = value.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
