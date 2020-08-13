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
  const arr = sourceString
    .split(';')
    .map(elem => elem.split(':'))
    .map(elem => elem.map(property => property.trim()))
    .filter(elem => elem[0] !== '');

  return arr.reduce((prev, property) => {
    return {
      ...prev,
      [property[0]]: property[1],
    };
  }, {});
}

module.exports = convertToObject;
