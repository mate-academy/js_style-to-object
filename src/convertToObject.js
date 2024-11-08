'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const properties = style.split(':').map((prop) => prop.trim());

    if (properties.length === 2) {
      const [styleKey, styleValue] = properties;

      styleObj[styleKey] = styleValue;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
