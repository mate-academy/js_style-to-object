'use strict';

/*
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesContainer = {};

  sourceString
    .split(';')
    .forEach(element => {
      const property = element.split(':');

      if (property.length !== 1) {
        stylesContainer[property[0].trim()] = property[1].trim();
      }
    });

  return stylesContainer;
}

module.exports = convertToObject;
