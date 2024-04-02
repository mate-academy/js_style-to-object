'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');
  const values = rules.reduce((prev, rule) => {
    const splitedRules = rule.split(':').map((item) => item.trim());
    const [key, value] = splitedRules;

    if ((key, value)) {
      prev[key] = value;
    }

    return prev;
  }, {});

  return values;
}

module.exports = convertToObject;
