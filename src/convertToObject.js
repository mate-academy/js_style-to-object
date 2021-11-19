'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.trim().split(';');

  const cssObject = sourceArray.reduce((css, style) => {
    if (style.trim()) {
      const [property, value] = style.split(':');

      css[property.trim()] = value.trim();
    }

    return css;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
