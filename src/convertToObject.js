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
    .filter((style) => style.trim() !== '');

  const stylesObject = styles.reduce((acc, style) => {
    const [property, value] = style.split(':', 2)
      .map((item) => item.trim());

    if (property.length > 0) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
