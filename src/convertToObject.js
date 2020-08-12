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
  const objStyle = sourceString.split(';')
    .map(space => space.trim())
    .filter(space => space)
    .map(pair => pair.split(':')
      .map(keyValue => keyValue.trim()))
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return objStyle;
}

module.exports = convertToObject;
