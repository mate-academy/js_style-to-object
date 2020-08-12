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
  const parseCssStyle = sourceString.split(';')
    .map(space => space.trim())
    .filter(Boolean)
    .map(pair => pair.split(':')
      .map(keyValue => keyValue.trim()));

  const objStyle = parseCssStyle.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return objStyle;
}

module.exports = convertToObject;
