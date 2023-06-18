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
  const cssProperties = {};

  const keysAndProperties = sourceString
    .split(';')
    .map(item => item.split(':'));

  keysAndProperties
    .forEach(keyAndProperty => {
      if (keyAndProperty[1] !== undefined) {
        keyAndProperty[0] = keyAndProperty[0].trim();
        keyAndProperty[1] = keyAndProperty[1].trim();
        cssProperties[keyAndProperty[0]] = keyAndProperty[1];
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
