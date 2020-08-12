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

  const stylesArr = sourceString
    .split(';')
    .map(prop =>
      prop
        .split(':')
        .map(item => item.trim())
    );

  stylesArr.forEach(prop => {
    const [ key, value ] = prop;

    if (value) {
      stylesObj[key] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
