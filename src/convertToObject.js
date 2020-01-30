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
  const splited = sourceString.split(';');

  const result = splited
    .reduce((acc, fullProperty) => {
      let [property, value] = fullProperty.split(':');

      if (property && value) {
        property = property.trim();
        value = value.trim();

        return {
          ...acc,
          [property]: value,
        };
      }

      return {
        ...acc,
      };
    }, {});

  return result;
}

module.exports = convertToObject;
