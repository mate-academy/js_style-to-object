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
  const css = sourceString.split(';');
  const obj = {};

  for (let i = 0; i < css.length; i++) {
    const style = css[i].trim().split(': ');
    obj[style[0]] = style[1];
  }

  return obj;
}

module.exports = convertToObject;
