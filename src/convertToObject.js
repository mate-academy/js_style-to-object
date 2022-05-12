'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const splitted = sourceString.split(';');
  const pairs = splitted.map(words =>
    words.split(':')
  );
  const filtered = pairs.filter(([, value]) =>
    value
  );

  for (const [key, value] of filtered) {
    styles[key.trim()] = value.trim();
  }

  return styles;
};
// write your code here

module.exports = convertToObject;
