'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const splitedString = sourceString.split(';');

  return splitedString.reduce((accumulator, style) => {
    const [key, value] = style.split(':');
    const trimmedKey = key?.trim();
    const trimmedValue = value?.trim();

    if (trimmedKey && trimmedValue) {
      return { ...accumulator, [trimmedKey]: trimmedValue };
    }

    return accumulator;
  }, {});
}

module.exports = convertToObject;
