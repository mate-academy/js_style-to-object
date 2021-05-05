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
  const stylesObj = {};

  const styles = sourceString
    .split(';')
    .filter(prop => prop.includes(':'))
    .map(el => el.split(':').map(prop => prop.trim()));

  styles.forEach(el => {
    stylesObj[el[0]] = el[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
