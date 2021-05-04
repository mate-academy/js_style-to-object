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
  const modifiedData = sourceString.split(':')
    .join(';').split(';').map(x => x.trim());

  for (let i = 0; i < modifiedData.length; i += 2) {
    if (modifiedData[i] !== '') {
      cssObject[modifiedData[i]] = modifiedData[i + 1];
    }
  }

  return cssObject;
}

module.exports = convertToObject;
