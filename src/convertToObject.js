'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const rules = sourceString.split(';');

  rules.forEach((ruleArg) => {
    const rule = ruleArg.trim();

    if (rule) {
      const [property, value] = rule.split(':').map((item) => item.trim());

      if (property && value !== undefined) {
        obj[property] = value;
      }
    }
  });

  return obj;
}

module.exports = convertToObject;
