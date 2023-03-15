'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const delet = sourceString.split(';');
  const object = {};

  delet.forEach(element => {
    const sep = element.split(':');

    if (sep.length === 2) {
      object[sep[0].trim()] = sep[1].trim();
    }
  });

  return object;
}

module.exports = convertToObject;
