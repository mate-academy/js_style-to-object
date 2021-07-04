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
  const stylesArr = sourceString.replace(/\n/g, '').split(';').map(element =>
    element.trim()).filter(element =>
    element.length > 0);

  const stylesObj = {};

  for (const style of stylesArr) {
    const partOfStyle = style.split(':');

    stylesObj[partOfStyle[0].trim()] = partOfStyle[1].trim();
  }

  return stylesObj;
}

module.exports = convertToObject;
