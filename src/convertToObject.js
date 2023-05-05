'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strings = sourceString.split('\n');

  const trimmedStrings = strings.map(string => string.trim());

  const nonEmptyStrings = trimmedStrings.filter(string =>
    string && string !== ';'
  );

  const result = nonEmptyStrings.reduce((obj, string) => {
    const style = string.replace(';', '').split(':').map(item => item.trim());

    if (style.length === 2) {
      const [key, value] = style;

      obj[key] = value;
    }

    return obj;
  }, {});

  return result;
}

module.exports = convertToObject;
