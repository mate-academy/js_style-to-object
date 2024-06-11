'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const stringToObject = sourceString
    .split(';')
    .map((value) => value.split(':').map((spaces) => spaces.trim()))
    .reduce((styleObject, key) => {
      if (key[0] && key[1]) {
        styleObject[key[0]] = key[1];
      }

      return styleObject;
    }, {});

  return stringToObject;
}

module.exports = convertToObject;
