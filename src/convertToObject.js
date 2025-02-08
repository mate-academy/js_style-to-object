'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const result = {};

  styles.forEach((style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      const propertyName = property.trim();
      const propertyValue = value.trim();

      result[propertyName] = propertyValue;
    }
  });

  return result;
}

module.exports = convertToObject;
