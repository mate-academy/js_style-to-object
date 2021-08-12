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
  const styledArray = sourceString.split(';')
    .map(cssProperty => cssProperty.split(':')
      .map(element => element.trim()))
    .filter(string => string.length > 1);

  const styledObject = styledArray.reduce((prev, [key, val]) =>
    Object.assign(prev, { [key]: val }), {});

  return styledObject;
}

module.exports = convertToObject;
