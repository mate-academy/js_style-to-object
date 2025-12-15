'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const splitStrings = sourceString.split(';');

  splitStrings
    .map((line) => line.trim())
    .filter((line) => line.length)
    .filter((line) => line.includes(':'))
    .forEach((line) => {
      const [property, value] = line.split(':');

      styles[property.trim()] = value.trim();
    });

  return styles;
}

module.exports = convertToObject;
