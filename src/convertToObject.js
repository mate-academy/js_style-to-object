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
  const stylesAll = sourceString.split(';');

  const splitStyles = stylesAll.map(style => style.trim());

  const stylesObject = splitStyles.reduce((acc, style) => {
    const [property, value] = style.split(':').map(part => part.trim());

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
