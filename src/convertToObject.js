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
  const resultObj = {};

  sourceString
    .split(';')
    .filter(x => Boolean(x.trim()))
    .map((y) => y
      .split(':')
      .map(z => z.trim())
    )
    .forEach(style => {
      resultObj[style[0]] = style[1];
    });

  return resultObj;
}

module.exports = convertToObject;
