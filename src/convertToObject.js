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
  const clearStyles = sourceString.split(';').map(string => {
    return string.split(':').map(item =>
      item.trim()).join(':');
  }).filter(string => string.length > 1);

  const result = {};

  clearStyles.map(rule => {
    rule.split(':');

    const [key, value] = rule.split(':');

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
