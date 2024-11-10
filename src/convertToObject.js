'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((string) => string.length > 0)
    .map((string) => string.split(':').map((part) => part.trim()))
    .filter((element) => element[0] && element[1])
    .reduce((accum, element, index) => {
      accum[element[0]] = element[1];

      return accum;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
