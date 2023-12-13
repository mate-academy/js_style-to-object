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
  const convertedData = {};
  const stylesString
    = sourceString.split(';')
      .filter(item => item.trim() !== '');

  stylesString.forEach(style => {
    const [attribute, value] = style.split(':').map(part => part.trim());

    convertedData[attribute] = value;
  });

  return convertedData;
}

module.exports = convertToObject;
