'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const rules = sourceString.split(';');

  for (let rule of rules) {
    rule = rule.trim();

    if (rule) {
      const [key, value] = rule.split(':').map((part) => part.trim());

      if (key && value) {
        styleObject[key] = value;
      }
    }
  }

  return styleObject;
}

module.exports = convertToObject;
