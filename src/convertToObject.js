'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const rules = sourceString.split(';');
  const object = {};

  for (const rule of rules) {
    if (rule.trim() === '') {
      continue;
    }

    const newRule = rule.split(':');

    object[newRule[0].trim()] = newRule[1].trim();
  }

  return object;
}

module.exports = convertToObject;
