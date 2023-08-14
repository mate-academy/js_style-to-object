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
  const separatorSemicolon = ';';
  const separatorColon = ':';

  return sourceString
    .split(separatorSemicolon)
    .reduce((stringToObject, objectElement) => {
      const [key, value] = objectElement
        .split(separatorColon)
        .map(partOfElement => partOfElement.trim());

      if (key) {
        stringToObject[key] = value;
      }

      return stringToObject;
    }, {});
}

module.exports = convertToObject;
