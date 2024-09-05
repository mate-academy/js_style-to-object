'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmedStyles = sourceString.split(';').map((style) => style.trim());

  const clearedStyles = trimmedStyles
    .filter((element) => element)
    .reduce((toObject, item) => {
      const splitted = item.split(':');

      toObject[splitted[0].trim()] = splitted[1].trim();

      return toObject;
    }, {});

  return clearedStyles;
}

module.exports = convertToObject;
