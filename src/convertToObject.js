'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const pair = rule.split(':');
    const property = pair[0].trim();
    const value = pair[1] ? pair[1].trim() : '';

    if (property) {
      obj[property] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
