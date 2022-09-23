'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const modifiedString
    = sourceString.replace(/\s\s+/g, '')
      .replace('\n', '').split(';').filter(n => n).slice(0, -1);

  const property = [];
  let style = [];

  modifiedString.forEach(elem =>
    property.push(elem.split(':')[0]));

  modifiedString.forEach(elem =>
    style.push(elem.split(':')[1]));

  style = style.map(elem => elem.trim());

  const cssStyles = {};

  property.forEach((element, index) => {
    cssStyles[element] = style[index];
  });

  return cssStyles;
}

module.exports = convertToObject;
