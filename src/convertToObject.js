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
  // TEST
  const stylesOfCss = sourceString
    .split(';')
    .reduce((accum, elem) => {
      const [key, value] = elem
        .split(':')
        .map(item => item.trim());

      return key ? {
        ...accum,
        [key]: value,
      } : accum;
    }, {});

  return stylesOfCss;
}

module.exports = convertToObject;
