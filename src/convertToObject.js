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
  const propertiesArray = (sourceString.split(';\n')
    .filter(property => property.length > 3));

  const propertyKeys = propertiesArray.map(property => {
    const indexToDivide = property.indexOf(':');

    return property.slice(0, indexToDivide).trim();
  });

  const propertyValues
  = propertiesArray.map(property => {
    const indexToDivide = property.indexOf(':');

    return property.slice(indexToDivide + 1, property.length).trim();
  });

  const objectConstructor = (object, propertyKey, index) => {
    return {
      ...object,
      [propertyKey]: propertyValues[index],
    };
  };

  return propertyKeys.reduce(objectConstructor, {});
}

module.exports = convertToObject;
