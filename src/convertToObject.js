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
  const sourceStringArr = sourceString.trim().split(';');
  const cssObject = {};

  sourceStringArr.forEach((element) => {
    const position = element.indexOf(':');
    const key = element.substring(0, position).trim();
    const value = element.substring(position + 1, element.length).trim();

    if (key !== '') {
      cssObject[key] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
