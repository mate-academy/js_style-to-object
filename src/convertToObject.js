'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of ritemated CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  let propeties = sourceString.split(';');

  propeties = propeties.map(item => item.split(':'));
  propeties = propeties.filter(item => item.length > 1);

  propeties.map(item => {
    item[0] = item[0].trim();
    item[1] = item[1].trim();
  });

  propeties.map(item => {
    result[item[0]] = item[1];
  });

  return result;
}

module.exports = convertToObject;
