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
  const propertiesArray = (sourceString.split('\n')
    .filter(property => property.length > 3));

  const propertyKeys = propertiesArray.map(property => {
    const indexToDivide = property.indexOf(':');

    return property.slice(0, indexToDivide).trim();
  });

  const propertyValues
  = propertiesArray.map(property => {
    const indexToDivide = property.indexOf(':');

    return property.slice(indexToDivide + 1, property.length - 1).trim();
  });

  const propertiesObject = {};

  for (let i = 0; i < propertiesArray.length; i++) {
    propertiesObject[propertyKeys[i]] = propertyValues[i];
  }

  return propertiesObject;
}

module.exports = convertToObject;
