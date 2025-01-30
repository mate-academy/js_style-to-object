'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  return sourceString.split(';').reduce((prev, propPieces) => {
    if (!propPieces.trim()) {
      return prev;
    }

    const [property, value] = propPieces.split(':');

    return { ...prev, [property.trim()]: value.trim() };
  }, {});
}

module.exports = convertToObject;
