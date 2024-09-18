'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map(style => style.trim())
    .filter(Boolean)
    .map(style => {
      const [property, value] = style.split(':');
      return property && value ? [property.trim(), value.trim()] : null;
    })
    .filter(Boolean)
    .reduce((obj, [property, value]) => ({
      ...obj,
      [property]: value
    }), {});
}


module.exports = convertToObject;
