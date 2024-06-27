'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
  .trim()
  .split(';')
  .map(style => style.trim())
  .filter(style => style);

  const stylesObj = {};

  stylesArray.forEach(style => {
    const [key, value] = style.split(':').map(part => part.trim());

    if (key && value) {
      stylesObj[key] = value;
    }
  });

  return stylesObj;
}
module.exports = convertToObject;
