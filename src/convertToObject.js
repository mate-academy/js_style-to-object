'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, currentValue) => {
    const [key, value] = currentValue.split(':');
    const trimmedKey = key?.trim();
    const trimmedValue = value?.trim();

    if (!trimmedKey || !trimmedValue) {
      return acc;
    }

    return {
      ...acc,
      [trimmedKey]: trimmedValue,
    };
  }, {});
}

module.exports = convertToObject;

