'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');

  return rules.reduce((css, style) => {
    const [property, value] = style.split(':');

    if (value) {
      return {
        ...css,
        [property.trim()]: value.trim(),
      };
    }

    return { ...css };
  }, {});
}

module.exports = convertToObject;
