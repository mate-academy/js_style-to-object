'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyle = sourceString
    .split('\n')
    .filter(el => el.includes(':'))
    .map(el => {
      const index = el.indexOf(':');
      const key = el.slice(0, index).trim();
      const value = el.slice(index + 1, -1).trim();

      return { [key]: value };
    })
    .reduce((prev, el) => ({
      ...prev,
      ...el,
    }), {});

  return cssStyle;
}

module.exports = convertToObject;
