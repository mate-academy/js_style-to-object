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
  const sourceInArray = sourceString
    .split(';')
    .map(styles => styles.trim())
    .filter(styles => styles !== '')
    .map(styles => styles.split(':'));

  const stylesInObject = {};

  sourceInArray.map(([ property, value ]) => {
    stylesInObject[property.trim()] = value.trim();
  });

  return stylesInObject;
}

module.exports = convertToObject;
