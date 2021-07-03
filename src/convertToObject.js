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
  const result = {};
  let style = sourceString.split(';');

  style = style.map(str => str.split(':'));

  for (let i = 0; i < style.length; i++) {
    if (typeof style[i][1] === 'string') {
      result[style[i][0].trim()] = style[i][1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
