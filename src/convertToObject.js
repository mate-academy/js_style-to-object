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
 return sourceString.split(';').map(element => element.split(':'))
    .filter(array => array.length === 2)
    .reduce((prev, current) => {

      const [key, value] = current;

      return {
        ...prev,
        [key.trim()]: value.trim()
      }
    
    } ,{});
}

module.exports = convertToObject;
