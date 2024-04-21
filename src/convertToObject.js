'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map((styles) => styles.trim())
    .filter((styles) => styles.length > 0);

  const result = {};

  for (const style of stylesArray) {
    const [property, value] = style.split(':').map((part) => part.trim());

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
