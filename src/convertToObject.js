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
  const result = {};

  sourceString.split(';').map(item => {
    const styles = item.split(':');

    const style = styles[0];
    const value = styles[1];

    if (style !== undefined && value !== undefined) {
      result[style.trim()] = value.trim();
    }
  });
  
  return result;
}

module.exports = convertToObject;
