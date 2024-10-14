'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((trimmedString) => trimmedString.trim())
    .filter((nonEmptyString) => nonEmptyString.length > 0)
    .reduce((resultObject, currentString) => {
      const [key, value] = currentString.split(':');

      if (key && value) {
        return {
          ...resultObject,
          [key.trim()]: value.trim(),
        };
      }

      return resultObject;
    }, {});
}

module.exports = convertToObject;
