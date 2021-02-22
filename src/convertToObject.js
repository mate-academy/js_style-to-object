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

  const stylePropertySplited = sourceString.split(';');

  const cssProperty = stylePropertySplited.map((x) => {
    return x.split(':');
  });

  cssProperty.reduce((acc, [key, value]) => {
    if (typeof value !== 'undefined') {
      styleObject[key.trim()] = value.trim();
    }
  }, 0);

  return styleObject;
}

module.exports = convertToObject;
