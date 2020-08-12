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
  return Object.fromEntries(sourceString
    .split(';')
    .map(propString => propString.split(':')
      .map(entry => entry.trim()))
    .filter(entryArray => entryArray[1]));
}

module.exports = convertToObject;
