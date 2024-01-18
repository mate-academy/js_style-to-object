'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js])
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.trim().split(';');

  const styles = stylesArray
    .reduce((prev, item) => {
      const [key, value] = item.trim().split(':')
        .map(part => part.trim());

      if (key && value) {
        prev[key] = value;
      }

      return prev;
    }, {});

  return styles;
}

module.exports = convertToObject;
