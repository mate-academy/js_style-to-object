'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = {};

  const cssStyles = sourceString.split(';');

  cssStyles.forEach(style => {
    const [ property, value ] = style.split(':')
      .map(item => item.trim());

    if (property && value) {
      convertedStyles[property] = value;
    }
  });

  return convertedStyles;
}

module.exports = convertToObject;
