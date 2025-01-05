'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rules = sourceString.split(';');

  rules.forEach((ruleLine) => {
    const rule = ruleLine.trim();
    const [property, value] = rule.split(':').map((item) => item.trim());

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
