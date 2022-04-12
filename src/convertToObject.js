'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrayOfSource = sourceString
    .split(';').map(elem => elem.split(':').map(item => item.trim()));
  const deletedEmptyItems = arrayOfSource.filter(item => item.length === 2);

  deletedEmptyItems.forEach(item => {
    result[item[0]] = item[1];
  });

  return result;
}

module.exports = convertToObject;
