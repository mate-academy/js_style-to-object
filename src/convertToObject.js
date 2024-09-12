'use strict';

/**
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
