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
  const styleObject = {};
  const stylesArray = sourceString.split(';');
  let cssProperty;
  let cssValue;

  stylesArray.forEach(string => {
    const inputStyle = string.split(':');

    if (inputStyle.length > 1) {
      cssProperty = inputStyle[0].trim();
      cssValue = inputStyle[1].trim();

      styleObject[cssProperty] = cssValue;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
