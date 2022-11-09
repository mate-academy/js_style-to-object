'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProps = sourceString.split(';');
  const cssPropsObj = {};

  cssProps.forEach(rule => {
    const ruleParts = rule.split(':');

    if (ruleParts[0] && ruleParts[1]) {
      const key = ruleParts[0].trim();
      const value = ruleParts[1].trim();

      cssPropsObj[key] = value;
    }
  });

  return cssPropsObj;
}

module.exports = convertToObject;
