'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
