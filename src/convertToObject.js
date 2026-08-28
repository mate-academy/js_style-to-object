'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strings = sourceString.split(';');

  return strings
    .map((str) => str.trim())
    .filter((str) => str.length > 0)
    .reduce((result, str) => {
      const [key, value] = str.split(/\s*:\s*/);

      result[key] = value.trim();

      return result;
    }, {});
}

module.exports = convertToObject;
