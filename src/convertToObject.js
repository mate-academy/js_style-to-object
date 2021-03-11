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
