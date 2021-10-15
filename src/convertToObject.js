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
  const propertiesUnfiltered = sourceString.split(';');

  const properties = propertiesUnfiltered.filter(
    property => property.includes(':')
  );

  const сssProperties = properties.reduce((prev, property) => {
    const [key, value] = property.split(':');

    return {
      ...prev,
      [key.trim()]: value.trim(),
    };
  }, {});

  return сssProperties;
}

module.exports = convertToObject;
