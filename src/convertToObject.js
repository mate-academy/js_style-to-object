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
  const propertiesArray = sourceString.split(';');
  const trimmedPropertiesArray = propertiesArray.map(prop => prop.trim());

  trimmedPropertiesArray.pop();

  const valuesArray = [];

  trimmedPropertiesArray.forEach(prop => {
    const values = prop.split(':');

    values.forEach(val => valuesArray.push(val.trim()));
  });

  const stylesObject = {};

  for (let i = 0; i < valuesArray.length - 1; i += 2) {
    if (valuesArray[i] === '' || valuesArray[i + 1] === '') {
      continue;
    }
    stylesObject[valuesArray[i]] = valuesArray[i + 1];
  }

  return stylesObject;
}

module.exports = convertToObject;
