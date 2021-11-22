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
  const cssObj = {};
  const cssArrey = sourceString.split(';');

  cssArrey.forEach((lineCss) => {
    const arrProperties = lineCss.split(':');

    if (arrProperties.length === 2) {
      const property = arrProperties[0].trim();
      const value = arrProperties[1].trim();

      cssObj[property] = value;
    }
  });

  return cssObj;
}

module.exports = convertToObject;
