'use strict';
/* eslint-disable */ 
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
  const resObject = {};
  const arrProperties = sourceString.split(';');

  for (const property of arrProperties) {
    const proprContainer = property.split(':');

    const [key, value] = proprContainer;

    if (key.trim().length && value.trim().length) {
      resObject[key.trim()] = value.trim();
    }
  }

  return (resObject);
}

module.exports = convertToObject;
