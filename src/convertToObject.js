'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';');
  const stylesObj = {};

  for (const style of stylesArr) {
    let [key, value] = style.split(':');

    if (key && value) {
      key = key.trim();
      value = value.trim();
      stylesObj[key] = value;
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
