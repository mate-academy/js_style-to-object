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
  const properties = sourceString.trim();
  let filteredProperties = properties.replace(/;/g, ' ').split('\n');

  filteredProperties = filteredProperties.map(propertie => propertie.trim())
    .filter(propertie => propertie !== '' && propertie !== ';');

  filteredProperties = filteredProperties
    .map(propertie => propertie.split(':'));

  filteredProperties = filteredProperties.map(propertie =>
    [propertie[0].trim(), propertie[1].trim()]);

  const objectOfProperties = filteredProperties
    .reduce((prev, [propertie, value]) => ({
      ...prev, [propertie]: value,
    }), {});

  return objectOfProperties;
}

module.exports = convertToObject;
