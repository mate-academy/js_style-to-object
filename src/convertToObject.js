'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  const rules = sourceString.split(';').filter(Boolean);

  const result = {};

  for (const rule of rules) {
    const [key, ...valueParts] = rule.split(':');

    if (!key || valueParts.length === 0) {
      continue;
    }

    const cleanKey = key.trim();
    const cleanValue = valueParts.join(':').trim();

    if (cleanKey) {
      result[cleanKey] = cleanValue;
    }
  }

  return result;
}

module.exports = convertToObject;
