'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmedStyles = sourceString
    .replace(/\t/g, ' ')
    .split(';')
    .map((e) => e.trim());

  const clearedStyles = trimmedStyles
    .filter((e) => e)
    .reduce((acc, item) => {
      const splitted = item.split(':');

      acc[splitted[0].trim()] = splitted[1].trim().replaceAll(', ', ',\n\t\t');

      return acc;
    }, {});

  return clearedStyles;
}

module.exports = convertToObject;
