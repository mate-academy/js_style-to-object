'use strict';

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
  const styles = sourceString.split(';').map((str) => {
    return str.trim();
  }).filter((str) => str.length).map((str) => {
    return str.split(':').map((item) => item.trim());
  });

  const result = {};

  for (const pair of styles) {
    result[pair[0]] = pair[1];
  }

  return result;
}

module.exports = convertToObject;
