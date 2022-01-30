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
  const objectFromSourseString = sourceString.split(';')
    .map(element => element.split(':')
      .map(item => item.trim()))
    .filter(element => element.length > 1);

  return Object.fromEntries(objectFromSourseString);
}

module.exports = convertToObject;
