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
  const stringToObject = sourceString
    .split(";")
    .map((propertiesAndValues) => {
      return propertiesAndValues
        .split(":")
        .map((propertyAndValue) => propertyAndValue.trim());
    })
    .reduce((objectProperties, propertyAndValue) => {
      if (propertyAndValue[0] !== "" && propertyAndValue[1] !== "") {
        return {
          ...objectProperties,
          [propertyAndValue[0]]: propertyAndValue[1],
        };
      }

      return objectProperties;
    }, {});

  return stringToObject;
}
module.exports = convertToObject;
