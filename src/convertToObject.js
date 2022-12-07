'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = sourceString
    .split(';')
    .reduce((acc, curr) => {
      if (curr.includes(':')) {
        const [key, value] = curr.split(':');

        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  return convertedStyles;
}

module.exports = convertToObject;
