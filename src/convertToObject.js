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

    .reduce((styles, stylePair) => {
      if (stylePair[0] && stylePair[1]) {
        styles[stylePair[0]] = stylePair[1];
      }

      return styles;
    }, {});

  return stringToObject;
}

module.exports = convertToObject;
