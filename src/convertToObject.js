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
const convertToObject = sourceString => (
  sourceString
    .split(';')
    .map(item => item.trim())
    .reduce((styleObj, styleStr) => {
      if (styleStr) {
        const [property, value] = styleStr
          .split(':')
          .map(e => e.trim());

        styleObj[property] = value;
      }

      return styleObj;
    }, {})
);

module.exports = convertToObject;
