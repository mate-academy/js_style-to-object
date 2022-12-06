'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = {};

  sourceString.split(';').map(line =>
    line.trim()).filter(line => line)
    .forEach(lns => {
      const [property, value] = lns.split(':');

      styles[property.trim()] = value.trim();
    });

  return styles;
}

module.exports = convertToObject;
