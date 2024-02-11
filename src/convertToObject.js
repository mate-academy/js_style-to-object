'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString
    .split(';')
    .filter(rule => rule.trim() !== '');
  const formattedStyleArray = styleArray.map(rule => {
    const [property, value] = rule.split(':');
    const newRule = [property.trim(), value.trim()];

    return newRule;
  });
  const result = {};

  formattedStyleArray.forEach(rule => {
    result[rule[0]] = rule[1];
  });

  return result;
}

module.exports = convertToObject;
