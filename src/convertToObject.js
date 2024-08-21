'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  let styleRules = sourceString.split(';');

  styleRules = styleRules.filter((rule) => rule.trim().length);

  for (const line of styleRules) {
    const [rule, value] = line.split(':');

    result[rule.trim()] = value.trim();
  }

  return result;
}
module.exports = convertToObject;
