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
  const properties = sourceString.split(';');
  const noWhitespace = properties.map(property => property.trim());
  const noBlanks = [];

  noWhitespace.forEach(property => {
    if (property) {
      noBlanks.push(property);
    }
  });

  const splitProperties = [];

  noBlanks.forEach(property => splitProperties.push(property.split(':')));

  const propertiesObject = {};

  splitProperties.forEach(property => {
    const key = property[0].trim();
    const value = property[1].trim();

    propertiesObject[key] = value;
  });

  return propertiesObject;
}

module.exports = convertToObject;
