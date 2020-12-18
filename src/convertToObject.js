'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.trim().split('\n');
  const filteredProperties = properties.filter((pair) => {
    const regexp = /\w/g;

    return regexp.test(pair);
  });

  const propertiesPairs = filteredProperties
    .map((property) => property.trim().split(':'));

  const cssObject = propertiesPairs.reduce((acc, pair) => {
    acc[pair[0].trim()] = pair[1].replace(';', '').trim();

    return acc;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
