'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString.split(';').reduce(transformStyles, {});

  return stylesObject;
}

/**
 * @param {object} styles
 * @param {string} property
 *
 * @returns {object}
 *
 * Transform 'property' string into object and assign it
 * to the given 'styles' object
 */
function transformStyles(styles, property) {
  if (property.trim().length) {
    const [key, value] = property.split(':').map((part) => {
      return part === undefined ? '' : String(part).trim();
    });

    // Add to the resulting object only the lines with both key and value
    if (key.length && value.length) {
      return Object.assign(styles, { [key]: value });
    }
  }

  return styles;
}

module.exports = convertToObject;
