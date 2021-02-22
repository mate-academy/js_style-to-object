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
  const splitedProperties = splitedString.map(words => words.split(':'));
  const trimmedProperties = splitedProperties.map(
    word => word.map(string => string.trim())
  );

  for (const item of trimmedProperties) {
    if (item.length > 1) {
      styles[item[0]] = item[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
