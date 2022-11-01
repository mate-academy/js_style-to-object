'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(row => row.trim())
    .filter(row => row !== '')
    .reduce(reducingString, {});
}

const reducingString = (prev, property) => {
  const arrForObj = property.split(':');

  return {
    ...prev,
    [arrForObj[0].trim()]: arrForObj[1].trim(),
  };
};

module.exports = convertToObject;
