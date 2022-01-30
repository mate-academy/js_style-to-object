'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedArray = sourceString.split(';')
    .map(properties => properties.split(':')
      .map(keyValue => keyValue.trim()))
    .filter(element => element.length > 1);

  return Object.fromEntries(formatedArray);
}

module.exports = convertToObject;
