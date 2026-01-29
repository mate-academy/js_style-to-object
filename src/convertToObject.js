'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const cssProperties = sourceString
    .split(';')
    .map((clearSrting) => clearSrting.trim())
    .filter((el) => el !== '')
    .map((el) => el.split(':').map((clearEl) => clearEl.trim()))
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return cssProperties;
}

module.exports = convertToObject;
