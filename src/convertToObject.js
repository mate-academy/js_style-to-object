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
  const space = '\n';
  const semicolon = ';';
  const colon = ':';

  const stylesObject = sourceString
    .replace(space, '')
    .split(semicolon)
    .reduce((result, bundle) => {
      const trimmedBundle = bundle.trim();

      if (trimmedBundle) {
        const [property, value] = trimmedBundle
          .split(colon)
          .map(item => item.trim());

        result[property] = value;
      }

      return result;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
