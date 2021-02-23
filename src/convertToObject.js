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
    words.split(':')
  );

  const filtredProperties = splitedProperties.filter(([, value]) =>
    value !== undefined
  );

  const trimmedProperties = filtredProperties.map(
    ([key, value]) => [key.trim(), value.trim()]
  );

  for (const property of trimmedProperties) {
    if (property.length > 1) {
      styles[property[0]] = property[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
