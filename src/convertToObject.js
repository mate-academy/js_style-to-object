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
    elements => elements.split(':').map(
      element => element.trim()
    )
  );

  for (let i = 0; i < entries.length; i++) {
    styles[entries[i][0]] = entries[i][1];
  }

  return styles;
}

module.exports = convertToObject;
