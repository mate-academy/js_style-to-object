'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const input = sourceString.split(';');
  const result = input.reduce((acc, property) => {
    const [key, value] = property.split(':');

    return value ? { ...acc, [key.trim()]: value.trim() } : { ...acc };
  }, {});

  return result;
}

module.exports = convertToObject;
