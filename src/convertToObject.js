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
  return sourceString.split(';')
    .filter(prop => prop.includes(':'))
    .reduce((object, propStr) => {
      const [prop, value] = propStr.split(':').map(str => str.trim());

      return {
        ...object,
        [prop]: value,
      };
    }, {});
}

module.exports = convertToObject;
