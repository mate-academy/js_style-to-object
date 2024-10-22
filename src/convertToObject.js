'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const rules = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');

  for (const rule of rules) {
    const [key, value] = rule.split(':').map((item) => item.trim());

    if (key && value) {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
