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
  const sourceArray = sourceString
    .split(';')
    .map((string) => {
      const styles = [];

      styles[0] = string.slice(0, string.indexOf(':')).trim();
      styles[1] = string.slice(string.indexOf(':') + 1).trim();

      return styles;
    })
    .filter((style) => style[0] && style[1]);

  const sourceObj = sourceArray
    .reduce((stylesObj, [key, value]) => {
      return {
        ...stylesObj,
        [key]: value,
      };
    }, {});

  return sourceObj;
}

module.exports = convertToObject;
