'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitByPropetries = sourceString.split(';')
    .filter((item) => item.trim() !== '')
    .reduce((prev, item) => {
      const [property, value] = item.split(':');

      return {
        ...prev, [property.trim()]: value.trim(),
      };
    }, {});

  return splitByPropetries;
}

module.exports = convertToObject;
