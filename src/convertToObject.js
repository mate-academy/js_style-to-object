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
  const obj = {};
  const arrayOfProperties = sourceString.split(':').join().split(';');
  const arrayWithoutSpace = arrayOfProperties
    .map((prop) => prop.trim())
    .filter((prop) => prop !== '');

  arrayWithoutSpace.forEach((str) => {
    const [property, value] = str.split(',').map((part) => part.trim());

    obj[property] = value;
  });

  return obj;
}

module.exports = convertToObject;
