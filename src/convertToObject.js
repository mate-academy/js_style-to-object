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
  const sources = sourceString.split(';')
    .map(
      string => string.trim().split(':')
        .map(str => str.trim()),
    );

  return sources.reduce((styleObject, style) => {
    styleObject[style[0]] = style[1];

    delete styleObject[''];

    return styleObject;
  }, {});
}

module.exports = convertToObject;
