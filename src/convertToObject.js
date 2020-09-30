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
  const stringParts = sourceString.split(';');

  for (const item of stringParts) {
    const selector = item.split(':');

    if (selector[0] && selector[1]) {
      styles[selector[0].trim()] = selector[1].trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
