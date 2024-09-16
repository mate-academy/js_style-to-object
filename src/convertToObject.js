'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';');
  const sourceObject = {};

  sourceArr.forEach(element => {
    const parts = element.split(':');
    const key = parts[0].trim();
    const value = parts[1] ? parts[1].trim() : '';

    if (key && value) {
      sourceObject[key] = value;
    }
  });

  return sourceObject;
}

module.exports = convertToObject;
