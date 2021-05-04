'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  sourceString
    .split(';')
    .map(elem => elem.trim())
    .filter(elem => elem !== '')
    .map(
      elem => elem.split(':')
        .map(el => el.trim())
    )
    .forEach(function(property) {
      cssProperties[property[0]] = property[1];
    });

  return cssProperties;
}

module.exports = convertToObject;
