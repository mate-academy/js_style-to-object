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
  const styleObject = {};
  const sourceArray = sourceString.slice(1).split(';');

  for (let i = 0; i < sourceArray.length; i++) {
    const innerArray = sourceArray[i].trim().split(': ');
    styleObject[innerArray[0]] = innerArray[1];
  }

  return styleObject;
}

module.exports = convertToObject;
