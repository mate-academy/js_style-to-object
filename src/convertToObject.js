'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string w
 * ith styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of rela
 * ted CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};
  const parts = sourceString.split(';');

  for (let index = 0; index < parts.length; index++) {
    const fullString = parts[index].trim();

    if (fullString.length === 0) {
      continue;
    }

    const nameValue = fullString.split(':');
    const propertyName = nameValue[0].trim();
    const propertyValue = nameValue[1].trim();

    object[propertyName] = propertyValue;
  }
}

module.exports = convertToObject;
