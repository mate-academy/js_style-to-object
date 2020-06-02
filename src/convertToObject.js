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
  const CSS = {};

  sourceString.replace(/;/g, ' ')
    .split('\n')
    .map(elem => elem.trim())
    .filter(elem => elem !== '')
    .map(elem => elem.split(':'))
    .map(elem => elem.map(subElem => subElem.trim()))
    .forEach(elem => {
      CSS[elem[0]] = elem[1];
    });

  return CSS;
}

module.exports = convertToObject;
