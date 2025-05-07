'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const array = sourceString.split(';');

  const clean = array
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (const ch of clean) {
    const [rule, ...values] = ch.split(':');
    const key = rule.trim();
    const value = values.join(':').trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
