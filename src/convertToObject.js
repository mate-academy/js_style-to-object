'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item !== '')
    .map(item => item.split(':')
      .map(value => value.trim()))
    .reduce((prev, curr) => ({
      ...prev,
      [curr[0]]: curr[1],
    }), {});

  return convertedStyles;
}

module.exports = convertToObject;
