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
  let cssProperties = sourceString.split(';');

  cssProperties = cssProperties.map(prop => prop.split(':'));
  cssProperties = cssProperties.map(prop => prop.map(x => x.trim()));
  cssProperties = cssProperties.filter(prop => prop.length > 1);

  const callback = (prev, x) => {
    return {
      ...prev,
      [x[0]]: x[1],
    };
  };

  return cssProperties.reduce(callback, 0);
}

module.exports = convertToObject;
