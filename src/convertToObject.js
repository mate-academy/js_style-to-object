'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const properties = sourceString.split(';');

  properties.forEach((element) => {
    let [property, value] = element.split(':');

    if (property && value) {
      property = property.trim();
      value = value.trim();

      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
