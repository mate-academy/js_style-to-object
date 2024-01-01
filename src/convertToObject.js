'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(element => element.split(':')
      .map(component => component.trim()))
    .filter(element => element.length > 1)
    .reduce((object, element) => {
      object[String(element[0])] = element[1];

      return object;
    }, {});
}

module.exports = convertToObject;
