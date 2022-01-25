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
  const styles = sourceString.split(';');
  const stylesObject = {};

  for (const style of styles) {
    if (style.split(':')[1] !== undefined) {
      stylesObject[style.split(':')[0].trim()] = style.split(':')[1].trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
