'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString
    .split(';')
    .reduce((styleAccumulator, styleProperty) => {
      const [propertyName, propertyValue] = styleProperty.split(':');

      if (!propertyName || !propertyValue) {
        return styleAccumulator;
      }

      const trimmedName = propertyName.trim();
      const trimmedValue = propertyValue.trim();

      if (trimmedName && trimmedValue) {
        styleAccumulator[trimmedName] = trimmedValue;
      }

      return styleAccumulator;
    }, {});

  return stylesList;
}

module.exports = convertToObject;
