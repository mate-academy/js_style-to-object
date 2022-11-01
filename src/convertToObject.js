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
  const originString = sourceString.replace(/\s\s+/g, ' ');
  const styles = originString.split(';');
  const stylesToObject = {};
  const validStyles = styles
    .filter(style => style
      .split('')
      .find(symbol => symbol === ':'));

  validStyles.map((style) => {
    const copyStyle = style.split(':');

    stylesToObject[copyStyle[0].trim()] = copyStyle[1].trim();
  });

  return stylesToObject;
}

module.exports = convertToObject;
