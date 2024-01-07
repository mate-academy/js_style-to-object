'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesList = sourceString.split(';');

  const res = {};

  propertiesList.forEach(item => {
    if (item.trim()) {
      const pair = item.split(':');
      const property = pair[0];
      const value = pair[1];

      res[property.trim()] = value.trim();
    }
  });

  return res;
}

module.exports = convertToObject;
