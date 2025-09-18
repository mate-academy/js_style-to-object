'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesAccumulator = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.includes(':'))
    .map((el) => {
      const [key, ...rest] = el.split(':');
      const value = rest.join(':');

      return [key.trim(), value.trim()];
    })
    .filter(([key, value]) => key && value)
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return stylesAccumulator;
}

module.exports = convertToObject;
