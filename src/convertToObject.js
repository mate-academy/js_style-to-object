'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';');
  const resultObj = {};

  for (const pair of stylesArr) {
    const key = pair.split(':')[0].trim();

    if (key) {
      const value = pair.split(':')[1].trim();

      resultObj[key] = value;
    }
  }

  return resultObj;
}

module.exports = convertToObject;
