'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let listProperties = sourceString.split(';');

  listProperties = listProperties.map((element) => element.split(':'));

  listProperties = listProperties.filter((element) =>
    element[0] !== '' && element[1] !== undefined);

  return listProperties.reduce((prev, value) => {
    return {
      ...prev,
      [value[0].trim()]: value[1].trim(),
    };
  },
  0);
}

module.exports = convertToObject;
