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
  const resultObject = {};
  const styleArr = sourceString.split(';');

  styleArr.forEach(property => {
    const [key, value] = property.split(':');

    if (!key) {
      return resultObject;
    }

    if (key && value) {
      resultObject[key.trim()] = value.trim();
    }
  });

  return resultObject;
}

module.exports = convertToObject;
