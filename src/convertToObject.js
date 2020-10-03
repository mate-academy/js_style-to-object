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
  const styleArr = sourceString.replace(/\r|\n|/g, '').split(';');

  const css = {};

  styleArr.forEach(element => {
    if (element.replace(/\s/g, '').length === 0) {
      return;
    }
    css[element.split(':')[0].trim()] = element.split(':')[1].trim();
  });

  return css;
}

module.exports = convertToObject;
