'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styleArray = sourceString
    .split(';')
    .map((styles) => styles.trim())
    .filter((styles) => styles.length > 0);

  styleArray.forEach((style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
