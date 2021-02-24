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

  const splittedProperties = sourceString.split(';');

  const isKeyAndValue = splittedProperties.filter(
    element => element.includes(':'),
  );

  const splittedKeyAndValue = isKeyAndValue.map(
    words => words.split(':'),
  );

  for (const [key, value] of splittedKeyAndValue) {
    styles[key.trim()] = value.trim();
  }

  return styles;
}

module.exports = convertToObject;
