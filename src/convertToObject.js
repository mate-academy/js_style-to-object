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
  const object = sourceString.split(';')
    .map(elem => elem.trim())
    .filter(elem => elem)
    .map(elem => elem.split(':'))
    .map(elem => elem.map(subElem => subElem.trim()))
    .reduce((acc, elem) => {
      return {
        ...acc,
        [elem[0]]: elem[1],
      };
    }, {});

  return object;
}

module.exports = convertToObject;
