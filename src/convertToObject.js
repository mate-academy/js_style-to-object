'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayStrings = sourceString.split(';');

  const arrayWithNoSpaces = arrayStrings
    .map((element) => element.trim())
    .filter((element) => element.trim() !== '');

  const result = arrayWithNoSpaces.reduce((status, element) => {
    if (element !== undefined) {
      const parts = element.split(':').map((part) => part.trim());

      return { ...status, [parts[0]]: parts[1] };
    }
  }, {});

  return result;
}

module.exports = convertToObject;
