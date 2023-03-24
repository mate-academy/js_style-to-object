'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example)
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map(elem => elem.trim())
    .filter(elem => elem !== '')
    .map(style => style.split(':').map(elem => elem.trim()))
    .forEach(elem => (stylesObject[elem[0]] = elem[1]));

  return stylesObject;
}

module.exports = convertToObject;
