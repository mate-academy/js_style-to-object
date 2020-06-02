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

  sourceString.split(';').forEach(element => {
    if (element.split(':')[1] === undefined) {
      return false;
    }
    styles[element.split(':')[0].trim()] = element.split(':')[1].trim();
  });

  return styles;
}

module.exports = convertToObject;
