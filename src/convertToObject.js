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
  const sourceArray = sourceString.split(';').map(property =>
    property.split(':')
  );

  const result = sourceArray.reduce((previous, property) => {
    if (property.length > 1) {
      return {
        ...previous,
        [property[0].trim()]: property[1].trim(),
      };
    }

    return { ...previous };
  }, {});

  return result;
}

module.exports = convertToObject;
