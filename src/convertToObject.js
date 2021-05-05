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
  const styleObject = {};
  const styles = sourceString
    .split(';')
    .map(item => item
      .split(':')
      .map(prop => prop.trim()))
    .filter(element => element.length === 2);

  styles.forEach(element => {
    const [key, value] = element;

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
