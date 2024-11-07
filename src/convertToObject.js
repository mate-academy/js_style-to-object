'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string.length > 0)
    .map((string) => string.split(':').map((part) => part.trim()))
    .reduce((accum, element, index) => {
      accum[element[0]] = element[1];

      return accum;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
