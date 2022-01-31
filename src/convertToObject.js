'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedArr = sourceString
        .split(';')
    .map(propertys => propertys.split(':')
      .map(values => values.trim()))
    .filter(element => element.length > 1);

  return Object.fromEntries(formatedArr);
}

module.exports = convertToObject;
