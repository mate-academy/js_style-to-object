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
  const contentTrimmedOnTheOutside = sourceString
    .trim()
    .split(';')
    .map(item => item.trim())
    .filter(Boolean);

  const styles = contentTrimmedOnTheOutside.reduce((acc, item) => {
    const [property, value] = item.split(':').map(s => s.trim());

    acc[property] = value;

    return acc;
  }, {});

  return styles;
}

module.exports = convertToObject;
