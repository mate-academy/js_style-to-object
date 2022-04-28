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
  const arrCssStyles = sourceString.split('\n').filter(x => x.length > 3);

  const resultObj = arrCssStyles.reduce((prev, style) => {
    return {
      ...prev,
      [style.slice(0, style.indexOf(':')).trim()]:
        style.slice(style.indexOf(':') + 1, -1).trim(),
    };
  }, {});

  return resultObj;
}

module.exports = convertToObject;
