'use strict';
// /* eslint-disable */

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styles = {};
  const rules = sourceString
    .split(';')
    .map(i => i.trim())
    .filter(Boolean);

  rules.forEach(rule => {
    const ruleParts = rule.split(':');
    const property = ruleParts[0].trim();
    const value = ruleParts[1].trim();

    styles[property] = value;
  });

  return styles;
}

module.exports = convertToObject;
