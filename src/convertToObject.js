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
  // write your code here
  // console.log(sourceString);
  const cssStyle = sourceString.split(';').map((key) =>
    key.split('').filter(value =>
      value !== '\n').join('')).map(key =>
    key.split(':').map(value =>
      value.trim())).filter(key =>
    key.length > 1);

  const style = {};

  cssStyle.forEach(([name, value]) => {
    style[name] = value;
  });

  return style;
}

module.exports = convertToObject;
