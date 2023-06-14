'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const rules = sourceString.split(';')
    .filter(rule => rule.trim().length > 0);

  rules.forEach(rule => {
    const parts = rule.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
