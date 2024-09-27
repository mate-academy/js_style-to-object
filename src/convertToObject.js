'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.split(';');
  const stylesObj = {};

  for (const style of styles) {
    const [property, value] = style.split(':');

    if (property && value) {
      stylesObj[property.trim()] = value.trim();
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
