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
  const convertStylesToArr = sourceString
    .split('\n')
    .filter(prop => prop.includes(':'));
  const stylesObj = {};

  convertStylesToArr.forEach(el => {
    const style = el.slice(0, el.lastIndexOf(';'));
    const t = style.split(':');
    const [key, value] = [t[0].trim(), t[1].trim()];

    stylesObj[key] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
