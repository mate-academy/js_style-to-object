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
  const arrOfProperties = sourceString.split(';')
    .map(el => el.trim()).filter(el => el !== '')
    .map(el => el.split(':').map(subel => subel.trim()));

  const objectOfProperties = Object.fromEntries(arrOfProperties);

  return objectOfProperties;
}

module.exports = convertToObject;
