'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // First - clear string from other symbols
  const tempString = sourceString.trim().replace(/;+\s*$/, '');
  const cssList = tempString.split(';');
  const cssObject = {};

  cssList.forEach((style) => {
    let [key, value] = style.split(':');

    if (key && value) {
      key = key.trim();
      value = value.trim();

      if (key && value) {
        cssObject[key] = value;
      }
    }

    return cssObject;
  });

  // console.log(cssObject);

  return cssObject;
}

module.exports = convertToObject;
