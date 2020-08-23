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
  const result = {};
  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const item = style.split(':');

    if (item[0] && item[1]) {
      result[item[0].trim()] = item[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
