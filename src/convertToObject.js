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

  sourceString.split(';').forEach(item => {
    const property = item.trim().split(':');

    if (property[0] && property[1]) {
      styles[property[0].trim()] = property[1].trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
