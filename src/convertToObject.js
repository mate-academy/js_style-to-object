'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const tempString = sourceString.trim().replace(/;+\s*$/, '');
  const cssList = tempString.split(';');
  const cssObject = cssList.reduce((acc, style) => {
    let [key, value] = style.split(':');

    if (key && value) {
      key = key.trim();
      value = value.trim();
      acc[key] = value;
    }

    return acc;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
