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
  const result = {};

  const splitedString = sourceString.split(';').map(words =>
    words.split(':')
  );

  const filtredProperties = splitedString.filter(value =>
    value.length === 2
  );

  for (const property of filtredProperties) {
    result[property[0].trim()] = property[1].trim();
  }

  return result;
}

module.exports = convertToObject;
