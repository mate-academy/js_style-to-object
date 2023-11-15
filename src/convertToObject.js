'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
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
