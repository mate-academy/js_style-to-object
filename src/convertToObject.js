'use strict';

/**
 * Implement convertToObject function:
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssObj = {};
  const partObj = sourceString.split(';');

  partObj.forEach(part => {
    const key = part.split(':');

    if (key.length === 2) {
      const property = key[0].trim();
      const value = key[1].trim();

      cssObj[property] = value;
    }
  });

  return cssObj;
}
module.exports = convertToObject;
