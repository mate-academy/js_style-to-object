'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newSource = sourceString.split(';');
  const result = {};

  for (let i = 0; i < newSource.length; i++) {
    if (newSource[i].trim() !== '') {
      const parts = newSource[i].split(':');
      const label = parts[0].trim();
      const value = parts[1].trim();

      result[label] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
