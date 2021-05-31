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
  const styles = sourceString
    .replace(/\n|\s{2,}/g, '')
    .replace(/;+/g, ';')
    .split(';');
  const objectStyles = {};

  for (const style of styles) {
    if (style !== '') {
      const splitted = style.split(':');

      objectStyles[splitted[0].trim()] = splitted[1].trim();
    }
  }

  return objectStyles;
}

module.exports = convertToObject;
