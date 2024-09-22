'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatString = sourceString.replace(/;\s*;/g, ' ').trim();

  const stringToArray = formatString.split(';');

  const result = {};

  stringToArray.map((element) => {
    const [key, value] = element.split(':', 2);

    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
