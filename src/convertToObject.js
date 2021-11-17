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
  const arr = sourceString.trim().split(';');
  const cssObject = {};

  arr.forEach(function(element) {
    const tempArr = element.split(':');

    cssObject[tempArr[0].trim()] = String(tempArr[1]).trim();
  });
  delete cssObject[''];

  return cssObject;
}

module.exports = convertToObject;
