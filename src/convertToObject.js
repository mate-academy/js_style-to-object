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
  const styles = {};

  const splitedString = sourceString.split(';');

  const splitedProperties = splitedString.map(words =>
    words.split(':').map(word => word.trim())
  );

  for (const property of splitedProperties) {
    if (property.length > 1) {
      styles[property[0]] = property[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
