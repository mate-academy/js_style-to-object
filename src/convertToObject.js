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
  const objCSS = {};
  const properties = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property !== '');

  properties.forEach(property => {
    const keyValue = property.split(':');
    const key = keyValue[0].trim();
    const value = keyValue[1].trim();

    objCSS[key] = value;
  });

  return objCSS;
}

module.exports = convertToObject;
