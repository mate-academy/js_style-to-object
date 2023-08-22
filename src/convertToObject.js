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

const LF = '\n';
const SEMICOLON = ';';
const COLON = ':';

function convertToObject(sourceString) {
  const stylesObject = sourceString
    .replace(LF, '')
    .split(SEMICOLON)
    .reduce((result, bundle) => {
      const trimmedBundle = bundle.trim();

      if (trimmedBundle) {
        const [property, value] = trimmedBundle
          .split(COLON)
          .map(item => item.trim());

        result[property] = value;
      }

      return result;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
