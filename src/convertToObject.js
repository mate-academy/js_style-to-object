'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedString = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element)
    .reduce((accumulator, element) => {
      const [key, value] = element.split(':');

      return {
        ...accumulator,
        [key.trim()]: value.trim(),
      };
    }, {});

  return convertedString;
}

module.exports = convertToObject;
