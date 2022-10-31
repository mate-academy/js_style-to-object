'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

const callbackForReduce = (prev, element) => {
  return {
    ...prev,
    [element[0]]: element[1],
  };
};

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(row => row.trim())
    .filter(row => row.length > 0)
    .map(item => item.split(':'))
    .map(item =>
      item.map(key => key.trim()))
    .reduce((prev, element) => callbackForReduce(prev, element), {});

  return styles;
}

module.exports = convertToObject;
