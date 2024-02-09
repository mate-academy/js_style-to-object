'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const generalProperties = sourceString.split(';');
  const finalObject = {};

  for (const propertie of generalProperties) {
    const prop = propertie.split(':').map(part => part.trim());

    if (prop.length === 2) {
      finalObject[prop[0]] = prop[1];
    }
  }

  return finalObject;
}

module.exports = convertToObject;
