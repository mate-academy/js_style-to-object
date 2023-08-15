'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesCollection = sourceString.split(';');

  return stylesCollection.reduce((acc, styleStringWithValue) => {
    const oneStyle = styleStringWithValue
      .split(':')
      .map(partStyle => partStyle.trim());

    if (oneStyle.length === 2) {
      const styleName = oneStyle[0];
      const valueStyle = oneStyle[1];

      acc[styleName] = valueStyle;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
