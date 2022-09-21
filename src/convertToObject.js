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
  let arrOfProperties = sourceString.replace(/\n/g, '').split(';');
  const objOfProperties = {};

  arrOfProperties = arrOfProperties
    .map(property => property.trim())
    .filter(property => property !== '')
    .map(property => property.split(':'))
    .map(property => {
      return property.map(item => item.trim());
    });

  for (const property of arrOfProperties) {
    objOfProperties[property[0]] = property[1];
  }

  return objOfProperties;
}

module.exports = convertToObject;
