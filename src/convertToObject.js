'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Split the input string by newline characters
  const lines = sourceString.split('\n');

  return lines.reduce((result, line) => {
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      return result;
    }

    const [property, valueWithSemicolon] = trimmedLine.split(':');

    if (property && valueWithSemicolon) {
      const cleanValue = valueWithSemicolon.replace(';', '');

      result[property.trim()] = cleanValue.trim();
    }

    return result;
  }, {});
}

module.exports = convertToObject;
