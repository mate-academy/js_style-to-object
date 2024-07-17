'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const lines = sourceString.split(';');

  lines.forEach((line) => {
    const [property, value] = line.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      styles[trimmedProperty] = trimmedValue;
    }
  });

  return styles;
}

module.exports = convertToObject;
