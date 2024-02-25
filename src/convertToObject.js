"use strict";

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedToObject = sourceString
    .split(";")
    .map((propertiesAndValues) => {
      return propertiesAndValues
        .split(":")
        .map((propertyAndValue) => propertyAndValue.trim());
    })
    .reduce((objectProperties, propertyAndValue) => {
      const [property, value] = propertyAndValue;

      if (property && value) {
        objectProperties[property] = value;
      }

      return objectProperties;
    }, {});

  return convertedToObject;
}
module.exports = convertToObject;
