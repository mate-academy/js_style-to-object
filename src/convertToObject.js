/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS propertys are keys
 * and values are the values of related CSS propertys (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .replace(/\s+/g, ' ')
    .split(';')
    .map(property => property.trim())
    .filter(Boolean)
    .forEach(property => {
      const [ propertyName, propertyValue ] = property.split(': ');

      styles[propertyName.trim()] = propertyValue;
    });

  return styles;
}

module.exports = convertToObject;
