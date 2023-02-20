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
  const styleArr = sourceString.split(';');
  const style = styleArr
    .map(values => values.split(':').map(value => value.trim()))
    .reduce((prev, [key, value]) => {
      if (key) {
        return {
          ...prev,
          [key]: value,
        };
      }

      return prev;
    }, {});

  return style;
}

module.exports = convertToObject;
