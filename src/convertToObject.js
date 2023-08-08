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
  const separateStylesInArray = sourceString
    .split(';').map(oneStyle => oneStyle.trim())
    .filter(oneStyle => oneStyle !== '');

  return separateStylesInArray.reduce((acc, oneStyle) => {
    const styleUpdate = oneStyle
      .split(' ')
      .filter(letter => letter !== '' && letter !== ':')
      .map(stringStyle => stringStyle.split('')
        .filter(letter => letter !== ':').join(''));

    const [style, ...propertyStyle] = styleUpdate;

    acc[style] = propertyStyle.join(' ');

    return acc;
  }, {});
}

module.exports = convertToObject;
