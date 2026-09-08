'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .filter((string) => string.includes(':'))
    .map((styleLine) => styleLine.split(':', 2))

    .map(([key, value]) => [key.trim(), value.replace(/;+\s*$/, '').trim()])
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
