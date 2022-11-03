'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  return sourceString.split(';')
    .filter(item => item.includes(':'))
    .map(str => str.split(':')
      .map(array => array.trim()))
    .reduce(createObject, {});
};

const createObject = (object, current) => {
  return {
    ...object,
    [current[0]]: current[1],
  };
};

module.exports = convertToObject;
