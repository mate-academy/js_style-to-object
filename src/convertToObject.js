'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const clearStyles = styles
    .map((style) => style.trim())
    .filter((style) => style.length > 0);
  const result = clearStyles.reduce((prev, style) => {
    const property = style.split(':')[0].trim();
    const value = style.split(':')[1].trim();

    return { ...prev, [property]: value };
  }, {});

  return result;
}

module.exports = convertToObject;
