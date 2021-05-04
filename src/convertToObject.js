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
  const normalizeString = sourceString.replace(/[ \r\n]/g, '')
    .replace('solid', ' solid ')
    .replace('!important', ' !important')
    .replace(/\.2s/g, ' .2s ')
    .split(';');

  const styles = {};

  for (let style of normalizeString) {
    style = style.split(':');

    if (style.length > 1) {
      styles[style[0]] = style[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
