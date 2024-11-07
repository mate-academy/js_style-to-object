'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const stylesArray = stylesString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0);

  stylesArray.forEach(style => {
    const [property, value] = style.split(':').map(item => item.trim());
    if (property && value) {
      obj[property] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
