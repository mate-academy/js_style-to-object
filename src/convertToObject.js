'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatted = sourceString
    .split(';')
    .map(stringPart => trimStr(stringPart))
    .filter((stringPart) => stringPart !== '')
    .reduce((Styles, stringPart) => {
      const trimmed = stringPart.split(':').map((part) => trimStr(part));

      Styles[trimmed[0]] = trimmed[1];

      return Styles;
    }, {});

  return formatted;
}

function trimStr(string) {
  return string.trim();
}
module.exports = convertToObject;
