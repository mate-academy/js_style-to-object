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
  const actualProperties = sourceString
    .split(';')
    .filter(property => property.length > 1 && property.includes(':'));

  return actualProperties.reduce((propertiesStore, property) => {
    const [key, value] = property.split(':');

    propertiesStore[key.trim()] = value.trim();

    return propertiesStore;
  }, {});
}

module.exports = convertToObject;
