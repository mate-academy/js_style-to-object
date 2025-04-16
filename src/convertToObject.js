'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(Boolean)
    .map((item) => item.split(':'))
    .filter((tips) => tips.length === 2 && tips[0] && tips[1])
    .map((prop) => [prop[0].trim(), prop[1].trim()])
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
