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
  const stylesNormalize = style => (
    style
      .split(':')
      .map(x => x.trim())
      .join(': ')
  );

  const stylesArray = sourceString
    .split(';')
    .map(style => stylesNormalize(style))
    .filter(element => element !== '');

  // const stylesObject = {};

  const stylesObject = stylesArray.reduce((collectedStyles, style) => {
    const [propertyName, ptopertyValue] = style.split(': ');

    return {
      ...collectedStyles,
      [propertyName]: ptopertyValue,
    };
  }, {});

  // stylesArray.forEach(property => {
  //   const [value, key] = property.split(': ');

  //   stylesObject[value] = key;
  // });

  return stylesObject;
}

module.exports = convertToObject;
