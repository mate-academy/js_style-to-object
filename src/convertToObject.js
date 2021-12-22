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
  const arrOfStyles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const stylesObject = {};

  arrOfStyles.forEach((style) => {
    const styleForObject = style
      .split(':')
      .map(item => item.trim());

    stylesObject[styleForObject[0]] = styleForObject[1];
  });

  return stylesObject;
}

module.exports = convertToObject;
