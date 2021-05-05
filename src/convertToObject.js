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
  const stylesObj = {};
  const convertStylesToArr = sourceString
    .split('\n')
    .filter(prop => prop.includes(':'))
    .map(el => {
      const style = el.slice(0, el.lastIndexOf(';')).split(':');

      style[0] = style[0].trim();
      style[1] = style[1].trim();

      return style;
    });

  convertStylesToArr.forEach(el => {
    stylesObj[el[0]] = el[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
