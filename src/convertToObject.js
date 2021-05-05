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
    .map(item => item
      .split(':')
      .map(prop => prop.trim()))
    .filter(element => element.length === 2);
  const styleObject = {};

  styles.forEach(element => {
    styleObject[element[0]] = element[1];
  });

  return styleObject;
}

module.exports = convertToObject;
