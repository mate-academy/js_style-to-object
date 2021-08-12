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
  const newArrayString = sourceString.split(';')
    .map(element => element.split(' '))
    .map(element => (
      element.reduce((accumulator, currentValue) => {
        const item = currentValue.trim();

        if (item !== '') {
          accumulator.push(item);
        }

        return accumulator;
      }, [])
    ))
    .filter(array => array.length > 0)
    .map(array => array.join(' ').split(':'))
    .map(array => array.map(element => element.trim()));

  return Object.fromEntries(newArrayString);
}

module.exports = convertToObject;
