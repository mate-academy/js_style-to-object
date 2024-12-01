'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};
  const attributes = sourceString.split(';');

  attributes.forEach(item => {
    const cssItem = item.split(':');

    if (cssItem[0] && cssItem[1]) {
      cssObj[cssItem[0].trim()] = cssItem[1].trim();
    }
  });

  return cssObj;
}

module.exports = convertToObject;
