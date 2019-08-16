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
  const cssObject = {};
  const sourceArray = sourceString
    .replace(/\n/g, '')
    .split(/:|;/g);

  for (let i = 0; i < sourceArray.length - 1; i += 2) {
    cssObject[sourceArray[i].trim()] = sourceArray[i + 1].trim();
  }
  return cssObject;
}

module.exports = convertToObject;
