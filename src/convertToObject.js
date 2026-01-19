'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
'use strict';

function convertToObject(sourceString) {
  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  const result = {};

  sourceString.split(';').forEach((rule) => {
    const cleanedRule = rule.trim();

    if (!cleanedRule) {
      return;
    }

    const parts = cleanedRule.split(':');

    if (parts.length < 2) {
      return;
    }

    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
