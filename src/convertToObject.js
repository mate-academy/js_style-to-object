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
  const result = {};
  const sourceArray = sourceString.split(';').map(el => {
    return el.split(':').map(str => {
      return str.trim();
    });
  });

  sourceArray.forEach(el => {
    if (el.length === 2) {
      result[el[0]] = el[1];
    }
  });

  return result;
}

module.exports = convertToObject;
