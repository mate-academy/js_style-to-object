'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const rules = sourceString.split(';');

  const rulesWithoutEmpties = rules.filter(
    element => element.includes(':')
  );

  const entries = rulesWithoutEmpties.map(
    expression => expression.split(':')
  );

  const trimmedEntries = entries.map(
    ([key, value]) => [key.trim(), value.trim()]
  );

  for (const [key, value] of trimmedEntries) {
    styles[key] = value;
  }

  return styles;
}

module.exports = convertToObject;
