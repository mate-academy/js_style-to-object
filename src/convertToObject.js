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
  const objCss = {};

  const style = sourceString.split(';');

  const styleArr = style.map(el => el.split(':'));

  for (const [key, value] of styleArr) {
    if (key && value) {
      objCss[key.trim()] = value.trim();
    }
  }

  return objCss;
}

module.exports = convertToObject;
