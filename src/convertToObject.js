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
  const splitedSource = sourceString.split(';');
  const cssStyle = {};

  for (const style of splitedSource) {
    const [ key, ...properties ] = style
      .split(':').map((value) => value.trim());

    if (key && properties) {
      cssStyle[key] = properties.join(' ');
    }
  }

  return cssStyle;
}

module.exports = convertToObject;
