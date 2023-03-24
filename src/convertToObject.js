'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const listOfStyles = {};

  const normalizeStyles = style => (
    style
      .split(':')
      .map(x => x.trim())
      .join(': ')
  );

  const stylesArray = sourceString
    .split(';')
    .map(x => normalizeStyles(x))
    .filter(element => element !== '');

  stylesArray.forEach((item) => {
    const [propertyName, ptopertyValue] = item.split(': ');

    const key = propertyName;

    listOfStyles[key] = ptopertyValue;
  });

  return listOfStyles;
}

module.exports = convertToObject;
