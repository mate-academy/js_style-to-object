'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length > 0) {
    const styles = sourceString
      .trim()
      .split(';')
      .filter((style) => style !== '');

    const stylesObject = styles.reduce((acc, style) => {
      const semicolonIndex = style.indexOf(':');
      const property = style.slice(0, semicolonIndex).trim();
      const value = style.slice(semicolonIndex + 1).trim();

      if (property.length > 0) {
        return { ...acc, [property]: value };
      } else {
        return acc;
      }
    }, {});

    return stylesObject;
  }

  return {};
}

module.exports = convertToObject;
