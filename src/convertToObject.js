'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styleAccumulator, declaration) => {
    const [property, value] = declaration.trim().split(':');

    if (value) {
      styleAccumulator[property.trim()] = value.trim();
    }

    return styleAccumulator;
  }, {});
}

module.exports = convertToObject;
