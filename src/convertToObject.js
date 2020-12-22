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
  const convertToArr = sourceString.split(';');
  const styleObj = {};

  convertToArr.forEach(el => {
    const convertToStyle = el.split(':');

    if (convertToStyle[1]) {
      styleObj[convertToStyle[0].trim()] = convertToStyle[1].trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
