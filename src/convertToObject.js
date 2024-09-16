'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssArr = sourceString.replace(/\n/g, '').split(';');
  const cssObj = {};

  for (let i = 0; i < cssArr.length; i++) {
    const key = cssArr[i].split(':')[0];
    const value = cssArr[i].split(':')[1];

    if (key.trim().length > 0) {
      cssObj[key.trim()] = value.trim();
    }
  }

  return cssObj;
}

module.exports = convertToObject;
