'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const res = sourceString
    .split(';')
    .filter(Boolean)
    .map((item) => item.split(':'))
    .filter((tips) => tips.length === 2 && tips[0] && tips[1])
    .map((prop) => [prop[0].trim(), prop[1].trim()]);

  res.forEach(([key, value]) => (obj[key] = value));

  return obj;
}

module.exports = convertToObject;
