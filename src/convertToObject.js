'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](/convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const startConvertion = sourceString
    .split(';')
    .map(property => property.trim());

  const removeEmptyStrings = startConvertion.filter(property =>
    (property.length > 0));

  const formattedStyle = removeEmptyStrings.reduce((acc, currentProperty) => {
    const [key, value] = currentProperty
      .split(':')
      .map(property => (property.trim()));

    acc[key] = value;

    return acc;
  }, {});

  return formattedStyle;
}

module.exports = convertToObject;
