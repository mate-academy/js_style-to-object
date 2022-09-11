'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(';').map(el => el.split(':'));

  const newObject = styleArray
    .filter(propery => property.length > 1)
    .reduce((key, value) => {
      key[value[0].trim()] = value[1].trim();

      return key;
    }, {});

  return newObject;
}

module.exports = convertToObject;
