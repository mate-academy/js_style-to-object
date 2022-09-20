'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propsList = sourceString.split(';');
  const propsObject = {};

  propsList.forEach(property => {
    const currentProp = property.split(':');

    if (currentProp[0] && currentProp[1]) {
      propsObject[currentProp[0].trim()] = currentProp[1].trim();
    }
  });

  return propsObject;
}

module.exports = convertToObject;
