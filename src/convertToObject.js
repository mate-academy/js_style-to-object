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
    if (style.indexOf(':') === -1) {
      return acc;
    }

    const [property, value] = style.split(':')
      .map((item) => item.trim());

    if (property.length > 0) {
      Object.assign(acc, { [property]: value });
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
