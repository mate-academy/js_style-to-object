'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newLine = sourceString.split(';');

  const result = newLine.reduce((acc, curr) => {
    const [key, value] = curr.split(':', 2);
    const trimedKey = key.trim();
    const trimedValue = value ? value.trim() : value;

    acc[trimedKey] = trimedValue;

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
