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
  const sourceArr = sourceString.split(';');
  const sourceObj = {};

  sourceArr.map(fullStyle => {
    if (fullStyle.trim() !== '') {
      const fullStyles = fullStyle.split(':');

      sourceObj[fullStyles[0].trim()] = fullStyles[1].trim();
    }

    return fullStyle;
  });

  return sourceObj;
}

module.exports = convertToObject;
