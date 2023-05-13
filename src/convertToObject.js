'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = sourceString
    .split(';')
    .filter(str => str.trim() !== '')
    .reduce((prev, current) => {
      const [property, value] = current.split(':').map(el => el.trim());

      return {
        ...prev,
        [property]: value,
      };
    }, {});

  return obj;
}

module.exports = convertToObject;
