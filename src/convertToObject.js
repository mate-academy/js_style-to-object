'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectStyles = {};
  let result = sourceString

    .split(';')
    .map((style) => style.split(':'))
    .filter((object) => object.length === 2)
    .map(([key, value]) => {
      objectStyles[key.trim()] = value.trim();
    });

  result = objectStyles;

  return result;
}

module.exports = convertToObject;
