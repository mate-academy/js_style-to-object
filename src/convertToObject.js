'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, str) => {
    const splitted = str.split(':');

    if (splitted.length < 2) {
      return acc;
    }

    acc[splitted[0].trim()] = splitted[1].trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
