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
  const stylesArray = sourceString.split('\n');

  const filteredStylesArray = stylesArray
    .filter(style => /[a-zA-Z]/g.test(style))
    .map(style => style.split(':'));

  return filteredStylesArray.reduce((styleObject, current) => {
    const property = current[0].trim();
    const value = current[1].replace(';', '').trim();

    return {
      ...styleObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
