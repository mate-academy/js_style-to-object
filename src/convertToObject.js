'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((prev, element) => {
      const [property, value] = element.split(':');

      if (property && value) {
        const normalizedProperty = property.replace('\n', '').trim();
        const normalizedValue = value.trim();

        return {
          ...prev, [normalizedProperty]: normalizedValue,
        };
      }

      return prev;
    }, {});
}

module.exports = convertToObject;
