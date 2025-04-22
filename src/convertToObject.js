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
    const normalizeStyle = style.trim();

    if (!normalizeStyle) {
      return;
    }

    const [property, value] = normalizeStyle.split(':');

    if (!property || !value) {
      return;
    }

    result[property.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
