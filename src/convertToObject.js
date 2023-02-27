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
  const result = {};

  propertiesArray.forEach(property => {
    const arr = property.split(':');
    let nameOfProperty = arr[0].split(' ').join();

    do {
      nameOfProperty = nameOfProperty.replace(',', '');
    } while (nameOfProperty.includes(','));

    do {
      nameOfProperty = nameOfProperty.replace('\n', '');
    } while (nameOfProperty.includes('\n'));

    if (nameOfProperty && arr[1]) {
      result[nameOfProperty] = arr[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
