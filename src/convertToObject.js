'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.trim().split(/\s*;\s*/);

  return rules.reduce((result, rule) => {
    const [key, value] = rule.split(/\s*:\s*/);

    if (key && value) {
      result[key] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
