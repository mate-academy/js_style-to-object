'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayCommands = sourceString.split(';');

  const result = {};

  for (const command of arrayCommands) {
    const [rule, value] = command.split(':');

    if (rule === undefined || value === undefined) {
      continue;
    }

    const cleanRule = rule.trim();
    const cleanValue = value.trim();

    result[cleanRule] = cleanValue;
  }

  return result;
}
module.exports = convertToObject;
