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
  const stylesArr = sourceString.split(';');
  const stylesObj = {};

  stylesArr.forEach(style => {
    const styleSplit = style.split(':');

    if (styleSplit.length > 1) {
      stylesObj[styleSplit[0].trim()] = styleSplit[1].trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
