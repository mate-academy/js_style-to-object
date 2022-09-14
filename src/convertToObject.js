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
  const strings = sourceString.split(';');

  return strings.reduce((acc, item) => {
    if (!item.includes(':')) {
      return acc;
    }

    const [key, value] = item.split(':');

    return {
      ...acc,
      [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
