'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  sourceString.split(';').forEach((element) => {
    const [key, value] = element.split(':');
    const newKey = key?.trim();
    const newValue = value?.trim();

    if (newKey && newValue) {
      result[newKey] = newValue;
    }
  });

  return result;
}

module.exports = convertToObject;
