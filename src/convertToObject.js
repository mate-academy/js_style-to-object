'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesInObject = {};

  sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .forEach(item => {
      const [key, value] = item.split(':').map(v => v.trim());

      stylesInObject[key] = value;
    });

  return stylesInObject;
}

module.exports = convertToObject;
