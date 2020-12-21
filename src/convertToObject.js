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
  const styles = sourceString
    .split(';')
    .map(rule => rule
      .trim()
      .split(':').map(
        style => style.trim()
      )
    )
    .filter(arr => arr[0] !== '');

  return Object.fromEntries(styles);
}

module.exports = convertToObject;
