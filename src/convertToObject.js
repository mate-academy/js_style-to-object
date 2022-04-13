'use strict';

/**
 * Implement convertToObject function:
 *
* Function takes a string with styles (see an example in [stylesString.js]
  (./stylesString.js))
 * and returns an object where CSS properties are keys
* and values are the values of related CSS properties (see an exampl in
  [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};
  const properties = sourceString.split(';');

  properties.forEach(property => {
    const propertyArr = property.split(':').map(el => el.trim());

    if (propertyArr.length >= 2) {
      newObject[propertyArr[0]] = propertyArr[1];
    }
  });

  return newObject;
}

module.exports = convertToObject;
