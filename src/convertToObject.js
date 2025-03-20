'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssString = sourceString.trim().replace(/;$/, '');

  const rules = cssString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  return rules.reduce((result, rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim());

    if (property && value) {
      result[property] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
