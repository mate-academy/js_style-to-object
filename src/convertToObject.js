'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(item => item.trim() !== '')
    .map(item => item.split(':').map(i => i.trim()))
    .reduce((acc, pereche) => {
      acc[pereche[0]] = pereche[1];
      return acc;
    }, {});
}

module.exports = convertToObject;
