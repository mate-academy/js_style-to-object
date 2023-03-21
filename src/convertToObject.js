/* eslint-disable max-len */
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
  const stylesObject = {};

  sourceString
    .split(';')
    .forEach(element => {
      const propertyLine = element.toString();
      const propertyKey = propertyLine.slice(0, propertyLine.indexOf(':'));
      const propertyValue = propertyLine.slice(propertyLine.indexOf(':') + 1);

      stylesObject[propertyKey.trim()] = propertyValue.trim();
    });

  for (const key in stylesObject) {
    if (key === '') {
      delete stylesObject[key];
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
