'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const clearedStyles = styles
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  return clearedStyles.reduce((prev, style) => {
    const [property, value] = style.split(':');

    return { ...prev, [property.trim()]: value.trim() };
  }, {});
}

module.exports = convertToObject;
