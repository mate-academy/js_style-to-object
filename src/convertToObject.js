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

const convertToObject = (sourceString) =>
  sourceString
    .split(';')
    .map(str => str.split(':'))
    .reduce((acc, property) => {
      if (property[1] !== undefined) {
        acc[property[0].trim()] = property[1].trim();
      }

      return acc;
    }, {});

module.exports = convertToObject;
