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
  const objStyle = {};

  const stringArr = sourceString
    .split(';')
    .map(str => str.split(':')
      .map(el => el.trim()))
    .filter(style => style.length > 1);

  stringArr.forEach(str => {
    objStyle[str[0]] = str[1];
  });

  return objStyle;
}

module.exports = convertToObject;
