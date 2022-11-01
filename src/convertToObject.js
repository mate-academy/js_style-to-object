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
  const newObject = {};

  const filterString = sourceString.split(';');

  for (let i = 0; i < filterString.length; i++) {
    let propertyAndValue = filterString[i].trim();

    if (propertyAndValue === '') {
      continue;
    }

    propertyAndValue = propertyAndValue.split(':');
    newObject[propertyAndValue[0].trim()] = propertyAndValue[1].trim();
  }

  return newObject;
}

module.exports = convertToObject;
