'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .trim()
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  return styles.reduce((acc, style) => {
    const [property, value] = style.split(':');
    const trimmedProperty = property.trim();
    const trimmedValue = value.trim();

    acc[trimmedProperty] = trimmedValue;

    return acc;
  }, {});
}

module.exports = convertToObject;
