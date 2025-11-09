'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const parS = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(Boolean)
    .filter((el) => el.includes(':'))
    .map((el) => {
      const [rawKey, ...valueParts] = el.split(':');
      const key = rawKey.trim();
      const value = valueParts.join(':').trim();

      return [key, value];
    });

  return Object.fromEntries(parS);
}

module.exports = convertToObject;
