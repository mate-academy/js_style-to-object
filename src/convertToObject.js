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

  const propertyKeys = propertiesArray.map(property =>
    property.split(':')[0].trim());

  const propertyValues = propertiesArray.map(property =>
    property.split(':')[1].trim());

  const objectConstructor = (object, propertyKey, index) => {
    return {
      ...object,
      [propertyKey]: propertyValues[index],
    };
  };

  return propertyKeys.reduce(objectConstructor, {});
}

module.exports = convertToObject;
