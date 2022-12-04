'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const minPropertyLength = 5;
  const splittedStyle = sourceString.split('\n');
  const formatedStyle = {};

  splittedStyle
    .filter(property => property.length > minPropertyLength)
    .map(property => {
      const splitted = property.trim().split(':');

      return splitted.map(key => {
        return key.replace(';', '').trim();
      });
    })
    .forEach(property => {
      formatedStyle[property[0]] = property[1];
    });

  return formatedStyle;
}

module.exports = convertToObject;
