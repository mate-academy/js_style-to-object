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
  const objString = {};
  let prop = '';

  sourceString
    .split(';')
    .map(styles => styles.split(':'))
    .flat()
    .map((el) => el.trim())
    .filter(elem => elem.length > 0)
    .forEach((item, index) => {
      if (index % 2 === 0) {
        prop = item;
      } else {
        objString[prop] = item;
        prop = '';
      }
    });

  return objString;
}

module.exports = convertToObject;
