'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const outcomeObject = {};
  const cssProperties = sourceString.split(';');

  cssProperties.forEach(prop => {
    const separatedProp = prop.split(':');
    const propertyName = String(separatedProp[0]).trim();
    const propertyValue = String(separatedProp[1]).trim();

    outcomeObject[propertyName] = propertyValue;
  });

  delete outcomeObject[''];

  return outcomeObject;
}

module.exports = convertToObject;
